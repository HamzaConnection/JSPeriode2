var expect = require('chai').expect;
var tools = require('../lib/tools');

describe("Tools", function () {
    describe("printName()", function () {
        it("should print the last name first", function () {
            var result = tools.printName({ first: "Alex", last: "Banks" })
            expect(result).to.equal("Banks, Alex");
        });
    });

    describe("loadWiki()", function (done) { // we are using done since it's a async function when done is called we know it's finished
        
    it("Load Abraham Lincoln's wikipedia page");
        tools.loadWiki({ first: "Abraham", last: "Lincoln" }, function (html) {
            expect(html).to.be.ok;
        });
    });


});

