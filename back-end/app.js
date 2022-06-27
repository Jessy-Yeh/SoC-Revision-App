import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import linksRouter  from './routes/links.js';
import snippetsRouter from './routes/snippets.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/links', linksRouter);
app.use('/snippets', snippetsRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;


/*
The plan for the day:

Set up express server (using Express generator)✅
Set up a database (using Heroku)✅
Install Node-postgres✅
Hook up express app and database (so we can use NODE and JS to start sending our SQL queries)✅
Set up tables in our DB and get the data in them (populate them)✅
Hook up our server’s logic to talk to the DB instead of a file

*/