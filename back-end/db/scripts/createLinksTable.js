/*
Import query function from db
Write a SQL string that creates the table (CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_contraint,
   column2 datatype(length) column_contraint,
   column3 datatype(length) column_contraint,
   table_constraints
);)
Use Query function to create the table;
*/

import {query} from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS links (link_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, category TEXT, link TEXT, description TEXT, contributor TEXT);`;

async function createLinksTable() {
    const res = await query(sqlString);
    console.log(res.command, "links table created");
}

createLinksTable();