module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
        }
    },
    rules: {
        // require parentheses around arrow function parameters
        // http://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 'error',

        // require spacing before & after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 'error',

        // require use of let & const
        // http://eslint.org/docs/rules/no-var
        'no-var': 'error',

        // require method & property shorthand for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 'error',

        // arrow functions should be used as callbacks
        // http://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'error',

        // do not use const everywhere
        // http://eslint.org/docs/rules/prefer-const
        'prefer-const': 'off',

        // use the rest operator instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'error',

        // use the spread operator instead of apply
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'error',

        // use template literals instead of string concatentation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',

        // do not enforce any sorting of imports
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': 'off'
    }
};
