module.exports = {
  title: 'Cracking Vue.js',
  description: '자바스크립트 기초부터 탄탄한 Vue.js 개발 지식까지',
  // base: "/es6-online-book/",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      '/textbook',
      {
        title: 'Javascript Fundamentals',
        collapsable: false,
        children: [
          '/js/variable',
          '/js/string',
          '/js/number',
          '/js/object',
          '/js/array',
          '/js/loop',
          '/js/operator',
          '/js/function',
          '/js/scope',
          '/js/this',
          '/js/prototype',
          '/js/closure',
        ]
      },
      {
        title: 'ES6',
        collapsable: false,
        children: [
          '/es6/const-let',
          '/es6/fat-arrow',
          '/es6/enhanced-object-literals',
          '/es6/spread-operator',
          '/es6/template-literal',
          '/es6/destructuring',
        ]
      },
      {
        title: 'Vue.js Fundamentals',
        collapsable: false,
        children: [
          '/vue/instance',
          '/vue/template',
          '/vue/components',
          '/vue/components-communication',
          '/vue/props',
          '/vue/event-emit',
          '/vue/router',
          '/vue/axios',
          '/vue/sfc',
          '/vue/life-cycle',
          '/vue/cli',
        ]
      },
      {
        title: 'Maximizing the reusability',
        collapsable: false,
        children: [
          '/reuse/filter',
          '/reuse/slot',
          '/reuse/scoped-slot',
          '/reuse/mixins',
          '/reuse/plugin',
        ]
      },
      {
        title: 'Vue.js in Legacy Projects',
        collapsable: false,
        children: [
          '/legacy/jquery-to-vue',
          '/legacy/form',
          '/legacy/datepicker',
          '/legacy/chart',
        ]
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
        ]
      },
      {
        title: 'Advanced Technics',
        collapsable: false,
        children: [
          '/advanced/folder-structure',
          '/advanced/code-splitting',
          '/advanced/navigation-guard',
          '/advanced/router-hook',
          '/advanced/transition',
        ]
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
        ]
      },
    ],
    nav: [
      {
        text: 'Text Book',
        link: '/textbook'
      },
      {
        text: 'Online Courses',
        link: 'https://www.inflearn.com/?post_type=course&s=%EC%9E%A5%EA%B8%B0%ED%9A%A8'
      },
      {
        text: 'More Articles',
        link: 'https://joshua1988.github.io/'
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': './images'
      }
    }
  },
  serviceWorker: true
}