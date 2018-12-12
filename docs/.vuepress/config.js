module.exports = {
  title: 'Cracking Vue.js',
  description: 'Javascript, ES6, Advanced Vue.js',
  base: "/vue-camp/",
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        title: 'Maximizing Reusability',
        collapsable: false,
        children: [
          '/reuse/slots',
          '/reuse/scoped-slot',
          '/reuse/mixins',
          '/reuse/plugins',
          '/reuse/mixins-vs-hoc'
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
          '/advanced/transition',
          '/advanced/js-testing',
          '/advanced/vue-testing',
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
  serviceWorker: true,
  ga: 'UA-128482369-1'
}