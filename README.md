# FNVL
[![license](https://img.shields.io/github/license/value-fallback/FNVL.svg?style=flat-square)](https://github.com/value-fallback/FNVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/fnvl.svg?style=flat-square)](https://www.npmjs.com/package/fnvl)
[![npm](https://img.shields.io/npm/dt/fnvl.svg?style=flat-square)](https://www.npmjs.com/package/fnvl)
[![Travis](https://img.shields.io/travis/value-fallback/FNVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/FNVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/fnvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fnvl)

```
npm install fnvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add fnvl
```

## Usage

```javascript
const fnvl = require('fnvl');

function someFn() {
	// ...
}

// When a value is not Function, it will return fallback value.
let a = fnvl(10, 'x'); // a = 'x'
let b = fnvl([1, 2, 3], console.log); // b = console.log

// When a value is Function, it will return that value.
let c = fnvl(console.error, 1); // c = console.error
let d = fnvl(someFn, () => {}); // d = someFn
```

## API

### fnvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
