'use strict';

var assert = require('assert');

var webstorage = require('webstorage');
var redis = require('..');

describe('index', function() {

  describe('keys', function() {
    it('should return all keys stored', function() {

    });
  });

  describe('getItem', function() {
    it('should return the value assosiated wit the given key.', function() {

    });
  });

  describe('setItem', function() {
    it('should add or update the key/value pair', function() {
      var storage = webstorage(redis());
      storage.setItem('foo', 'bar');
    });
  });

  describe('removeItem', function() {
    it('should remove the item with the given key', function() {

    });
  });

});
