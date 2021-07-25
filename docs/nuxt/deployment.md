---
title: Nuxt Deployment
---

# Nuxt 서비스 배포 방법

Nuxt.js 서비스를 배포하는 방법은 프로젝트를 생성할 때 선택한 Universal 모드의 배포 방식에 따라 다릅니다. 아래 2가지 유형에 따른 배포 방법을 살펴보겠습니다.

![nuxt-app-mode](./images/app-mode.png)

## SSR(Server Side Rendering)

SSR 모드는 위 그림에서 Deployment Target을 `Server(Node.js hosting)`으로 선택한 경우입니다. 넉스트 설정 파일의 `target` 속성 값이 아래와 같이 `server`로 지정됩니다.

```js
// nuxt.config.js
export default {
  target: 'server'
}
```

:::tip
`target` 속성의 기본 값은 `server`이기 때문에 설정 파일에 보이지 않더라도 괜찮습니다 :)
:::

SSR 모드로 생성한 웹 서비스는 배포하려는 서버에 Node.js 서버를 실행할 수 있는 형태로 배포해야 합니다. 각 클라우드 플랫폼별 자세한 가이드는 아래 링크를 참고하세요.

- [Azure](https://nuxtjs.org/docs/2.x/deployment/deployment-azure-portal)
- [Google App Engine](https://nuxtjs.org/docs/2.x/deployment/appengine-deployment)
- [Heroku](https://nuxtjs.org/docs/2.x/deployment/heroku-deployment)

## SSG(Static Site Generator)

SSG 모드는 Deployment Target을 `Static(Static/Jamstack hosting)`을 선택한 경우입니다. 넉스트 설정 파일의 `target` 속성 값은 `static`으로 지정됩니다.

```js
// nuxt.config.js
export default {
  target: 'static'
}
```

SSG 모드는 사용자의 페이지 URL 요청이 들어올 때마다 서버에서 그려서 브라우저에 보내주는 SSR 모드와 다르게 웹 서비스를 구성하는 모든 페이지를 미리 그려야 하기 때문에 스태틱 서버에 배포하는 형태로 진행해야 합니다. Netlify 등의 CD(Continuous Delivery) 플랫폼을 이용하여 손쉽게 배포할 수 있습니다.

- [Netlify](https://nuxtjs.org/docs/2.x/deployment/netlify-deployment)
- [AWS](https://nuxtjs.org/docs/2.x/deployment/deployment-amazon-web-services)
- [Azure Static Web Apps](https://nuxtjs.org/docs/2.x/deployment/deployment-azure-static-web-apps)
- [Github](https://nuxtjs.org/docs/2.x/deployment/github-pages)

:::tip
JAMStack이란 JavaScript & API & Markup을 의미하며 API 서버 없이 사이트를 제작하는 방식을 의미합니다.
:::