module.exports = {
    'rules': {
        // enforces usage of return statement in callbacks of array’s methods
        // http://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'error',

        // error when variables are used outside of the block in which they were defined
        // http://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'error',

        // allow maximum cyclomatic complexity of 10
        // http://eslint.org/docs/rules/complexity
        'complexity': ['warn', 12],

        // ensures all return statements either specify a value or don’t specify a value
        // http://eslint.org/docs/rules/consistent-return
        'consistent-return': 'error',

        // all control statements must have curly braces
        // http://eslint.org/docs/rules/curly
        'curly': 'error',

        // require default case in switch statements
        // http://eslint.org/docs/rules/default-case
        'default-case': 'error',

        // requires the dot to be on the same line as the property
        // http://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // force use of dot notation whenever possible
        // http://eslint.org/docs/rules/dot-notation
        'dot-notation': 'error',

        // require use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        'eqeqeq': ['error', 'smart'],

        // ensure for-in loops have an if statement
        // http://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'error',

        // warn when using alert, confirm & prompt
        // http://eslint.org/docs/rules/no-alert
        'no-alert': 'warn',

        // disallow use of arguments.caller or arguments.callee
        // http://eslint.org/docs/rules/no-caller
        'no-caller': 'error',

        // disallow use of multiple spaces
        // http://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 'error',

        // disallow else after a return in an if
        // http://eslint.org/docs/rules/no-else-return
        'no-else-return': 'error',

        // disallow use of empty functions
        // http://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 'error',

        // disallow use of eval()
        // http://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // disallow unnecessary function binding
        // http://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        // http://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // allow the type conversions with shorter notations
        // http://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': 'off',

        // disallow var and named functions in global scope
        // http://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'error',

        // disallow use of eval()-like methods
        // http://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        // http://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 'error',

        // disallow usage of __iterator__ property
        // http://eslint.org/docs/rules/no-iterator
        'no-iterator': 'error',

        // disallow use of labeled statements
        // http://eslint.org/docs/rules/no-labels
        'no-labels': 'error',

        // disallow unnecessary nested blocks
        // http://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // disallow creation of functions within loops
        // http://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'error',

        // disallow use of multiline strings
        // http://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',

        // disallow reassignments of native objects
        // http://eslint.org/docs/rules/no-native-reassign
        'no-native-reassign': 'error',

        // disallow use of the new operator when not part of an assignment or comparison
        // http://eslint.org/docs/rules/no-new
        'no-new': 'error',

        // disallow use of new operator for Function object
        // http://eslint.org/docs/rules/no-new-func
        'no-new-func': 'error',

        // disallow creating new instances of String,Number, and Boolean
        // http://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // disallow use of octal escape sequences in string literals
        // http://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 'error',

        // disallow modifying properties of parameters
        // http://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': ['error', {props: true}],

        // disallow usage of __proto__ property
        // http://eslint.org/docs/rules/no-proto
        'no-proto': 'error',

        // disallow use of assignment in return statement
        // http://eslint.org/docs/rules/no-return-assign
        'no-return-assign': 'error',

        // disallow use of javascript: urls
        // http://eslint.org/docs/rules/no-script-url
        'no-script-url': 'error',

        // disallow comparisons where both sides are exactly the same
        // http://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // disallow use of the comma operator
        // http://eslint.org/docs/rules/no-sequences
        'no-sequences': 'error',

        // only Error objects can be thrown
        // http://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'error',

        // disallow usage of expressions in statement position
        // http://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 'error',

        // disallow unnecessary .call() and .apply()
        // http://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 'error',

        // disallow unnecessary concatenation of literals or template literals
        // http://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // disallow unnecessary usage of escape character
        // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // disallow use of the void operator
        // http://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // allow warning terms in comments (like TODO or FIXME)
        // http://eslint.org/docs/rules/no-warning-comments
        'no-warning-comments': 'off',

        // disallow use of the with statement
        // http://eslint.org/docs/rules/no-with
        'no-with': 'error',

        // require use of the second argument for parseInt()
        // http://eslint.org/docs/rules/radix
        'radix': 'error',

        // require declaration of all vars at the top of their containing scope
        // http://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife
        'wrap-iife': ['error', 'inside'],

        // disallow Yoda conditions
        // http://eslint.org/docs/rules/yoda
        'yoda': 'error'
    }
};
