var expect = require("chai").expect;

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      //done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", function(){
    expect(foo).to.equal(true); // expect is something we get from chai mocha can't do this.
  });
}); 

// what runs this code is not node but mocha. node doesn't know what describe, before and it is. 