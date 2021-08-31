---
title: ESLint & Prettier
isDeploy: true
order: 1
---

# ESLint와 Prettier 설정 하기

팀 프로젝트에서 뷰를 개발할 때 코드를 일관적으로 작성하고 에러를 덜 나게 하는 방법이 있습니다.
바로 ESLint + Prettier 플러그인을 사용하는 방법인데요.
이 2개 도구에 대한 자세한 설명과 설정 방법은 다음 글을 참고합니다.

- [Vue.js 개발 생산성을 높여주는 도구 3가지](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)

## ESLint에 Vue.js 공식 스타일 가이드를 적용하는 방법

위 블로그 글에서 안내된 것 이외에도 [Vue.js 공식 스타일 가이드](https://vuejs.org/v2/style-guide/)를 ESLint 룰에 적용하여
사용하는 방법이 있습니다.

먼저 뷰 프로젝트의 루트 디렉토리에 있는 `.eslintrc` 파일의 `extends`를 아래와 같이 수정합니다.

```js {4,7-9}
module.exports = {
  // ...
  extends: [
		// 'plugin:vue/essential',
		'@vue/prettier',
		'@vue/typescript',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:vue/recommended',
	],
}
```

그리고 나서 같은 파일의 `rules` 속성에 아래의 내용을 추가해줍니다.

```js
module.exports = {
  rules: {
    /**********************/
    /* General Code Rules */
    /**********************/

    // Enforce import order
    'import/order': 'error',

    // Imports should come first
    'import/first': 'error',

    // Other import rules
    'import/no-mutable-exports': 'error',

    // Allow unresolved imports
    'import/no-unresolved': 'off',

    // Allow async-await
    'generator-star-spacing': 'off',

    // Prefer const over let
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    // No single if in an "else" block
    'no-lonely-if': 'error',

    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ['error', 'all'],

    // No async function without await
    'require-await': 'error',

    // Force dot notation when possible
    'dot-notation': 'error',

    'no-var': 'error',

    // Force object shorthand where possible
    'object-shorthand': 'error',

    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',

    /**********************/
    /*     Vue Rules      */
    /**********************/

    // Disable template errors regarding invalid end tags
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
      },
    ],

    // Maximum 5 attributes per line instead of one
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
      },
    ],

    /***************************/
    /* ESLint Vue Plugin Rules */
    /***************************/
    'vue/html-indent': [
      'error',
      'tab',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],

    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],

    'vue/html-self-closing': ['off'],

    // https://eslint.vuejs.org/rules/attributes-order.html
    // TODO: 팀 내 기준으로 재조정 필요
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
  },
}
```

이렇게 작성한 ESLint의 규칙이 프로젝트에 적용되려면 뷰 프로젝트에 아래와 같이 관련 라이브러리가 설치되어야 합니다.

```json
{
  "eslint-config-standard": "^14.1.0",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-promise": "^4.2.1",
  "eslint-plugin-standard": "^4.0.1",
}
```

## 참고 자료

- [ESLint Plugin Vue](https://github.com/vuejs/eslint-plugin-vue)
- [ESLint Plugin Vue Official Document](https://eslint.vuejs.org/rules/)
- [Nuxt ESLint Config](https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/index.js)
- [Nuxt TypeScript](https://typescript.nuxtjs.org/)
- [ESLint Config Prettier](https://github.com/vuejs/eslint-config-prettier)