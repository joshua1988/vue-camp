---
title: General Guide
---

# CLI로 생성한 프로젝트 배포하기

Vue CLI로 생성한 프로젝트를 다 구현한 뒤 서버에 배포하는 방법에 대해서 다룹니다.

## 배포 명령어

`npm run build`

CLI로 생성한 프로젝트를 서비스에 배포하려면 제일 먼저 위 명령어를 실행해야 합니다. 실행하고 나면 아래와 같이 호스팅 할 수 있는 형태의 HTML, CSS, Javascript, 이미지 등의 파일이 생성되죠. 이렇게 생성된 자원을 빌드된 자원이라고 부릅니다.

![뷰 컴포넌트 통신 방식](../.vuepress/public/images/deploy-folder-structure.png)

## 웹 서버에 빌드된 자원 배포하기

앞에서 생성한 빌드 자원을 각각의 서버에 배포하기 위해서는 각 서버에 추가적인 세팅이 필요합니다. 특히 뷰 라우터를 활용하여 싱글 페이지 애플리케이션을 제작하신 경우에는 서버에 꼭 페이지 fallback 옵션을 추가해주셔야 해당 url로 접근했을 때 정상적으로 동작합니다. 각 웹 서버의 fallback 설정 방법은 아래 공식 문서를 참고하세요.

[Server Configuration Guide - Vue Router](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)