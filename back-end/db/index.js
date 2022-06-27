import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config()

const connectionString = process.env.CONNECTIONSTRING;

export const pool = new Pool({
    connectionString,
    ssl: {rejectUnauthorized: false}
});

export function query(text, params, callback) {
    return pool.query(text, params, callback)
};

/* //Test database connection working

let res =  await query('SELECT NOW()')

console.log(res)  */
