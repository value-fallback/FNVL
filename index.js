const isFn = require('is-fn');

module.exports = function fnvl(value, fallbackValue) {
	return isFn(value) ? value : fallbackValue;
};
