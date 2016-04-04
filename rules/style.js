var ERROR = 2;

module.exports = {
    'rules': {
        // enforce stroustrup style
        // http://eslint.org/docs/rules/brace-style
        'brace-style': [ERROR, 'stroustrup'],

        // require camel case names
        // http://eslint.org/docs/rules/camelcase
        'camelcase': ERROR,

        // enforce spacing only after comma
        // http://eslint.org/docs/rules/comma-spacing
        'comma-spacing': ERROR,

        // 4-space indentation
        // http://eslint.org/docs/rules/indent
        'indent': ERROR,

        // space for values in object literals
        // http://eslint.org/docs/rules/key-spacing
        'key-spacing': ERROR,

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // http://eslint.org/docs/rules/new-parens
        'new-parens': ERROR,

        // require an empty newline after variable declarations
        // http://eslint.org/docs/rules/newline-after-var
        'newline-after-var': ERROR,

        // disallow whitespace before properties
        // http://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': ERROR,

        // disallow padding within curly braces of object literals
        // http://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ERROR,

        // require a newline around variable declarations
        // http://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': ERROR,

        // require operator assignment shorthand where possible
        // http://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ERROR,

        // enforce operators to be placed before linebreaks
        // http://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': [ERROR, 'before'],

        // always use single quotes
        // http://eslint.org/docs/rules/quotes
        'quotes': [ERROR, 'single'],

        // require use of semicolons
        // http://eslint.org/docs/rules/semi
        'semi': ERROR,

        // require a space before blocks
        // http://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': ERROR,

        // never have a space before function parentheses
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [ERROR, 'never']
    }
};
