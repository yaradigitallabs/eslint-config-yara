module.exports = {
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    'accessor-pairs': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': [
      'error',
      {
        'after': true,
        'before': true
      }
    ],
    'block-scoped-var': 'off',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    'callback-return': 'off',
    'camelcase': ['error', {'properties': 'never'}],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'complexity': 'off',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': 'off',
    'default-case': 'off',
    'dot-location': [
      'off',
      'property'
    ],
    'dot-notation': 'warn',
    'eol-last': 'off',
    'eqeqeq': 'off',
    'for-direction': 'off',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': [
      'off',
      'never'
    ],
    'func-style': [
      'off',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'getter-return': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'warn',
    'id-match': 'off',
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true
      }
    ],
    'line-comment-position': 'off',
    'linebreak-style': [
      'off',
      'unix'
    ],
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'lines-between-class-members': 'off',
    'max-depth': 'off',
    'max-len': [
      'error',
      { 'code': 200 }
    ],
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': [
      'error',
      'starred-block'
    ],
    'new-cap': 'warn',
    'new-parens': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'off',
    'no-caller': 'off',
    'no-catch-shadow': 'off',
    'no-cond-assign': [
      'off',
      'except-parens'
    ],
    'no-confusing-arrow': 'warn',
    'no-continue': 'off',
    'no-console': 'warn',
    'no-const-assign': 'error',
    'no-div-regex': 'off',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'warn',
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'off',
    'no-extra-bind': 'off',
    'no-extra-label': 'off',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'off',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'off',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'off',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'off',
    'no-new-wrappers': 'off',
    'no-octal-escape': 'off',
    'no-param-reassign': 'warn',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-compare': 'off',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'off',
    'no-spaced-func': 'off',
    'no-sync': 'off',
    'no-tabs': 'off',
    'no-template-curly-in-string': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'warn',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': [
      'off',
      {
        'defaultAssignment': true
      }
    ],
    'no-unused-expressions': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    'no-useless-escape': 'error',
    'no-useless-call': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'off',
    'no-useless-return': 'off',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'off',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': 'off',
    'object-shorthand': 'off',
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': [
      'off',
      'always'
    ],
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'error',
    'quote-props': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'radix': 'off',
    'require-await': 'off',
    'require-jsdoc': 'off',
    'rest-spread-spacing': 'off',
    'semi': 'error',
    'semi-spacing': 'off',
    'semi-style': [
      'off',
      'last'
    ],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'off',
    'spaced-comment': [
      'error',
      'always'
    ],
    'strict': 'off',
    'switch-colon-spacing': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': [
      'off',
      'never'
    ],
    'template-tag-spacing': 'off',
    'unicode-bom': [
      'off',
      'never'
    ],
    'valid-jsdoc': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'error',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'yoda': [
      'off',
      'never'
    ]
  }
};
