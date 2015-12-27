var topstories = function() {
  if (typeof require == 'function') {
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var exports = module.exports = {};
    var httpGet = function(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', url, false);
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
    }
  } else {
    var exports = {};
    var httpGet = $.get;
  }

  exports.key = function(apiKey) { this.key = apiKey; };
  exports.section = function(sec, cb) {
    if ((typeof sec !== 'string') || (typeof sec === 'undefined')) {
      throw new Error('section required');
    }

    var url = 'http://api.nytimes.com/svc/topstories/v1/' + sec + '.json?' + 'api-key=' + this.key;
    var res = httpGet(url);

    if (typeof res.status === 'undefined') {
      cb(new Error('Account Inactive'));
      return;
    }
    cb(null, res);
  };
  return exports
}();
