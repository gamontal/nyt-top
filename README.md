# nyt-top (The Top Stories API)
A Node.js wrapper for [The New York Times](http://www.nytimes.com/) [Top Stories API v1](http://developer.nytimes.com/docs/read/top_stories_api).

## Installation

```
npm install nyt-top
```

## Usage Example

```javascript
var nytTop = require('nyt-top');
nytTop.key('api key'); // set your developer key

nytTop.section('home', function (data) {
    var results = data.results;
    for (var i = 0; i < 10; i++) { // top ten most recent stories
        console.log(results[i].title);
    }
});
```

## API

To use the Top Stories API, you must sign up for an API key. Usage is limited to 5,000 requests per day (rate limits are subject to change). Please read and agree to the API Terms of Use and the Attribution Guidelines before you proceed.

#### `key`

Description: Sets developer API key to make requests

**Parameters:**
  
| Value      | Type      | Required |
| ---------- | --------- | -------- |
| `apiKey`  | string    |   yes    |


#### `section`

Description: Returns a list of articles and associated images by section

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


## License

[MIT](https://github.com/gmontalvoriv/nyt-top/blob/master/LICENSE)
