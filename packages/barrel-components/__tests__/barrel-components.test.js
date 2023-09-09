'use strict';

const barrelComponents = require('..');
const assert = require('assert').strict;

assert.strictEqual(barrelComponents(), 'Hello from barrelComponents');
console.info('barrelComponents tests passed');
