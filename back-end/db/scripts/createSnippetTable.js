// imports - Query function
// Create sqlString [Create table SQL syntax]
// use query function, pass in sql string
// console log
// Call function at the end.

import {query} from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS snippets (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, category TEXT, snippet TEXT, description TEXT);`;

async function createSnippetTable () {
    let res = await query(sqlString);
    console.log(res.command, 'Snippet table created.');
};

createSnippetTable();