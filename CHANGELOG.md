## v4.0.0 (May 31, 2016)
- [major] Add [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) rules (see [#2](https://github.com/benmvp/eslint-config-benmvp/pull/2))
- [minor] Add miscellaneous ESLint rules (see [#1](https://github.com/benmvp/eslint-config-benmvp/pull/1))

## v3.1.2 (May 21, 2016)
- [dev ops] Make `peerDependencies` less restrictive

## v3.1.1 (May 12, 2016)
- [dev ops] Add relevant ESLint rules to `peerDependencies`
- [dev ops] Remove `npm run release` script

## v3.1.0 (April 18, 2016)
- [minor] Relax [`no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md) in [`react`](rules/react.js) to be a warning
- [minor] Turn off [`sort-imports`](http://eslint.org/docs/rules/sort-imports) in [`es6`](rules/es6.js)

## v3.0.1 (April 18, 2016)
- [minor] Relax [`no-console`](http://eslint.org/docs/rules/no-console) in [`errors`](rules/errors.js) to be a warning

## v3.0.0 (April 16, 2016)
- [breaking] Changing [`jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md) in [`react`](rules/react.js) to enforce always including the boolean value
- [minor] Increase [`complexity`](http://eslint.org/docs/rules/complexity) in [`best-practices`](rules/best-practices.js) to `12` and also make it a warning

## v2.0.1 (April 4, 2016)
- [minor] Remove [`no-magic-numbers`](http://eslint.org/docs/rules/no-magic-numbers) from [`best-practices`](rules/best-practices.js)
- [minor] Increase [`complexity`](http://eslint.org/docs/rules/complexity) in [`best-practices`](rules/best-practices.js) to `10`

## v2.0.0 (April 3, 2016)
- [major] Added a bunch of [new rules](https://github.com/benmvp/eslint-config-benmvp/commit/24513fa640c3a6d133dd55ede4f862cc20309420#diff-e682a002d2f9d3503088301891c1734b) to [`best-practices.js`](rules/best-practices.js)
- [dev ops] Lint package against `benmvp/legacy`

## v1.0.1 (April 1, 2016)
- [minor] Remove [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign) to allow for easily defaulting param values
- [dev ops] Remove NPM link scripts
- [dev ops] Fix patch release script

## v1.0.0 (March 29, 2016)
- Initial release
