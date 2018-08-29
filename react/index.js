module.exports = {
  'plugins': ['react'],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  "env": {
    "browser": true
  },

  'extends': ['../index.js'],

  'rules': {
    'react/display-name': ['off', { 'ignoreTranspilerName': false }],
    'react/forbid-prop-types': ['error', {
      'forbid': ['any', 'array', 'object'],
      'checkContextTypes': true,
      'checkChildContextTypes': true
    }],
    'react/forbid-dom-props': ['off', { 'forbid': [] }],
    'react/jsx-boolean-value': ['error', 'never', { 'always': [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never', {'allowMultiline': true}],
    'react/jsx-handler-names': [0, {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on'
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': ['warn', { 'maximum': 1, 'when': 'multiline' }],

    'react/jsx-no-bind': ['error', {
      'ignoreRefs': true,
      'allowArrowFunctions': true,
      'allowBind': false
    }],
    'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': true }],
    'react/jsx-no-literals': ['off', { 'noStrings': true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      'allowAllCaps': true,
      'ignore': []
    }],
    'react/sort-prop-types': ['off', {
      'ignoreCase': true,
      'callbacksLast': false,
      'requiredFirst': false,
      'sortShapeProp': true
    }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-direct-mutation-state': 'off',
    'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
    'react/prop-types': ['error', {
      'ignore': [],
      'customValidators': [],
      'skipUndeclared': false
    }],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      'order': [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        'rendering': [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-target-blank': ['error', { 'enforceDynamicLinks': 'always' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-no-comment-textnodes': 1,
    'react/no-render-return-value': 'error',
    'react/no-unused-prop-types': [1, {
      'customValidators': [
      ],
      'skipShapeProps': true
    }],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 1,
    'react/no-children-prop': 'error',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/no-array-index-key': 1,
    'react/require-default-props': ['error', {
      'forbidDefaultForRequired': true
    }],
    'react/forbid-foreign-prop-types': ['warn', { 'allowInPropTypes': true }],
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': ['error', { 'allowRequiredDefaults': false }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 1,
    'react/boolean-prop-naming': ['off', {
      'propTypeNames': ['bool', 'mutuallyExclusiveTrueProps'],
      'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      'message': ''
    }],
    'react/no-typos': 'error',
    'react/jsx-curly-brace-presence': ['error', { 'props': 'never', 'children': 'never' }],
    'react/no-access-state-in-setstate': 1,
    'react/button-has-type': [1, {
      'button': true,
      'submit': true,
      'reset': false
    }],
    'react/no-this-in-sfc': 1,
    'react/jsx-props-no-multi-spaces': 1
  },

  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".json"]
      }
    },
    "react": {
      "pragma": "React",
      "version": "16.0"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      "exact",
      "Object.freeze"
    ]
  }
}
