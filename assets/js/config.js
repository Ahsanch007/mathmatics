window.MathJax = {
    showMathMenu: true,
    messageStyle: 'none',
    jax: [
      'input/TeX',
      'output/SVG'
    ],
    extensions: [
      'tex2jax.js'
    ],
    tex2jax: {
      inlineMath:  [[ '$',  '$'], ["\\(", "\\)"]],
      displayMath: [['$$', '$$'], ["\\[", "\\]"]],
      processEscapes: true
    },
    TeX: {
      extensions: [
        'AMSmath.js',
        'AMSsymbols.js',
        'noErrors.js',
        'noUndefined.js',
        '[a11y]/accessibility-menu.js'
      ],
      Macros: {
        boldcdot: [
          '\\mathbin{\\raise -.1em\\Large\\cdot}'
        ]
      }
    }
  };;