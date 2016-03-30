module.exports = {
    'env': {
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
        }
    },
    'rules': {
        // require parentheses around arrow function parameters
        // http://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 2,

        // require spacing before & after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 2,

        // require use of let & const
        // http://eslint.org/docs/rules/no-var
        'no-var': 2,

        // require method & property shorthand for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 2,

        // arrow functions should be used as callbacks
        // http://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 2,

        // use the rest operator instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 2,

        // use the spread operator instead of apply
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 2,

        // use template literals instead of string concatentation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 2,

        // enforce sorting of imports in a module
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': [2, {'ignoreCase': true}]
    }
};
