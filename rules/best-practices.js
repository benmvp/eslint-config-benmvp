module.exports = {
    'rules': {
        // all control statements must have curly braces
        // http://eslint.org/docs/rules/curly
        'curly': 2,

        // require use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        'eqeqeq': [2, 'smart'],

        // ensure for-in loops have an if statement
        // http://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 2,

        // disallow use of multiple spaces
        // http://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 2,

        // disallow reassignments of native objects
        // http://eslint.org/docs/rules/no-native-reassign
        'no-native-reassign': 2,

        // disallow reassignment of function parameters
        // http://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': 2
    }
};
