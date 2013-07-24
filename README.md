# Segmenter for NodeJS

[![Build Status](https://secure.travis-ci.org/touv/node-segmenter.png?branch=master)](http://travis-ci.org/touv/node-segmenter)

To segment a set of chunks from strings or streams
It's a collection of javascript tools (parse/stringify) for CSV strings. It can work row by row. 
Unlike many other similar modules, it works correctly with fields containing newlines (including on the first line)
 
## Contributors

  * [Nicolas Thouvenin](https://github.com/touv) 

# Installation

With [npm](http://npmjs.org) do:

    $ npm install segmenter

# Examples

## Basic
```javascript
	var Segmenter = require('segmenter'),
	seg = new Segmenter({ delimiter: "|" });

    seg.fecth('a|b|c')
```
Output:
	
	[ 'a', 'b', 'c' ]

## Advanced
```javascript
	var Segmenter = require('segmenter'),
	seg = new Segmenter();

    seg.fecth('a|b|c')
```
Output:
	
	[ 'a', 'b', 'c' ]
		

# Tests

Use [mocha](https://github.com/visionmedia/mocha) to run the tests.

    $ npm install mocha
    $ mocha test

# API Documentation

## new Segmenter(Object options) : Object

Create the object.

Options are :

- **delimiter** - String : Char or String that separe the segments. _Default : \n_


## fetch(String chunk) : Array

Fetch segments in a String.

## fetch(Buffer chunk, [String encoding]) : Array

Fetch segments in a Buffer.

	


# Also

* https://npmjs.org/package/line-reader
* https://npmjs.org/package/carrier
* https://npmjs.org/package/byline
* https://npmjs.org/package/each_line

# License

[MIT/X11](https://github.com/touv/node-segmenter/blob/master/LICENSE)
