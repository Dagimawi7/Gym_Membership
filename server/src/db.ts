// connects backend to the database
import { Pool } from 'pg';
import dotenv from 'dotenv';

// load .env file so we can access port and database url 
dotenv.config();

// creates a multiple connection pool to the database to grab data, since they know how to get to the database
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
});

// Helper function to run SQL commands
export const query = (text: string, params?:
any[]) => {
    return pool.query(text, params);
};


