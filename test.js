require("dotenv").config();
const request = require("supertest");
const app = require("./server/app");

describe("Test /getItems", () => {
  afterAll(async done => {
    setImmediate(done);
  });

  test("It should send a truthy response and status code of 200 if itemID is passed to /getItems", done => {
    request(app).get("/getItems?itemID=1").then(response => {
      expect(response.statusCode).toBe(200);
      expect(response).toBeTruthy();
      done();
    });
  });

  test("It should send a status code of 404 if itemID is not passed to /getItems", done => {
    request(app).get("/getItems").then(response => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
