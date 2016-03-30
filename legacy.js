module.exports = {
    extends: ['eslint:recommended'].concat([
        'eslint-config-benmvp/rules/best-practices',
        'eslint-config-benmvp/rules/errors',
        'eslint-config-benmvp/rules/node',
        'eslint-config-benmvp/rules/style',
        'eslint-config-benmvp/rules/variables'
    ].map(require.resolve)),
    env: {
        'browser': true,
        'amd': true,
        'mocha': true,
        'node': true
    }
};
