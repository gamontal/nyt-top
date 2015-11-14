var nyt_top = function() {
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

                exports.get_key = function(api_key) { this.key = api_key; }
                
	        exports.section = function(section) {
	          var url = 'http://api.nytimes.com/svc/topstories/v1/' + section + '.json?' + 'api-key=' + this.key;
	          return httpGet(url);
	        }
                
	        return exports
              }();