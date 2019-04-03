---
title: Introduction
---

# Nuxt란?

Nuxt는 Vue.js로 빠르게 웹을 제작할 수 있게 도와주는 프레임워크입니다. 웹 애플리케이션을 제작할 때 필요한 [뷰엑스](/vuex/concept.html), [라우터](/vue/router.html), [Axios](/vue/axios.html)와 같은 라이브러리들을 미리 구성하여 싱글 페이지 애플리케이션(Single Page Application), 서버 사이드 렌더링(Server Side Rendering), 정적 웹 사이트(Static Generated Website)를 쉽게 제작할 수 있습니다.

::: tip
서버 사이드 렌더링이란 웹 페이지의 내용을 서버에서 모두 작성해서 클라이언트(브라우저)로 보낸 뒤 화면에 그리는 방식을 의미합니다.
:::

## Nuxt 특징

Nuxt의 특징을 요약해보면 크게 아래와 같이 구분됩니다.

- pages 폴더 기반의 자동 라우팅 설정
- 코드 스플리팅
- 서버 사이드 렌더링
- 비동기 데이터 요청 속성
- ES6/ES6+ 변환
- 웹팩을 비롯한 기타 설정

## Nuxt 시작하기

Nuxt 프로젝트를 구성하기 위해 다음 명령어를 실행합니다.

```bash
npm init nuxt-app 프로젝트 이름
```