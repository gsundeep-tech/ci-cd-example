var supertest = require("supertest");

var server = supertest.agent("http://localhost:3000");

describe("Health unit test", function () {
  it("should return Healthy", function (done) {
    // calling Health api
    server
      .get("/health")
      .expect(200)
      .end(function (err, res) {
        res.status === 200;
        res.text === "Healthy";
        res.body.error === false;
        done();
      });
  });
});
