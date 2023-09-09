'use strict';

const barrelUtils = require('..');
const assert = require('assert').strict;

assert.strictEqual(barrelUtils(), 'Hello from barrelUtils');
console.info('barrelUtils tests passed');
