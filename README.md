# nyt-top (The Top Stories API)
A Node.js wrapper for [The New York Times](http://www.nytimes.com/) [Top Stories API v1](http://developer.nytimes.com/docs/read/top_stories_api).

## Installation

```
npm install nyt-top
```

## Usage Example

```javascript
var nytTop = require('nyt-top');
nytTop.key('api key'); // set your Top Stories API developer key

nytTop.section('home', function (err, data) {
  if (err) { console.log(err); } else {
    var results = data.results;
    for (var i = 0; i < 10; i++) { // top ten most recent stories
      console.log(results[i].title);
    }
  }
});
```

## API

### .key(apiKey)

> Sets developer API key.

#### apiKey

Type: `string`

NYT's Top Stories API key.

### .section(sectionName, callback)

> Get a list of articles

#### sectionName

Type: `string`

NYT's article section.

#### callback(err, data)

Type: `function`

Returns a list of articles in JSON format.

**List of section values:**
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
