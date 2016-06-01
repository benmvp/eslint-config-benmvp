module.exports = {
    rules: {
        // disallow trailing commas
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'only-multiline'],

        // disallow `catch` clause parameters from shadowing variables in the
        // outer scope
        // http://eslint.org/docs/rules/no-catch-shadow
        'no-catch-shadow': 'error',

        // disallow specified global variables
        // http://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': ['error', 'event'],

        // disallow declaration of variables already declared in the outer scope
        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': 'error',

        // disallow identifiers from shadowing restricted names
        // http://eslint.org/docs/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 'error',

        // disallow initializing variables to `undefined`
        // http://eslint.org/docs/rules/no-undef-init
        'no-undef-init': 'error',

        // disallow use of `undefined` variable
        // http://eslint.org/docs/rules/no-undefined
        'no-undefined': 'error',

        // disallow the use of variables before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'error'
    }
};
