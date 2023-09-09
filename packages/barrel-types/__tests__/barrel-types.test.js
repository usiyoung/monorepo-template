'use strict';

const barrelTypes = require('..');
const assert = require('assert').strict;

assert.strictEqual(barrelTypes(), 'Hello from barrelTypes');
console.info('barrelTypes tests passed');
