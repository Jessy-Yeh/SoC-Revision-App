import {query} from '../db/index.js';

export async function getAllLinks() {
    const dbres = await query(`SELECT * FROM links;`);
    return dbres.rows;
}

export async function getLinksByCategory(category) {
    const dbres = await query(`SELECT * FROM links WHERE LOWER(category)=LOWER($1);`, [category]);
    return dbres.rows;
}

export async function addLinkByCategory(body) {
    const dbres = await query(`INSERT INTO links(category, link, description, contributor) VALUES($1, $2, $3, $4) RETURNING *;`, [body.category, body.link, body.description, body.contributor]);
    return dbres.rows;
}