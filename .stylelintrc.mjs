const stylelintConfig = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/html',
    'stylelint-config-html/astro',
    'stylelint-config-recess-order',
  ],
  rules: {
    'property-no-vendor-prefix': null,
    'unit-disallowed-list': ['px'],
  },
}

export default stylelintConfig
