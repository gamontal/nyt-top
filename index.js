var topstories = function() {
  var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  var exports = module.exports = {};
  var httpGet = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
  };

  exports.key = function(apiKey) { this.key = apiKey; };
  exports.section = function(sec, cb) {
    if ((typeof sec !== 'string') || (typeof sec === 'undefined')) {
      throw new Error('section required');
    }

    var url = 'http://api.nytimes.com/svc/topstories/v1/' + sec + '.json?' + 'api-key=' + this.key;
    var res = httpGet(url);

    var resc = res && res.error && res.error.code || null;

    if (resc === 403) {
      cb(new Error('Account Inactive'));
      return;
    }
    cb(null, res);
  };
  return exports;
}();
