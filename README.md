# eslint-config-benmvp

[![version](https://img.shields.io/npm/v/eslint-config-benmvp.svg?style=flat-square)](http://npm.im/eslint-config-benmvp)
[![Build Status](https://travis-ci.org/benmvp/eslint-config-benmvp.svg?branch=master)](https://travis-ci.org/benmvp/eslint-config-benmvp)
[![Dev Dependencies status](https://img.shields.io/david/dev/benmvp/eslint-config-benmvp.svg?style=flat-square)](https://david-dm.org/benmvp/eslint-config-benmvp#info=devDependencies)
[![downloads](https://img.shields.io/npm/dt/eslint-config-benmvp.svg?style=flat-square)](http://npm-stat.com/charts.html?package=eslint-config-benmvp&from=2016-03-27)
[![Maintenance Status](https://img.shields.io/badge/status-maintained-brightgreen.svg)](https://github.com/benmvp/eslint-config-benmvp/pulse)
[![license](https://img.shields.io/npm/l/eslint-config-benmvp.svg?style=flat-square)](http://spdx.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/benmvp/eslint-config-benmvp.svg)](https://greenkeeper.io/)

This package provides Ben Ilegbodu's `.eslintrc.json` as an extensible shared config for all of his projects. 😀

## Usage

The package exports three ESLint configurations for your usage.

### eslint-config-benmvp

The default export contains all of the ESLint rules, including ES6+/ES2015+
and React. It requires [`eslint`](https://github.com/eslint/eslint), [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react), [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) and [`babel-eslint`](https://github.com/babel/babel-eslint).

Install the dependencies:

```sh
npm install --save-dev eslint eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint eslint-config-benmvp
```

Extend `eslint-config-benmvp` in your [`.eslintrc.json`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files):

```json
{
    "extends": "benmvp"
}
```


_NOTE:_ This configuration extends `eslint:recommended` and `plugin:react/recommended`.

### eslint-config-benmvp/base

Lints ES6+/ES2015+ but does not lint React. It requires [`eslint`](https://github.com/eslint/eslint) and [`babel-eslint`](https://github.com/babel/babel-eslint).

Install the dependencies:

```sh
npm install --save-dev eslint babel-eslint eslint-config-benmvp
```

Extend `eslint-config-benmvp/base` in your [`.eslintrc.json`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files):

```json
{
    "extends": "benmvp/base"
}
```

_NOTE:_ This configuration extends `eslint:recommended`.

### eslint-config-benmvp/legacy

Lints ES5-. Only requires [`eslint`](https://github.com/eslint/eslint).

Install the dependencies:

```sh
npm install --save-dev eslint eslint-config-benmvp
```

Extend `eslint-config-benmvp/legacy` in your [`.eslintrc.json`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files):

```json
{
    "extends": "benmvp/legacy"
}
```

_NOTE:_ This configuration extends `eslint:recommended`.

## License

[MIT](LICENSE). Copyright (c) 2016 Ben Ilegbodu.

## Thanks

Many thanks to Airbnb and their example [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
