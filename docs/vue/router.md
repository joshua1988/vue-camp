---
title: Router
---

# 뷰 라우터

뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.

## 뷰 라우터 설치

프로젝트에 뷰 라우터를 설치하는 방법은 CDN 방식과 NPM 방식 2가지가 있습니다.

### CDN 방식

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js">
```

### NPM 방식

```bash
npm install vue-router
```

## 뷰 라우터 등록

뷰 라우터를 설치하고 나면 아래 코드와 같이 라우터 인스턴스를 하나 생성하고 뷰 인스턴스에 등록합니다.

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

## 뷰 라우터 옵션

위와 같이 라우터를 등록하고 나면 그 다음에 할 일은 라우터에 옵션을 정의하는 일입니다. 대부분의 SPA 앱에서는 아래와 같이 2개 옵션을 필수로 지정합니다.

- **routes** : 라우팅 할 URL과 컴포넌트 값 지정
- **mode** : URL의 해쉬 값 제거 속성

그럼 위 옵션으로 라우터를 정의해보겠습니다.

```js
new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/home', component: HomeComponent }
  ]
})
```

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

## 기타 라우터 옵션과 기법

위의 내용으로도 간단한 라우팅을 구현할 수 있습니다. 기타 라우터 API와 실무에서 자주 사용되는 라우터 옵션들은 뒤의 [라우터 고급 기법]()에서 알아보겠습니다.