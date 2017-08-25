# cubic-interp [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Cubic interpolation function as implemented by Jason Bevins in libnoise.

## Installation

```sh
$ npm install --save cubic-interp
```

## Usage

```js
var cubicInterp = require('cubic-interp');

var values = {
    n0: 1,
    n1: 5,
    n2: 8,
    n3: 10
};

var alpha = 0.5;

cubicInterp(values.n0, values.n1, values.n2, values.n3, alpha);
```

## Project Setup

This project uses [typescript](https://github.com/Microsoft/TypeScript) as its build system.

1. Install dependencies: `$ npm i && npm run typings`
3. Build: `$ npm run build`

## Testing

This project is using [mocha](http://mochajs.org/) for unit testing.

- Compile and run tests: `$ npm run build+test`
- Watch: `$npm run watch`

## License

**LGPL v2.1**

[npm-image]: https://badge.fury.io/js/cubic-interp.svg
[npm-url]: https://npmjs.org/package/cubic-interp
[travis-image]: https://travis-ci.org/dpmorrow/cubic-interp.svg?branch=master
[travis-url]: https://travis-ci.org/dpmorrow/cubic-interp
[daviddm-image]: https://david-dm.org/dpmorrow/cubic-interp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dpmorrow/cubic-interp
