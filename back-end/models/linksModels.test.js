/*
Write an asynchronous test (in models/linksModels.test.js) which:

Use the functions in linksModels to query the database
Checks if the response's body is an array
Checks if every item in the array is an object with the structure: { link_id: any number, category: any string, link: any string, description: any string, contributor: any string }

PLAN

Import Supertest
Import Jest
Import app from app.js
Open Jest describe block and start a test block
Use Jest to test the function
Use Jest expect method to check response
*/

import { test, expect, describe } from "@jest/globals";
import {getAllLinks, getLinksByCategory} from "./linksModels.js";
import { pool } from "../db/index.js";

describe("Gets all links and receives response containing correct structure", function () {
  test("responds with json", async function () {
    const response = await getAllLinks();
    expect(response).toEqual(expect.any(Array));
    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          link_id: expect.any(Number),
          category: expect.any(String),
          link: expect.any(String),
          description: expect.any(String),
          contributor: expect.any(String),
        }),
      ])
    );
  });

 it.each([
    ["react", "React"],
    ["ReAct", "React"],
    ["general", "General"],
    ["GENeral", "General"],
    ["array methods", "Array Methods"],
    ["ARRay MethOds", "Array Methods"],
  ])(
    "responds with correct category %s",
    async function (searchTerm, returnedTerm) {
    const response = await getLinksByCategory(searchTerm);
    expect(response).toEqual(expect.any(Array));
    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          link_id: expect.any(Number),
          category: returnedTerm,
          link: expect.any(String),
          description: expect.any(String),
          contributor: expect.any(String),
          }),
        ])
      );
    }
  );
});

//After each test - close the pool so you don't get the "Jest did not exit one second after the test run has completed." message
afterAll((done) => {
  pool.end();
  done();
});
