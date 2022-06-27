import request from "supertest";
import { test, expect, describe } from "@jest/globals";
import app from "../app.js";
import { pool } from "../db/index.js";

describe("Gets all code snippets and receives response containing correct structure", function () {
  test("responds with json", async function () {
    const response = await request(app)
      .get("/snippets")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      success: true,
      payload: expect.any(Array),
    });
    expect(response.body.payload).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(String),
          snippet: expect.any(String),
          description: expect.any(String),
        }),
      ])
    );
  });

  it.each([
    ["react", "React"],
    ["ReAct", "React"],
    ["SqL", "SQL"],
    ["sQl", "SQL"],
  ])(
    "responds with correct category %s",
    async function (searchTerm, returnedTerm) {
      const response = await request(app)
        .get(`/snippets?category=${searchTerm}`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        success: true,
        payload: expect.any(Array),
      });
      expect(response.body.payload).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            category: returnedTerm,
            snippet: expect.any(String),
            description: expect.any(String),
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
