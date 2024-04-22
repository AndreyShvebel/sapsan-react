module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
    rules: {
        'no-restricted-imports': [
            'warn',
            {
                name: 'react-redux',
                importNames: ['useSelector', 'useDispatch'],
                message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'react/prop-types': 'off',
        semi: 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/no-unnecessary-type-assertion': [
            'error',
            {
                typesToIgnore: ['null'],
            },
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-base-to-string': 'off',

        '@typescript-eslint/no-explicit-any': 'warn',
        'prefer-const': 'error',
        'react/display-name': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        curly: 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'class',
                format: ['StrictPascalCase'],
            },
            {
                selector: ['variable', 'property'],
                types: ['boolean'],
                format: ['StrictPascalCase'],
                prefix: ['is', 'are', 'should', 'has', 'have', 'had', 'can', 'could', 'should', 'did', 'will'],
                filter: {
                    regex: 'Is',
                    match: false,
                },
            },
            {
                selector: 'interface',
                format: ['StrictPascalCase'],
                prefix: ['I'],
            },
            {
                selector: 'typeAlias',
                format: ['StrictPascalCase'],
                prefix: ['T'],
            },
            {
                selector: 'property',
                modifiers: ['private'],
                format: ['strictCamelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: ['enum', 'enumMember'],
                format: ['UPPER_CASE'],
            },
            {
                selector: 'variable',
                modifiers: ['global', 'exported'],
                format: ['UPPER_CASE'],
                types: ['array', 'boolean', 'number', 'string'],
            },
            {
                selector: 'function',
                format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
            },
        ],
    },
    overrides: [
        {
            files: ['.eslintrc.cjs', 'vite.config.ts'],
            rules: { '@typescript-eslint/naming-convention': 'off' },
        },
    ],
};
