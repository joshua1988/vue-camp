---
title: Vue Folder Structure
---

# 뷰 프로젝트 폴더 구조

뷰의 장점 중 하나는 빠른 프토토 타이핑이 가능하다는 점입니다. 뷰 CLI로 프로젝트를 생성하고 나면 npm으로 원하는 기능들을 빠르게 확장해 나갈 수 있습니다.

이번 챕터에서는 복잡해진 프로젝트 폴더 구조를 효율적으로 관리하는 방법에 대해서 알아보겠습니다. 철저히 저의 개인적인 의견이 반영된 폴더 구조이기 때문에 참고만 하시고 필요한 것만 취해가시면 될 것 같습니다 :)

## 뷰 CLI로 생성한 기본 폴더 구조

뷰 CLI 2.9 버전을 이용하여 webpack-simple 프로젝트를 아래와 같이 생성합니다.

```bash
vue init webpack-simple folder-structure
```

프로젝트를 생성하고 나면 기본적인 폴더 구조는 아래와 같이 구성됩니다.

```bash
.
├─ README.md
├─ index.html
├─ webpack.config.js
├─ package.json
└─ src
   ├─ main.js
   ├─ App.vue
   └─ assets
      └─ logo.png
```

## 기능 별로 구분한 폴더 구조

실무에서 개발할 때 필수로 사용되는 라우터, 상태 관리, 필터, 다국어, 플러그인 등을 이용하면 아래와 같이 폴더를 구분할 수 있습니다.

```bash
.
├─ README.md
├─ index.html
├─ webpack.config.js
├─ package.json
└─ src
   ├─ main.js
   ├─ App.vue
   ├─ components        컴포넌트
   │  ├─ common
   │  └─ ...
   ├─ router            라우터
   │  ├─ index.js
   │  └─ routes.js
   ├─ views             라우터 페이지
   │  ├─ MainView.vue
   │  └─ ...
   ├─ store             상태 관리
   │  ├─ auth
   │  ├─ index.js
   │  └─ ...
   ├─ api               api 함수
   │  ├─ index.js
   │  ├─ users.js
   │  └─ ...
   ├─ utils             필터 등의 유틸리티 함수
   │  ├─ filters.js
   │  ├─ bus.js
   │  └─ ...
   ├─ mixins            믹스인
   │  ├─ index.js
   │  └─ ...
   ├─ plugins           플러그인
   │  ├─ ChartPlugin.js
   │  └─ ...
   ├─ translations      다국어
   │  ├─ index.js
   │  ├─ en.json
   │  └─ ...
   └─ assets            css 등의 웹 자원
      ├─ css
      ├─ images
      └─ ...
```