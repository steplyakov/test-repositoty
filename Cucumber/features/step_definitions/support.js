var Support = function(){
};

Support.prototype.get = function(sut, url, callback){
  sut.browser.get(url).then(function(result) {
    callback(result);
  });
};

Support.prototype.isElementPresent = function(sut, find, callback){
  sut.browser.isElementPresent(sut.by.id(find)).then(function(result) {
     callback(result);
  });
};

module.exports = new Support();