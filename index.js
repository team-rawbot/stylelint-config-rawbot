module.exports = {
  rules: {
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    }],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': [ true, {
      checkPrefixed: true,
    }],
    'max-nesting-depth': 3,
    'no-duplicate-selectors': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-id': 0,
    'selector-max-empty-lines': 0,
    'selector-no-qualifying-type': [true, {
      ignore: ['attribute']
    }],
    'font-family-name-quotes': 'always-where-required',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-list-comma-space-before': 'never',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',
    'declaration-bang-space-before': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always-multi-line',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'media-query-list-comma-space-after': 'always',
    'comment-empty-line-before': 'always',
  },
};
