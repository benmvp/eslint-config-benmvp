var ERROR = 2;

module.exports = {
    'rules': {
        // disallow declaration of variables already declared in the outer scope
        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': ERROR,

        // disallow use of variables before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': ERROR
    }
};
