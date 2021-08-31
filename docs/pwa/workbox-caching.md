---
title: Workbox Caching
isDeploy: true
order: 3
---

## PWA의 캐싱이란?

브라우저의 캐싱(Cache-Control)과는 다르게 브라우저의 캐시 스토리지(Cache Storage)를 활용하여 웹 리소스를 캐싱하는 기술입니다.

## 워크박스 캐싱 전략

워크박스로 웹 서비스를 캐싱할 때는 다음 2가지 방법을 알아야 합니다.

- 프리 캐싱(Precaching)
- 런타임 캐싱(Runtime Caching)

## 프리 캐싱

프리 캐싱이란 웹 애플리케이션을 접속하기 전에 미리 캐싱해놓는 캐싱 방법을 말합니다.
워크박스 CLI로 생성한 결과물이나 `workbox-build` 라이브러리에서 아래와 같은 코드를 보면 프리 캐싱이라고 이해하시면 됩니다.

```js
// workbox cli
module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,ico,html,js,json,png}"
  ],
  "swDest": "dist/sw.js"
};
```

```js
// workbox-build lib
workboxBuild.generateSW({
  globDirectory: 'build',
  globPatterns: [
    '**/*.{html,json,js,css}',
  ],
  swDest: 'build/sw.js',
});
```

## 런타임 캐싱

런타임 캐싱이란 웹 애플리케이션을 동작 시킬 때 발생하는 요청에 대해 서버 응답을 캐시 스토리지에 저장하는 캐싱 방법을 말합니다.
보통 이미지와 같은 리소스는 파일 용량이 커서 처음 페이지 접속할 때 서비스 워커 설치 시간이 길어지므로 런타임 캐싱으로 하는게 좋습니다.

```js
// workbox-build lib
workboxBuild.generateSW({
  // ...
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'my web app images',
      expiration: {
        maxEntries: 10,
      },
    },
  }],
});
```

## 캐싱 전략

서비스 워커의 캐싱 전략은 다음 5개가 있습니다.

- Cache First : 네트워크 요청과 캐싱 중 항상 캐시를 먼저 접근하는 방식
- Cache Only : 캐싱 파일만 확인하고 없으면 에러를 뱉는 방식
- Network First : 항상 캐싱보다는 네트워크 요청을 먼저 진행하는 방식
- Network Only : 해당 파일에 대해서는 캐싱 파일의 유무와 관계 없이 항상 네트워크 요청만 하는 방식
- StaleWhileRevalidate : 캐싱을 먼저 시도하고 없으면 네트워크 요청을 진행하는 방식. 프로필 이미지와 같이 자주 업데이트 되면서 최신 데이터가 아니어도 되는 데이터 적용하면 좋음

## 참고 자료

- [Workbox 공식 홈페이지](https://developers.google.com/web/tools/workbox/guides/get-started)
- [Workbox Stratigies](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies)
- [Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network)