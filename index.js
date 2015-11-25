var topstories = function() {
	  if (typeof require == 'function') {
	      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	      var exports = module.exports = {};	
	      var httpGet = function(url)
	      {
		        var xmlHttp = new XMLHttpRequest();
		        xmlHttp.open("GET", url, false);
		        xmlHttp.send(null);
		        return JSON.parse(xmlHttp.responseText);
	      }	
	  } else {
	      var exports = {};
	      var httpGet = $.get;
	  }
    
    exports.key = function(apiKey) { this.key = apiKey; };
	  exports.section = function(section, cb) {
	      var url = 'http://api.nytimes.com/svc/topstories/v1/' + section + '.json?' + 'api-key=' + this.key;
	      cb(httpGet(url));
	  };
    
	  return exports
}();
