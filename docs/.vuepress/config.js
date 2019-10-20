module.exports = {
  title: 'Cracking Vue.js',
  description: 'Javascript, ES6, Advanced Vue.js',
  base: '/vue-camp/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/images/icons/152x.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.png', color: '#ffffff' }],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/images/icons/144x.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  ],
  themeConfig: {
    sidebar: [
      '/textbook',
      {
        title: 'Javascript Fundamentals',
        collapsable: true,
        children: [
          '/js/variable',
          '/js/string',
          // '/js/number',
          '/js/object',
          '/js/array',
          '/js/loop',
          '/js/operator',
          '/js/function',
          '/js/scope',
          '/js/this',
          '/js/prototype',
          '/js/closure',
        ],
      },
      {
        title: 'ES6',
        collapsable: true,
        children: [
          '/es6/const-let',
          '/es6/fat-arrow',
          '/es6/enhanced-object-literals',
          '/es6/spread-operator',
          '/es6/template-literal',
          '/es6/destructuring',
          '/es6/async-await',
          '/es6/modules',
        ],
      },
      {
        title: 'Vue.js Fundamentals',
        collapsable: false,
        children: [
          '/vue/instance',
          '/vue/life-cycle',
          '/vue/template',
          '/vue/components',
          '/vue/components-communication',
          '/vue/props',
          '/vue/event-emit',
          '/vue/router',
          '/vue/axios',
          '/vue/cli',
          '/vue/sfc',
        ],
      },
      {
        title: 'Template Syntax',
        collapsable: false,
        children: [
          '/syntax/methods',
          '/syntax/computed',
          '/syntax/watch',
          '/syntax/filters',
          '/syntax/form',
        ],
      },
      {
        title: 'Maximizing Reusability',
        collapsable: false,
        children: [
          '/reuse/slots',
          '/reuse/scoped-slot',
          '/reuse/mixins',
          '/reuse/plugins',
          '/reuse/mixins-vs-hoc',
        ],
      },
      {
        title: 'Vue.js in Legacy Projects',
        collapsable: false,
        children: [
          '/legacy/jquery-to-vue',
          '/legacy/form',
          '/legacy/datepicker',
          '/legacy/chart',
        ],
      },
      {
        title: 'State Management',
        collapsable: false,
        children: [
          '/vuex/concept',
          '/vuex/state',
          '/vuex/getters',
          '/vuex/mutations',
          '/vuex/actions',
          '/vuex/helper',
          '/vuex/modules',
          '/vuex/state-vs-data',
        ],
      },
      {
        title: 'Advanced Technics',
        collapsable: false,
        children: [
          '/advanced/folder-structure',
          '/advanced/code-splitting',
          '/advanced/navigation-guard',
          '/advanced/transition',
        ],
      },
      {
        title: 'Component Design Patterns',
        collapsable: false,
        children: [
          '/design/pattern1',
          '/design/pattern2',
          '/design/pattern3',
          '/design/pattern4',
          '/design/pattern5',
        ],
      },
      {
        title: 'Testing Applications',
        collapsable: false,
        children: [
          '/testing/overview',
          '/testing/jest-testing',
          '/testing/vue-test-util',
          '/testing/getting-started',
          '/testing/component-tutorial-1',
          // 튜토리얼 - 뷰엑스
          // 튜토리얼 - 비동기
          // 튜토리얼 - 외부 라이브러리
          '/testing/api',
          '/testing/snapshots',
          '/testing/coverage',
        ],
      },
      {
        title: 'Typescript',
        collapsable: false,
        children: ['/ts/intro', '/ts/with-vue', '/ts/pdecorator'],
      },
      {
        title: 'Nuxt',
        collapsable: false,
        children: ['/nuxt/intro'],
      },
      {
        title: 'PWA',
        collapsable: false,
        children: ['/pwa/cli-pwa-plugin'],
      },
      {
        title: 'Deployment',
        collapsable: false,
        children: ['/deploy/intro', '/deploy/env-setup', '/deploy/cli3-rules'],
      },
      {
        title: 'VuePress',
        collapsable: false,
        children: ['/vuepress/learning-note'],
      },
    ],
    nav: [
      {
        text: '📖 Text Book',
        link: '/textbook',
      },
      {
        text: '💬 FrontEnd Development',
        link: '/front-dev',
      },
      {
        text: '💻 Vue 3.0',
        link: '/3.0',
      },
      {
        text: '📹 Online Courses',
        link:
          'https://www.inflearn.com/instructors/54224/courses/?utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner',
      },
      {
        text: '📝 More Articles',
        link: 'https://joshua1988.github.io/',
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': './images',
      },
    },
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄',
        buttonText: '새로고침',
      },
    },
    '@vuepress/google-analytics': {
      ga: 'UA-128482369-1',
    },
  },
};
