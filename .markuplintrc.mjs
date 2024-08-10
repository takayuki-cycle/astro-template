const markuplintConfig = {
  extends: ['markuplint:recommended'],
  overrideMode: 'merge',
  overrides: {
    './src/components/ui/*.tsx': {
      rules: {
        'require-accessible-name': false,
      },
    },
  },
  // Error: Matching for a tree with var() is not supportedが解決できないためexclude
  excludeFiles: ['./src/layouts/Layout.astro', './src/components/ui/rating-group.tsx'],
  parser: {
    '\\.astro$': '@markuplint/astro-parser',
    '\\.tsx$': '@markuplint/jsx-parser',
  },
  specs: {
    '\\.tsx$': '@markuplint/react-spec',
  },
  pretenders: [
    {
      selector: 'Header',
      as: 'header',
    },
    {
      selector: 'BodyGTM',
      as: 'noscript',
    },
    {
      selector: 'Footer',
      as: 'footer',
    },
    {
      selector: 'ViewTransitions',
      as: 'meta',
    },
    {
      selector: 'Head',
      as: 'head',
    },
    {
      selector: 'HeadGTM',
      as: 'script',
    },
    {
      selector: 'Toc',
      as: 'div',
    },
    {
      selector: 'Accordion',
      as: 'div',
    },
    {
      selector: 'Alert',
      as: {
        element: 'dialog',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Avatar',
      as: {
        element: 'img',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Badge',
      as: 'div',
    },
    {
      selector: 'Button',
      as: {
        element: 'button',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Card',
      as: 'article',
    },
    {
      selector: 'Carousel',
      as: 'div',
    },
    {
      selector: 'Checkbox',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'checkbox',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Clipboard',
      as: 'div',
    },
    {
      selector: 'Code',
      as: 'code',
    },
    {
      selector: 'Collapsible',
      as: 'div',
    },
    {
      selector: 'ColorPicker',
      as: 'div',
    },
    {
      selector: 'Combobox',
      as: {
        element: 'select',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'DatePicker',
      as: 'div',
    },
    {
      selector: 'Dialog',
      as: {
        element: 'dialog',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Drawer',
      as: 'div',
    },
    {
      selector: 'Editable',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'text',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'FileUpload',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'file',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'FormLabel',
      as: 'div',
    },
    {
      selector: 'HoverCard',
      as: 'a',
    },
    {
      selector: 'Icon',
      as: 'svg',
    },
    {
      selector: 'IconButton',
      as: {
        element: 'button',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Input',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'text',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Kbd',
      as: 'code',
    },
    {
      selector: 'Link',
      as: 'a',
    },
    {
      selector: 'Menu',
      as: {
        element: 'menu',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'NumberInput',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'number',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Pagination',
      as: 'nav',
    },
    {
      selector: 'PinInput',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'number',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Popover',
      as: {
        element: 'dialog',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Progress',
      as: 'div',
    },
    {
      selector: 'RadioButtonGroup',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'RadioGroup',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'RatingGroup',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'SegmentGroup',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'Select',
      as: {
        element: 'select',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Skeleton',
      as: 'div',
    },
    {
      selector: 'Slider',
      as: 'div',
    },
    {
      selector: 'Splitter',
      as: 'div',
    },
    {
      selector: 'Switch',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'checkbox',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Table',
      as: {
        element: 'table',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Tabs',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'TagsInput',
      as: {
        element: 'input',
        attrs: [
          {
            name: 'type',
            value: 'text',
          },
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Text',
      as: 'p',
    },
    {
      selector: 'Textarea',
      as: {
        element: 'textarea',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'Toast',
      as: {
        element: 'dialog',
        attrs: [
          {
            name: 'aria-label',
            value: 'dummy',
          },
        ],
      },
    },
    {
      selector: 'ToggleGroup',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
    {
      selector: 'Tooltip',
      as: 'div',
    },
    {
      selector: 'TreeView',
      as: {
        element: 'ul',
        attrs: [
          {
            name: 'aria-busy',
            value: 'true',
          },
        ],
      },
    },
  ],
}

export default markuplintConfig
