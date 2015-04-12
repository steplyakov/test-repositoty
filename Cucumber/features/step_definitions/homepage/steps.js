var support = require('../support');
var should = require('should');

var steps = function() {

  this.Given(/^I am on the homepage$/, function(callback) {
    support.get(this, 'https://www.odesk.com/', function(result){
      setTimeout(callback, 1000);
    });
  });

  this.Then(/^I should see a "([^"]*)" button$/, function(id, callback) {
    support.isElementPresent(this, id, function(result){
        result.should.equal(true);             
        setTimeout(callback, 1000);
      });     
  });
};

module.exports = steps;