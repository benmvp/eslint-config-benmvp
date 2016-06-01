module.exports = {
    extends: [
        'eslint-config-benmvp/base',
        'eslint-config-benmvp/rules/react',
        'eslint-config-benmvp/rules/react-a11y'
    ].map(require.resolve),
    rules: {}
};
