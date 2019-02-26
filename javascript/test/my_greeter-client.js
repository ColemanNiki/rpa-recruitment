'use strict';

var assert = require('assert');
var MyGreeter = require('../src/MyGreeter.js');

describe('MyGreeter.Client', function () {

    describe('Constructor', function () {

        it('should be instantiated', function() {
            var greeter = new MyGreeter.Client();
            assert.ok(greeter instanceof MyGreeter.Client);
        });
    });

    describe('getGreeting', function () {

        it('should return true answer', function() {
            var greeter = new MyGreeter.Client();
            assert.equal(greeter.getGreeting().length > 0, true);
            assert.equal(greeter.getGreeting(new Date().setTime(1551153600000)),'Good afternoon');
            assert.equal(greeter.getGreeting(new Date().setTime(1551110400000)),'Good morning');
            assert.equal(greeter.getGreeting(new Date().setTime(1551175200000)),'Good evening');
        });
    });
});
