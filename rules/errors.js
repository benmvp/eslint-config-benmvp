module.exports = {
    'rules': {
        // warn when using console
        // http://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // disallow declaration of variables already declared in the outer scope
        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': 'error',

        // disallow use of variables before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'error'
    }
};
