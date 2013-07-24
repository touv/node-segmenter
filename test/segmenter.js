'use strict';
var should = require('should')
, Segmenter = require('../lib/segmenter.js');

describe('Segmenter', function () {
    /* */
    describe('#1 one call', function () {
        var seg = new Segmenter({ delimiter: "." });
        it('should', function() {
            var arr = seg.fetch('a.b.c.');
            arr[0].should.equal('a');
            arr[1].should.equal('b');
            arr[2].should.equal('c');
          }
        );
      }
    );

    describe('#1 two call', function () {
        var seg = new Segmenter({ delimiter: "." });
        it('should', function() {
            var arr1 = seg.fetch('a.b.c');
            var arr2 = seg.fetch('.d.e.');
            var arr = arr1.concat(arr2);
            arr[0].should.equal('a');
            arr[1].should.equal('b');
            arr[2].should.equal('c');
            arr[3].should.equal('d');
            arr[4].should.equal('e');
          }
        );
      }
    );

    /* */
  }
);
