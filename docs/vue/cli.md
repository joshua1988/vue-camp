---
title: CLI
---

# 뷰 CLI

뷰 CLI는 뷰로 빠르게 프로젝트를 구성하고 프로토 타이핑을 하고 싶을 때 사용하는 CLI 도구입니다. 

::: tip
최신 버전은 3.x이며 책에서는 2.9 버전을 기준으로 설명하였습니다.
:::

## 뷰 CLI 설치

뷰 CLI를 설치하기 위해서는 기본적으로 Node.js를 시스템에 설치해놔야 합니다. Node.js를 설치하고 나면 사용할 수 있는 NPM(Node Package Manager)을 이용하여 뷰 CLI를 설치합니다.

```bash
버전 3.x
npm install -g @vue/cli

버전 2.9
npm install vue-cli
```

## 뷰 CLI로 프로젝트 생성하기

프로젝트를 생성하는 명령어는 아래와 같습니다.

```bash
버전 3.x
vue create helloworld
```

```bash
버전 2.9
vue init webpack-simple 파일 경로
```

## 뷰 CLI 3.0과 CLI 2.9와 차이점

기존 뷰 CLI 2.9의 프로젝트 생성 방식은 깃헙 리포지토리에 등록된 폴더와 파일을 그대로 다운로드 받는 것이었습니다. 그에 반해 뷰 CLI 3.0은 뷰 플러그인을 이용하여 필요한 기능들을 추가해 나가는 형식입니다.

그리고 차이점은 크게 아래와 같이 정리됩니다.

|           | Vue CLI 3.0                                                    | Vue CLI 2.9                       |
|:-----------:|----------------------------------------------------------------|-----------------------------------|
| **언어**      | ES6 기준                                                       | ES5 기준 (ES6 선택 가능)             |
| **웹팩**    | 웹팩 설정 파일이 숨겨져 있음 [(필요한 설정은 추가하는 형식)](https://cli.vuejs.org/guide/webpack.html#working-with-webpack) | 웹팩 설정 파일에서 바로 수정 가능         |
| **GUI**       | GUI 툴 제공 (vue ui)                                           | X                                 |
| **구성**       | 뷰 플러그인 형식                                    | [프로젝트 템플릿](https://github.com/vuejs-templates/webpack-simple)을 깃헙에서 다운로드                           |
| **명령어**       | vue create '프로젝트 이름'                        | vue init '프로젝트 템플릿 이름' '프로젝트 폴더 경로'              |