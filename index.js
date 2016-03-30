module.exports = {
    extends: [
        'eslint-config-benmvp/base',
        'eslint-config-benmvp/rules/react'
    ].map(require.resolve),
    rules: {}
};
