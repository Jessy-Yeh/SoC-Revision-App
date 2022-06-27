import express from "express";
const router = express.Router();
import { getAllLinks, getLinksByCategory, addLinkByCategory } from '../models/linksModels.js';

/* GET links listing. */
router.get("/", async function (req, res, next) {
  const linkQuery = req.query;
  if (linkQuery.category !== undefined){
    const linksFound = await getLinksByCategory(linkQuery.category);
    if (linksFound.length > 0){
      res.json({
        success: true,
        payload: linksFound,
      })
      return;
    }
  }
  const allLinks = await getAllLinks();
  res.json({ success: true, payload: allLinks });
});



/*
GET all links
import query function
Make a call to the database for all links (use query function with a SQL string SELECT * FROM links)
Store that inside a variable (dbres.rows)
Return a JSON with success and above variable
Separate in to models
*/

router.post("/", async function (req, res, next) {
  const linkBody = req.body;
  const newLink = await addLinkByCategory(linkBody)

  res.json({ success: true, payload: newLink })
})

export default router;