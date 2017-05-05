const assert = require('assert');
const fnvl = require('../');

describe('FNVL', () => {
	it('should return `value` when `value` is Function.', () => {
		let fn = function () {};
		let anfn = () => {};

		assert.strictEqual(fnvl(console.log, 0), console.log);
		assert.strictEqual(fnvl(fn, true), fn);
		assert.strictEqual(fnvl(anfn, null), anfn);
	});
	it('should return `fallbackValue` when `value` is not Function.', () => {
		assert.strictEqual(fnvl(0, false), false);
		assert.strictEqual(fnvl(null, true), true);
		assert.strictEqual(fnvl([1, 2, 3], 'x'), 'x');
		assert.strictEqual(fnvl({ a: 0, b: 1, c: 2}, 100), 100);
		assert.strictEqual(fnvl(console, console.log), console.log);
	});
});
