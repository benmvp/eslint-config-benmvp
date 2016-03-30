module.exports = {
    extends: [
        'eslint-config-benmvp/legacy',
        'eslint-config-benmvp/rules/es6'
    ].map(require.resolve),
    rules: {}
};
