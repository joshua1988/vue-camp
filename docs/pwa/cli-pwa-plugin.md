---
title: CLI PWA Plugin
isDeploy: true
order: 1
---

## 뷰 CLI의 PWA 플러그인

뷰 CLI에서 제공하는 프로그레시브 웹 앱(Progressive Web Apps: PWA) 플러그인은 구글의 [워크 박스(Workbox)](https://developers.google.com/web/tools/workbox) 라이브러리를 기반으로 구성되었습니다. 뷰 CLI의 PWA 플러그인 특징은 다음과 같습니다.

- 플러그인에서 다루는 서비스 워커 파일은 프로덕션 모드(npm run build)에서만 사용 가능
- 서비스워커 파일을 로컬에서 테스트 하는 경우 npm 빌드 후 [serve](https://www.npmjs.com/package/serve)와 같은 HTTP 서버로 실행

## PWA 관련 설정 방법

뷰 CLI의 PWA 플러그인에서 제공하는 기능이나 설정을 변경하고 싶다면 다음 둘 중 한 개의 파일을 변경합니다.

- `vue.config.js`
- `package.json`의 `vue` 속성

## PWA 플러그인에서 제공하는 설정

PWA 플러그인으로 설정할 수 있는 옵션은 다음과 같습니다.

#### pwa.workboxPluginMode

[워크 박스의 웹팩 플러그인](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)에 의해 다음 2가지 모드가 지원됩니다.

- `GenerateSW` : 기본 값. 새로 빌드할 때마다 새로운 서비스워커 파일 생성
- `InjectManifest` : 프로젝트 안에 서비스 워커 파일이 있는 경우 프리 캐싱(Precaching)된 코드를 추가하여 사용 가능. 웹 푸시와 같은 기타 서비스 워커 기능을 사용할 때 유용

:::tip
각 모드에 대해 더 자세히 알고 싶다면 다음 링크를 참고하세요. [워크박스 플러그인 모드](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#which_plugin_to_use)
:::

#### pwa.workboxOptions

[워크박스 웹팩 플러그인](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)에서
지원하는 속성 옵션과 동일하게 지원됩니다. ex) swSrc, skipWaiting 등

#### pwa.iconPaths

PWA 아이콘 경로를 설정하는 옵션입니다. 기본 값은 다음과 같습니다.

```json
{
  "favicon32": "img/icons/favicon-32x32.png",
  "favicon16": "img/icons/favicon-16x16.png",
  "appleTouchIcon": "img/icons/apple-touch-icon-152x152.png",
  "maskIcon": "img/icons/safari-pinned-tab.svg",
  "msTileImage": "img/icons/msapplication-icon-144x144.png"
}
```
