var ERROR = 2;

module.exports = {
    'plugins': [
        'react'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 7,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'extends': [
        'plugin:react/recommended'
    ],
    'env': {
        'jasmine': true,
        'jest': true
    },

    // View link below for react rules documentation
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'rules': {
        // Use double quotes for JSX
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ERROR,

        // True boolean props must pass {true} value
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': ERROR,

        // Forbid propTypes: any, array, object
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': ERROR,

        // Validate closing bracket location in JSX is aligned with opening tag
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': ERROR,

        // Disallow spaces within curly brackets
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': ERROR,

        // Disallow spaces around equal sgns in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': ERROR,

        // Enforce event handler naming conventions in JSX: on* for props, handle* from functions
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': ERROR,

        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': ERROR,

        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': ERROR,

        // Enforce default component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': ERROR
    }
};
