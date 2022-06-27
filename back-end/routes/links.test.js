/*
Write an asynchronous test (in routes/links.test.js) which:

Sends a GET /links request to our app using Supertest
Checks if the response's HTTP status code is 200
Checks if the response's body is an object with the structure: { success: true, payload: array }
Checks if every item in the payload array is an object with the structure: { id: any number, category: any string, link: any string, description: any string, contributor: any string }

PLAN

Import Supertest
Import Jest
Import app from app.js
Open Jest describe block and start a test block
Use request method from supertest, passing in app
.get('user')
Use Jest expect method to check status code, response body and payload array
*/

import request from "supertest";
import { test, expect, describe } from "@jest/globals";
import app from "../app.js";
import { pool } from "../db/index.js";

describe("Gets all links and receives response containing correct structure", function () {
  test("responds with json", async function () {
    const response = await request(app)
      .get("/links")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      success: true,
      payload: expect.any(Array),
    });
    expect(response.body.payload).toEqual(
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
      const response = await request(app)
        .get(`/links?category=${searchTerm}`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        success: true,
        payload: expect.any(Array),
      });
      expect(response.body.payload).toEqual(
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
