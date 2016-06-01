module.exports = {
    'rules': {
        // enforce stroustrup style
        // http://eslint.org/docs/rules/brace-style
        'brace-style': ['error', 'stroustrup'],

        // require camel case names
        // http://eslint.org/docs/rules/camelcase
        'camelcase': 'error',

        // enforce spacing only after comma
        // http://eslint.org/docs/rules/comma-spacing
        'comma-spacing': 'error',

        // if a variable is initialized or assigned the value this,
        // the name of the variable must be "self"
        // http://eslint.org/docs/rules/consistent-this
        'consistent-this': ['error', 'self'],

        // enforce the consistent use of function declarations
        // http://eslint.org/docs/rules/func-style
        'func-style': ['error', 'declaration'],

        // 4-space indentation
        // http://eslint.org/docs/rules/indent
        'indent': 'error',

        // space for values in object literals
        // http://eslint.org/docs/rules/key-spacing
        'key-spacing': 'error',

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // http://eslint.org/docs/rules/new-parens
        'new-parens': 'error',

        // require an empty newline after variable declarations
        // http://eslint.org/docs/rules/newline-after-var
        'newline-after-var': 'error',

        // disallow empty lines over the specified maximum
        // http://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', {
            max: 2,
            maxEOF: 1,
            maxBOF: 0
        }],

        // disallows the use of nested ternary expressions
        // http://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // disallow whitespace before properties
        // http://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // disallow padding within curly braces of object literals
        // http://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': 'error',

        // enforce `var` variables to be declared either together
        // and `let` & `const` separately
        // http://eslint.org/docs/rules/one-var
        'one-var': ['error', {
            'var': 'always',
            'let': 'never',
            'const': 'never'
        }],

        // require a newline around variable declarations
        // http://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': 'error',

        // require operator assignment shorthand where possible
        // http://eslint.org/docs/rules/operator-assignment
        'operator-assignment': 'error',

        // enforce operators to be placed before linebreaks
        // http://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'before'],

        // always use single quotes
        // http://eslint.org/docs/rules/quotes
        'quotes': ['error', 'single'],

        // require use of semicolons
        // http://eslint.org/docs/rules/semi
        'semi': 'error',

        // require a space before blocks
        // http://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'error',

        // never have a space before function parentheses
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', 'never']
    }
};
