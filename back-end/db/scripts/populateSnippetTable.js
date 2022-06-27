// import - query, data from code snippets lib
// create function, define res, for loop 
// use query - sqlString ${} - array object  
// console.log outside of loop
// call function 

import {query} from '../index.js';
import codeSnippets from '../../libs/code_snippets.js';

async function populateSnippetsTable () {
    let res;
    for (let i = 0; i < codeSnippets.length; i++) {
        res = await query(`INSERT INTO snippets(category, snippet, description) VALUES ($1, $2, $3);`, 
        [codeSnippets[i].category, codeSnippets[i].snippet, codeSnippets[i].description]);
    }
    console.log(res.command, 'Snippets table populated.')
}

populateSnippetsTable();