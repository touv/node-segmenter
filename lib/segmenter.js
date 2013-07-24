'use strict';

var path = require('path')
, fs = require('fs')
, basename = path.basename(__filename, '.js')
, util = require('util')
;

function Segmenter(options) {

  if (!(this instanceof Segmenter)) {
    return new Segmenter(options);
  }
  this.remainder = '';
  this.counter = 0;
  try {
    this._delimiter = options.delimiter ? JSON.parse('"' + options.delimiter + '"') : '\n';
  }
  catch (e) {
    this._delimiter = '\n';
  }
}

Segmenter.prototype.delimiter = function ()
{
  return this._delimiter;
}

Segmenter.prototype.fetch = function (chunk, encoding) {
  var lines;
  if (Buffer.isBuffer(chunk)) {
    lines = chunk.toString().split(this._delimiter);
  }
  else if (typeof chunk === 'string') {
    lines = chunk.split(this._delimiter);
  }
  else {
    lines = ['', ''];
  }
  lines.unshift(this.remainder + lines.shift());
  this.remainder = lines.pop();
  this.counter += lines.length;
  return lines;
}

module.exports = Segmenter;
