var expect = require("chai").expect;
var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;

before(function (done) {
  var app = require('../app');
  server = http.createServer(app);
  server.listen(TEST_PORT, function () {
    done();
  });
})
after(function (done) {

  server.close();
  done();
})

describe("POST: /api/joke ", function () {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/joke",
    method: "POST",
    json: true,
    body: { joke: "Its better to be late than to arrive ugly" }
  }

  it("should get a random joke", function (done) {
    request(options, function (error, res, body) {
      var addedJoke = body.joke;
      expect(addedJoke.joke).to.be.equal("Its better to be late than to arrive ugly");
      //You should also check whether the joke actually was added to the Data-store
      done();
    });
  })

  it("should get all jokes", function (done) {
    request(options, function (error, res, body) {
      var allJokes = body.joke;
      expect(allJokes.joke).to.be.equal("Its better to be late than to arrive ugly");
      //You should also check whether the joke actually was added to the Data-store
      done();
    });

  })



  it("should delete a joke at the given index 4", function (done) {
    request("http://localhost:" + TEST_PORT + "/api/joke/delete/4", function (error, res, body) {
      
      
      let result = JSON.parse(body)
      expect(result.jokes.length).to.be.equal(4); 
      // grunden til 4 er fordi de andre test tilføjer til joken så der er 5 i alt så sletter vi 1
      done();
    });

  })
});
