'use strict';

const barrelStyles = require('..');
const assert = require('assert').strict;

assert.strictEqual(barrelStyles(), 'Hello from barrelStyles');
console.info('barrelStyles tests passed');
