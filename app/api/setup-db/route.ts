import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ 
        message: 'DATABASE_URL is not set. Please add it to your .env.local file.',
        error: 'Missing DATABASE_URL',
        hint: 'Make sure your .env.local file exists in the root directory and contains: DATABASE_URL="your_connection_string"'
      }, { status: 500 });
    }
    
    // Check if using pooled connection (recommended for Neon)
    const connectionString = process.env.DATABASE_URL;
    if (connectionString.includes('neon.tech') && !connectionString.includes('pooler') && !connectionString.includes('-pooler')) {
      console.warn('Warning: You may be using a direct connection. Neon recommends using a pooled connection string (with -pooler suffix) for better performance.');
    }
    
    const client = await pool.connect();
    
    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS calendar_events (
        id SERIAL PRIMARY KEY,
        date TEXT NOT NULL,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        status TEXT NOT NULL,
        description TEXT
      );
    `);
    
    client.release();
    return NextResponse.json({ message: 'Database setup complete' });
  } catch (error) {
    console.error('Error setting up database:', error);
    
    // More specific error messages
    const err = error as { code?: string; message?: string };
    if (err.code === 'ETIMEDOUT') {
      return NextResponse.json({ 
        message: 'Connection timeout. This often happens when:',
        error: 'Connection timeout',
        causes: [
          'Database is auto-suspended (Neon databases suspend when idle). First connection may take 10-30 seconds.',
          'You might be using a direct connection instead of pooled connection.',
          'Network connectivity issues.',
        ],
        solutions: [
          'Wait a moment and try again (first connection after idle period can be slow).',
          'Use the pooled connection string from Neon Console (should include "-pooler" in hostname).',
          'Ensure your DATABASE_URL includes: ?connect_timeout=30',
          'Check that your Neon project is not paused or deleted.'
        ],
        hint: 'Go to Neon Console > Connection Details > Copy the "Pooled connection" string'
      }, { status: 500 });
    }
    
    const errorMessage = err.message || 'Unknown error';
    return NextResponse.json({ 
      message: 'Error setting up database', 
      error: errorMessage,
      code: err.code 
    }, { status: 500 });
  }
}
