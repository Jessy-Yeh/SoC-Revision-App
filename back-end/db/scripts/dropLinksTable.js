import {query} from '../index.js';

const sqlString = `DROP TABLE IF EXISTS links;`;

async function dropLinksTable() {
    const res = await query(sqlString);
    console.log(res.command, "links table dropped");
}

dropLinksTable();