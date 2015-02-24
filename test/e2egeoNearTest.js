var expect = require('chai').expect;
var superagent = require('superagent');
var radConvertor = {
  toMiles : Math.PI*3959/180
}

var requestData = {
  miles: 15,
  limit: 5,
  coordinates: [37.783707, -122.408978]
}


describe("e2e: Course endpoints :", function(){
  it("sends a GET to /course/sortedCourses", function(done){
  superagent.get("http://localhost:8080/api/course/sortedCourses")
    .send(requestData)
    .end(function(err, results){
      if (err){
        console.log(err);
      }
      if (results){
        var parsedResults = JSON.parse(results.text);
        //receiving JSON;
        expect(results.status).to.equal(200);
        //1st result: Presidio
        expect(parsedResults[0].obj.name).to.equal('Presidio Golf Course');
        //5th result: LMGC
        expect(parsedResults[4].obj.name).to.equal('Lake Merced Golf Club');
        expect(parsedResults.length).to.equal(5);
        done();
      }
    });
});

})