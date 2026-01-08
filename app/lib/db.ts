import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not defined');
}

// Parse the connection string and add connection timeout parameters
const connectionString = process.env.DATABASE_URL;

// Add connection timeout to the connection string if not present
let finalConnectionString = connectionString || '';
if (!finalConnectionString.includes('connect_timeout')) {
  const separator = finalConnectionString.includes('?') ? '&' : '?';
  finalConnectionString = `${finalConnectionString}${separator}connect_timeout=30`;
}

const pool = new Pool({
  connectionString: finalConnectionString,
  ssl: finalConnectionString.includes('neon.tech') || finalConnectionString.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : false,
  max: 10, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 30000, // Wait 30 seconds before timing out when connecting a new client
});

// Handle connection errors gracefully
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Test connection on startup
pool.connect()
  .then((client) => {
    console.log('Database connection successful');
    client.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });

export default pool;
