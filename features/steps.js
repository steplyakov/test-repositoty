var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

var expect = chai.expect;


module.exports = function() {

  this.Given(/^I go to "([^"]*)"$/, function (url, callback) {
      browser.get('https://www.odesk.com/');
      callback();
  });

  this.Then(/^I should see a "([^"]*)" button$/, function (arg, callback) {
      expect(browser.isElementPresent(by.id(arg)));
      callback();
  });

  this.Then(/^I should see a "([^"]*)" button$/, function (arg, callback) {
      expect(browser.isElementPresent(by.id(arg)));
      callback();
  });
};