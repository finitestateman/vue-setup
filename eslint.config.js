import pluginVue  from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginCypress from 'eslint-plugin-cypress/flat'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: ['variable'],
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'are', 'has', 'have', 'should', 'can', 'will', 'do', 'does']
        },
        {
          selector: ['function'],
          format: ['camelCase']
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
          // custom: {
          //   regex: '^I[A-Z]',
          //   match: false,
          // }
        },
      ]
    // },
    }
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}'
    ],
  },
  skipFormatting,
]
