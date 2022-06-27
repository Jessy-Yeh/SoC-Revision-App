import {query} from '../db/index.js';

export async function getAllSnippets() {
    const dbres = await query(`SELECT * FROM snippets;`);
    return dbres.rows;
};

export async function getSnippetsByCategory(category) {
    const dbres = await query(`SELECT * FROM snippets WHERE LOWER(category)=LOWER($1);`, [category]);
    return dbres.rows;
};

export async function getSnippetsByID(ID) {
    const dbres = await query(`SELECT * FROM snippets WHERE (id)=($1);`, [ID]);
    return dbres.rows;
};