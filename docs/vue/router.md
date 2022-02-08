---
title: Router
---

# 뷰 라우터

뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.

## 뷰 라우터 설치

프로젝트에 뷰 라우터를 설치하는 방법은 CDN 방식과 NPM 방식 2가지가 있습니다.

### CDN 방식

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js">
```

:::danger
2022년 2월 7일부터 Vue.js 라이브러리와 Vue Router 라이브러리의 CDN 주소는 Vue 3 기반의 라이브러리 코드를 들고 옵니다. 따라서, Vue 2로 학습하고 개발하시는 분들은 위와 같이 3.5.3 버전을 사용해 주세요 :)
:::

:::tip
위 변경 사항이 궁금하시면 다음 글을 참고해 보세요 :) [Vue 3, 기본 버전이 되다](https://joshua1988.github.io/web-development/vuejs/vue3-as-default/)
:::

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

위의 내용으로도 간단한 라우팅을 구현할 수 있습니다. 이번 단락에서는 기타 라우터 API와 실무에서 자주 사용되는 라우터 옵션들을 알아보도록 하겠습니다.  

### 동적 라우트 매칭 
동적 라우트 매칭(Dynamic Route Matching)은 특정 패턴을 가진 경로들을 동일한 컴포넌트에 매핑해야 할 경우 사용하는 기법입니다.  
동적 라우트 매칭의 예시로 다음과 같은 라우터가 정의되었다고 가정합니다.  
```js
new VueRouter({
  routes: [
    { path: '/resume/:year', component: ResumeComponent }
  ]
})
```
위 코드와 같이 라우터를 정의하면 `path`에서 콜론(`:`)으로 시작하는 부분(동적 세그먼트)이 다르더라도 같은 경로에 매핑됩니다.  
따라서 `/resume/2020`과 `/resume/2021` 같은 URL이 모두 `ResumeComponent` 컴포넌트를 보여주게 됩니다.  
또한 `:year` 에 해당하는 값은 다음과 같이 해당 컴포넌트에서 `this.$route.params` 를 통해 가져와서 활용할 수 있습니다. 
```html
<!-- ResumeComponent.vue -->
<template>
  <h1>{{ $route.params.year }}</h1>
</template>
```

### 컴포넌트에 props 전달하기 
앞서 동적 라우트 매칭에서 살펴본 것처럼 컴포넌트에서 `$route`를 사용하는 경우, 컴포넌트가 라우터 속성에 의존하게 되어 특정 URL에서만 사용된다는 문제점이 있습니다.  
이 의존성 해제를 위해 컴포넌트와 라우터 속성을 분리하려면 속성 `props`에 `true`를 전달해줍니다. 
```js
new VueRouter({
  routes: [
    { path: '/resume/:year', component: ResumeComponent, props: true }
  ]
})
```
위 코드와 같이 `props`가 `true`로 적용되면 `:year`에 해당하는 부분이 `year`라는 `props`로 전달됩니다.  
이를 통해 컴포넌트를 라우터 속성에 의존하지 않고 재사용할 수 있게 됩니다.  
```html{3,8}
<!-- ResumeComponent.vue -->
<template>
  <h1>{{ year }}</h1>
</template>

<script>
export default {
  props: ['year']
}
</script>
```

### 라우터 네비게이션 메서드  
라우터 API에는 `<router-link>`로 웹 페이지 이동을 위한 `<a>` 태그를 만드는 방법 외에도 프로그래밍적으로 페이지를 이동할 수 있는 메서드가 있습니다.  
Vue 인스턴스 내부에서 라우터 인스턴스에 접근하려면 `$router`를 사용하면 됩니다.
#### router.push()
```javascript
router.push(location, onComplete?, onAbort?)
```
`<router-link>`의 `to` 속성과 같습니다. 히스토리에 현재 페이지를 저장한 뒤 인자로 전달받은 URL(`location`)로 이동합니다. 
```javascript
// string 전달
this.$router.push('home'); 

// object 전달  
this.$router.push({ path: 'home' }); 

const postId = "1";
this.$router.push({ path: `/posts/${postId}` }); // → /posts/1

// query와 함께 전달 
this.$router.push({ path: 'user', query: { id: 'captain' } }); // → /user?id=captain
```
`onComplete`와 `onAbort`는 콜백 함수로, `onComplete`는 네비게이션이 성공적으로 완료되었을 경우 호출되고, `onAbort`는 현재 네비게이션이 완료되기 전 동일한 경로로 이동하거나 다른 경로로 이동될 때 호출됩니다.  
```javascript
export default {
  methods: {
    click() {
      this.$router.push("/home", this.completeHandler, this.abortHandler);
    },
    completeHandler() {
      console.log("complete");
    },
    abortHandler() {
      console.log("abort");
    },
  },
};
```
#### router.replace()
```javascript
router.replace(location, onComplete?, onAbort?)
```
히스토리에 현재 페이지를 저장하지 않고 이동합니다. 그래서 히스토리에 경로가 남지 않으므로 백스페이스키를 눌렀을 때 원래 페이지로 돌아올 수 없습니다. 이름에 나타나듯이 현재 페이지가 다른 페이지로 대체되는 것입니다.  
사용하는 매개변수는 `router.push` 메서드와 같습니다.   

```javascript
this.$router.replace('home');
```
#### router.go()
```javascript
router.go(n)
```
히스토리 스택에서 앞 또는 뒤로 전달된 인자(정수)만큼 이동합니다. 
```javascript
this.$router.go(-1); // 이전 페이지로 이동

this.$router.go(1);  // 다음 페이지로 이동 
```
### 라우터 메타 필드
라우터를 정의할 때 `meta` 필드를 통해 원하는 메타 정보를 입력할 수 있습니다. 로그인이 필요한 라우팅인지 아닌지 구분해야 하는 경우에 활용될 수 있습니다.  
로그인 필요 여부 처리 방법에 대해서는 [네비게이션 가드 문서](../advanced/navigation-guard.md#네비게이션-가드로-인증-정보-확인)를 참고하시기 바랍니다.

```javascript
new VueRouter({
  routes: [
    // authRequired: true 라는 메타 필드 입력
    { path: '/orders', component: OrdersComponent, meta: { authRequired: true } }
  ]
})
```

### 코드 분할  
Webpack과 같은 번들러를 이용해 앱을 제작하면 파일이 커져 페이지 로드 시간이 오래 걸릴 수 있습니다. 처음에 렌더링에 필요한 모든 파일을 로드하는 것보다 경로에 맞춰 당장 렌더링이 필요한 파일만 로드하는 것이 효율적일 것입니다. 이때 사용하는 기법이 **코드 분할**입니다. 자세한 내용은 [라우터의 코드 분할 문법](../advanced/code-splitting.md#라우터의-코드-분할-문법)을 참고하시기 바랍니다. 
