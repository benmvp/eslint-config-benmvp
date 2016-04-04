var ERROR = 2;

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
        'arrow-parens': ERROR,

        // require spacing before & after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ERROR,

        // require use of let & const
        // http://eslint.org/docs/rules/no-var
        'no-var': ERROR,

        // require method & property shorthand for object literals
        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': ERROR,

        // arrow functions should be used as callbacks
        // http://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': ERROR,

        // use the rest operator instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': ERROR,

        // use the spread operator instead of apply
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': ERROR,

        // use template literals instead of string concatentation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': ERROR,

        // enforce sorting of imports in a module
        // http://eslint.org/docs/rules/sort-imports
        'sort-imports': [ERROR, {'ignoreCase': true}]
    }
};
