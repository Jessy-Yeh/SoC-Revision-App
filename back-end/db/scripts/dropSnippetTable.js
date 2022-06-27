import {query} from '../index.js';

const sqlString = `DROP TABLE IF EXISTS snippets;`;

async function dropSnippetsTable() {
    const res = await query(sqlString);
    console.log(res.command, "snippet table dropped");
}

dropSnippetsTable();