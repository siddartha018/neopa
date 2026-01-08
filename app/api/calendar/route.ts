import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM calendar_events ORDER BY date ASC');
    client.release();
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    // Fallback to empty array if DB fails (e.g. not set up yet)
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const { date, title, type, status, description } = await request.json();
    const client = await pool.connect();
    // Ensure table exists (fallback)
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

    const { rows } = await client.query(
      'INSERT INTO calendar_events (date, title, type, status, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [date, title, type, status, description]
    );
    client.release();
    return NextResponse.json({ message: 'Item added successfully', data: rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Error adding item:', error);
    const errorMessage = (error as Error).message || 'Unknown error';
    return NextResponse.json({ message: 'Error adding item', error: errorMessage }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, date, title, type, status, description } = await request.json();
    
    if (!id) {
        return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const client = await pool.connect();
    const { rows } = await client.query(
      'UPDATE calendar_events SET date = $1, title = $2, type = $3, status = $4, description = $5 WHERE id = $6 RETURNING *',
      [date, title, type, status, description, id]
    );
    client.release();
    
    if (rows.length === 0) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Item updated successfully', data: rows[0] });
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json({ message: 'Error updating item' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) {
        return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const client = await pool.connect();
    await client.query('DELETE FROM calendar_events WHERE id = $1', [id]);
    client.release();
    return NextResponse.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json({ message: 'Error deleting item' }, { status: 500 });
  }
}
