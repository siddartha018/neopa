import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC'
    );
    client.release();
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const client = await pool.connect();

    try {
      // Insert contact submission into database
      const result = await client.query(
        `INSERT INTO contact_submissions (name, email, phone, message, created_at)
         VALUES ($1, $2, $3, $4, NOW())
         RETURNING id`,
        [name, email, phone || null, message]
      );

      client.release();

      return NextResponse.json(
        {
          success: true,
          message: 'Contact submission received successfully',
          id: result.rows[0].id,
        },
        { status: 201 }
      );
    } catch (dbError) {
      client.release();
      throw dbError;
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    const err = error as { code?: string; message?: string };
    
    // Handle database connection errors
    if (err.code === '42P01') {
      // Table doesn't exist
      return NextResponse.json(
        {
          error: 'Database table does not exist. Please run the SQL query to create the contact_submissions table.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error: err.message || 'Failed to submit contact form',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    await client.query('DELETE FROM contact_submissions WHERE id = $1', [id]);
    client.release();
    
    return NextResponse.json(
      { message: 'Contact submission deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    const err = error as { code?: string; message?: string };
    
    return NextResponse.json(
      {
        error: err.message || 'Failed to delete contact submission',
      },
      { status: 500 }
    );
  }
}

