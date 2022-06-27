import { test, expect, describe } from "@jest/globals";
import { getAllSnippets, getSnippetsByCategory } from "./snippetsModels.js";
import { pool } from "../db/index.js";

describe("Gets all snippets and receives response containing correct structure", function () {
  test("responds with json", async function () {
    const response = await getAllSnippets();
    expect(response).toEqual(expect.any(Array));
    expect(response).toEqual(
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
    ["sqL", "SQL"],
    ["Sql", "SQL"],
  ])(
    "responds with correct category %s",
    async function (searchTerm, returnedTerm) {
      const response = await getSnippetsByCategory(searchTerm);
      expect(response).toEqual(expect.any(Array));
      expect(response).toEqual(
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
