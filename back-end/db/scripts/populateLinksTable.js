/*
Import query function from db
Write a for loop to loop through array of links
For each, use the query function with a SQL string that populates the table (INSERT INTO links)
Use Query function to populate the table;
*/

import {query} from '../index.js';
import resourceLinks from '../../libs/links.js';


async function populateLinksTable() {
    let res;
    for(let i = 0; i < resourceLinks.length; i++){
        res = await query(
            `INSERT INTO links (category, link, description, contributor) VALUES ($1, $2, $3, $4);`,
            [resourceLinks[i].category, resourceLinks[i].link, resourceLinks[i].description, resourceLinks[i].contributor]);
        }
    console.log(res.command, "links table populated");
}

populateLinksTable();