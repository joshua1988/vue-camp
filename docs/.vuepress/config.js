const routes = [
  // "js",
  // "es6",
  // "vue",
  // "syntax",
  // "reuse",
  // "legacy",
  // "vuex",
  "advanced"
  // "design",
  // "testing",
  // "ts",
  // "nuxt",
  // "pwa",
  // "deploy",
  // "webpack",
  // "format",
  // "vuepress"
];

const createSidebar = () => {
  const sidebar = ["/textbook"];
  for (let i = 0; i < routes.length; i++) {
    sidebar.push(require("../" + routes[i]));
  }
  return sidebar;
};

module.exports = {
  base: "/vue-camp/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/images/icons/152x.png" }],
    ["link", { rel: "mask-icon", href: "/logo.png", color: "#ffffff" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/images/icons/144x.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }]
  ],
  locales: {
    "/": {
      lang: "ko",
      title: "Cracking Vue.js",
      description: "JavaScript, Vue.js, Nuxt.js"
    }
  },
  themeConfig: {
    repo: "joshua1988/vue-camp",
    repoLabel: "💻  깃헙",
    docsRepo: "joshua1988/vue-camp",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        selectText: "언어",
        label: "한국어",
        ariaLabel: "언어",
        editLinkText: "깃헙에서 문서 수정하기",
        lastUpdated: "최종 변경일",
        serviceWorker: {
          updatePopup: {
            message:
              "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄",
            buttonText: "새로고침"
          }
        },
        nav: [
          {
            text: "📖 개발 가이드",
            link: "/textbook"
          },
          // TODO: Vue 3 관련 글 정리 후 게재
          // {
          //   text: '💻 Vue 3',
          //   link: '/vue3',
          // },
          {
            text: "💬 프런트엔드 개발",
            link: "/front-dev"
          }
        ],
        sidebar: createSidebar()
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "./images"
      }
    }
  },
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true
    },
    "@vuepress/google-analytics": {
      ga: "UA-87965695-1"
    },
    "@vuepress/back-to-top": true,
    "reading-progress": true,
    "vuepress-plugin-code-copy": true,
    "@vuepress/last-updated": true
  }
};
