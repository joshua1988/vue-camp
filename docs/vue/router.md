---
title: Router
---

# 뷰 라우터

뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.

## 뷰 라우터 설치

프로젝트에 뷰 라우터를 설치하는 방법은 CDN 방식과 NPM 방식 2가지가 있습니다.

### CDN 방식

NPM으로 프로젝트를 생성하지 않고 HTML 파일에서 라우터를 사용하려면 아래 CDN 링크를 추가합니다.

<code-group>
<code-block title="Vue 2">
```html
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/vue-router@3"></script>
```
</code-block>

<code-block title="Vue 3">
```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>
```
</code-block>
</code-group>

:::danger
2022년 2월 7일부터 Vue.js 라이브러리와 Vue Router 라이브러리의 CDN 주소는 Vue 3 기반의 라이브러리 코드를 들고 옵니다. 따라서, Vue 2로 학습하고 개발하시는 분들은 위와 같이 3.x 버전을 사용해 주세요 :smile:

위 변경 사항이 궁금하시면 아래 글을 참고해 보세요 :smile: <br>
[Vue 3, 기본 버전이 되다(클릭)](https://joshua1988.github.io/web-development/vuejs/vue3-as-default/)
:::

### NPM 방식

[Vue CLI](/vue/cli)로 프로젝트를 생성하거나 NPM 기반으로 프로젝트를 생성한다면 아래 명령어를 사용합니다.

<code-group>
<code-block title="Vue 2">
```bash
npm install vue-router@3
```
</code-block>

<code-block title="Vue 3">
```bash
npm install vue-router@4
```
</code-block>
</code-group>

:::tip
- Vue 2 사용자 : 뷰 라우터 버전 3 사용
- Vue 3 사용자 : 뷰 라우터 버전 4 사용
:::

## 뷰 라우터 등록

뷰 라우터를 설치하고 나면 아래 코드와 같이 라우터 인스턴스를 하나 생성하고 뷰 인스턴스에 등록합니다.

<code-group>
<code-block title="Vue 2">
```js
// 라우터 인스턴스 생성
var router = new VueRouter({
  // 라우터 옵션
})

// 인스턴스에 라우터 인스턴스를 등록
new Vue({
  router: router
})
```
</code-block>

<code-block title="Vue 3">
```js
// 라우터 인스턴스 생성
var router = VueRouter.createRouter({
  // 라우터 옵션
})

// 인스턴스에 라우터 인스턴스를 등록
var app = Vue.createApp();
app.use(router).mount('#app');
```
</code-block>
</code-group>

## 뷰 라우터 옵션

위와 같이 라우터를 등록하고 나면 그 다음에 할 일은 라우터에 옵션을 정의하는 일입니다. 대부분의 SPA 앱에서는 아래와 같이 2개 옵션을 필수로 지정합니다.

- **routes** : 라우팅 할 URL과 컴포넌트 값 지정
- **mode** : URL의 해쉬 값 제거 속성

그럼 위 옵션으로 라우터를 정의해보겠습니다.

<code-group>
<code-block title="Vue 2">
```js
new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/home', component: HomeComponent }
  ]
})
```
</code-block>

<code-block title="Vue 3">
```js{2,3}
VueRouter.createRouter({
  // Vue 3는 mode 속성 대신 history 속성 사용
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/home', component: HomeComponent }
  ]
})
```
</code-block>
</code-group>

위 코드는 라우팅을 할 때 URL에 `#` 값을 제거하고, URL 값이 `/login`과 `/home`일 때 각각 로그인 컴포넌트와 홈 컴포넌트를 뿌려줍니다.

## router-view

브라우저의 주소 창에서 URL이 변경되면, 앞에서 정의한 routes 속성에 따라 해당 컴포넌트가 화면에 뿌려집니다. 이 때 뿌려지는 지점이 템플릿의 `<router-view>`입니다.

```html
<div id="app">
  <router-view></router-view> <!-- LoginComponent 또는 HomeComponent -->
</div>
```

앞에서 정의한 라우팅 옵션 기준으로 `/login`은 로그인 컴포넌트를 `/home`은 홈 컴포넌트를 화면에 표시합니다.

## router-link

일반적으로 웹 페이지에서 페이지 이동을 할 때는 사용자가 url을 다 쳐서 이동하지 않습니다. 이 때 화면에서 특정 링크를 클릭해서 페이지를 이동할 수 있게 해줘야 하는데 그게 바로 `<router-link>` 입니다.

```html
<router-link to="이동할 URL"></router-link>
```

실제 코드 예시는 다음과 같습니다.

```html
<div>
  <router-link to="/login"></router-link>
</div>
```

위 코드를 실행하면 화면에서는 `<a>` 태그로 변형되서 나옵니다. 따라서 `<a>` 태그를 클릭하면 `/login` URL로 이동합니다.