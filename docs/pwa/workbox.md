---
title: Workbox
---

## 워크박스(Workbox)란?

PWA의 캐싱(caching) 기능을 편하게 구현할 수 있도록 지원되는 표준 PWA 라이브러리.
[sw-precaching], [sw-toolbox] 라이브러리가 지원하던 기능들을 통합하여 제공한다.

## CLI로 워크박스 시작하기

워크박스 라이브러리의 사용 방법을 익히기 위해서 CLI로 간단하게 파일을 캐싱해보겠습니다.
먼저 CLI를 아래 명령어로 설치합니다.

```bash
npm install workbox-cli --global
```

정상적으로 설치가 되었으면 `workbox --help` 명령어가 인식될 것입니다.

## 워크박스 CLI로 서비스 워커 생성하기

PWA를 적용하고 싶은 웹 애플리케이션의 프로젝트에서 아래와 같이 워크박스 위저드 명령어를 입력합니다.

```bash
workbox wizard
```

위 명령어를 입력하면 아래와 같이 몇 가지의 질문이 나옵니다. 그 질문엔 아래와 같이 대답합니다.

- 웹 애플리케이션의 루트가 어디인지? `app/`
- 어떤 파일 유형들을 프리캐싱(pre-caching)할 것인지? `html, css, js, jpg, png`
- 위 옵션들이 적용된 서비스 워커 파일이 생성될 위치? `dist/sw.js`
- 위 구성 정보들을 어디에 저장할 것인가? `workbox-config.js`

## 워크박스 CLI의 generateSW 모드

앞의 위저드로 생성한 워크 박스의 구성 정보는 `workbox-config.js`에 담기게 됩니다.
이 때 다음 명령어를 입력하면 위 구성 정보가 담긴 서비스 워커 파일을 생성할 수 있습니다.

```bash
workbox generateSW ./workbox-config.js
```

이렇게 생성된 서비스 워커 파일에는 워크박스의 프리 캐싱과 런타임 캐싱 기능이 포함되어 있습니다.

:::tip
다만, 웹 푸시 기능이 필요한 경우에는 적합하지 않은 옵션입니다. 웹 푸시는 `injectManifest` 옵션을 활용하세요.
:::

## 워크박스 CLI의 injectManifest 모드

워크박스 injectManifest 모드는 generateSW 모드와는 다르게 개발자가 좀 더 서비스워커 파일을 직접 조작하거나 내용을 수정할 수 있습니다. 파일 캐싱 이외에 웹 푸시 API와 같은 네이티브 API 기능을 구현하고 싶을 때 적합한 모드입니다.

개발자가 구현해놓은 서비스 워커 파일을 읽어 설정 파일(workbox-config.js)에 설정된 캐싱 정보를 추가하고 새 서비스 워커 파일을 생성해줍니다. 명령어는 다음과 같습니다.

```bash
workbox injectManifest ./workbox-config.js
```