const request = require("supertest");
const app = require("../app");
const {describe, expect, it} = require("@jest/globals");

describe("Create a book", () => {
  it("should create a new book", async () => {
    const res = await request(app)
      .post("/books")
      .send({
        title: "Test Book",
        author: "Test Author",
        publisher: "Test Publisher",
        year: 2023,
        isbn: "TEST001"
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toHaveProperty("title", "Test Book");
    expect(res.body).toHaveProperty("author", "Test Author");
    expect(res.body).toHaveProperty("publisher", "Test Publisher");
    expect(res.body).toHaveProperty("year", 2023);
    expect(res.body).toHaveProperty("isbn", "TEST001");
  });

  it("should return 400 for missing required fields", async () => {
    const res = await request(app)
      .post("/books")
      .send({
        title: "Test Book"
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});

describe("Test the GET endpoint", () => {
  it("Should return all books in the library", async done => {
    const response = await request(app).get("/books");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    done();
  });

  it("Should return a specific book in the library", async done => {
    const response = await request(app)
      .get("/books/63e687f682d3bbf6a978e202");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id", "63e687f682d3bbf6a978e202");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("author");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("isbn");
    done();
  });
});

describe("Test the PUT endpoint", () => {
  it("Should update a specific book in the library", async done => {
    const response = await request(app)
      .put("/books/63e687f682d3bbf6a978e202")
      .send({
        title: "New Title",
        author: "New Author",
        year: 2000
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", "63e687f682d3bbf6a978e202");
    expect(response.body).toHaveProperty("title", "New Title");
    expect(response.body).toHaveProperty("author", "New Author");
    expect(response.body).toHaveProperty("year", 2000);
    done();
  });
});

describe("Test the DELETE endpoint", () => {
  it("Should delete a specific book in the library", async done => {
    const response = await request(app)
      .delete("/books/63e687f682d3bbf6a978e202");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message", "Book deleted successfully");
    done();
  });
});