import globals from 'globals'
import pluginJs from '@eslint/js'
import tsesLint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tsesLint.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          args: 'none',
        },
      ],
    },
  },
]
