// test('adds 1 + 2 to equal 3', () => {
//   expect(1 + 2).toBe(3);
// });
require("dotenv").config();
const request = require('supertest');
const app = require('./server/app')

describe('Test the root path', () => {
    afterAll(async(done) => {
      setImmediate(done);
    });

    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should response the GET method', (done) => {
      request(app).get('/getItems').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});