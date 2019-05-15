module.exports = {
  root: true,

  env: {
    node: true,
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard',
  ],

  rules: {
    // allow async-await
    'generator-star-spacing':        'off',
    // allow debugger and console during development
    'no-debugger':                   process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console':                    [
      process.env.NODE_ENV === 'production' ? 'error' : 'off', { allow: ['warn', 'error'] },
    ],
    'one-var':                       ['error', 'never'],
    'camelcase':                     ['error', { 'properties': 'never' }],
    'no-underscore-dangle':          ['error', { 'allow': ['_events'] }],
    'space-before-function-paren':   ['error', 'always'],
    'semi':                          ['error', 'always'],
    'no-new':                        'off',
    'no-trailing-spaces':            'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks':           'error',
    'space-infix-ops':               'error',
    'comma-dangle':                  ['error', 'always-multiline'],
    'key-spacing':                   ['error', { 'mode': 'minimum', 'align': 'value' }],
    'no-multi-spaces':               'off',
    'object-curly-spacing':          ['error', 'always'],
    'lines-around-directive':        ['error', 'always'],
    'newline-before-return':         'error',
    'newline-per-chained-call':      ['error', { 'ignoreChainWithDepth': 3 }],
    'operator-linebreak':            ['error', 'after'],
    'quotes':                        ['error', 'single', { 'allowTemplateLiterals': true }],
    'no-unused-vars':                'error',
    'no-unused-expressions':         'error',
    'indent':                        'off',
    'no-useless-escape':             'off',
    'padded-blocks':                 'off',
    'no-useless-return':             'off',

    // Vue eslint plugin
    'vue/script-indent':                           ['off', 2, { 'baseIndent': 1 }],
    'vue/attributes-order':                        'off',
    'vue/valid-v-for':                             'error',
    'vue/require-v-for-key':                       'error',
    'vue/require-prop-types':                      'off',
    'vue/html-closing-bracket-newline':            ['error', { 'singleline': 'never', 'multiline': 'never' }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing':            ['error', { 'selfClosingTag': 'never' }],
    'vue/component-name-in-template-casing':       'off',

    'vue/max-attributes-per-line': [
      'error', { 'singleline': 3, 'multiline': { 'max': 3, 'allowFirstLine': true } },
    ],

    'vue/html-self-closing': [
      'error', {
        'html': { 'void': 'never', 'normal': 'never', 'component': 'always' },
        'svg':  'always',
        'math': 'always',
      },
    ],

    'vue/order-in-components': [
      'error', {
        'order': [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'mixins',
          ['props', 'propsData'],
          'data',
          'model',
          'inheritAttrs',
          'computed',
          'methods',
          'LIFECYCLE_HOOKS',
          'watch',
          ['template', 'render'],
          'renderError',
          ['components', 'directives', 'filters'],
        ],
      },
    ],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
