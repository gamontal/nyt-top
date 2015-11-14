# nyt-top (The Top Stories API)
A Node.js wrapper for [The New York Times](http://www.nytimes.com/) [Top Stories API v1](http://developer.nytimes.com/docs/read/top_stories_api)

##Installation

```
npm install nyt-top
```

##Usage Example

```javascript
var nyt = require('nyt-top');

var api_key = 'your-api-key';
nyt.setKey(api_key);

nyt.section('science').last_updated; // => 2015-11-14T12:50:20-05:00
```

##API

To use the Top Stories API, you must sign up for an API key. Usage is limited to 5,000 requests per day (rate limits are subject to change). Please read and agree to the API Terms of Use and the Attribution Guidelines before you proceed.

`setKey`
----------

Description: Sets developer key to make requests

**Parameters:**
  
| Value      | Type      | Required |
| ---------- | --------- | -------- |
| `api_key`  | string    |   yes    |


`section`
----------

Description: Returns `article` object

**Parameters:**
  
| Name      | Type      | Required |
| ---------- | --------- | --------- |
| `section name` | string | yes    |

**List of values:**
- home
- world
- national
- politics 
- nyregion
- business
- opinion
- technology 
- science
- health
- sports
- arts
- fashion
- dining
- travel
- magazine
- realestate

#### Notes: 

- Visit http://developer.nytimes.com/docs/read/top_stories_api for more information about the official API.


##License

[MIT](https://github.com/gmontalvoriv/nyt-top/blob/master/LICENSE)
