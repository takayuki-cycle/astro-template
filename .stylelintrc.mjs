const stylelintConfig = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/html',
    'stylelint-config-html/astro',
  ],
  rules: {
    'property-no-vendor-prefix': null,
  },
}

export default stylelintConfig
