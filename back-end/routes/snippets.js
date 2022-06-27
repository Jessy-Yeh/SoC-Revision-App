/*
GET all snippets
import query function
Make a call to the database for all links (use query function with a SQL string SELECT * FROM snippets)
Store that inside a variable (dbres.rows)
Return a JSON with success and above variable
Separate in to models
*/

import express from "express";
const router = express.Router();
import { getAllSnippets, getSnippetsByCategory, getSnippetsByID } from '../models/snippetsModels.js';

/*GET snippets Listening */
router.get("/", async function (req, res, next) {
    const snippetQuery = req.query;
    if (snippetQuery.category !== undefined){
        console.log('getting snippets by category')
        const snippetsFound = await getSnippetsByCategory(snippetQuery.category);
        console.log(snippetsFound);
        if (snippetsFound.length > 0){
            res.json({
                success: true,
                payload: snippetsFound
            })
            return;
        }   else {
            res.json({
                success: false,
                payload: "No results found"
            })
            return;
        }
    };
    const allSnippets = await getAllSnippets();
    res.json({ success: true, payload: allSnippets})
});

router.get("/:id", async function (req, res, next) {
    const requestedID = Number(req.params.id);
    const snippetFound = await getSnippetsByID(requestedID);
    //Check if Snippet found (i.e. if res.rows not empty) and return success if so
    if (snippetFound.length > 0) {
      res.json({
        success: true,
        payload: snippetFound,
      });
      return;
    } //Return failure if no Snippet found
    else {
      res.json({
        success: false,
        payload: "No Snippet not found",
      });
      return;
    }
})

export default router;