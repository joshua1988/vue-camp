---
title: Navigation Guard
---

# 네비게이션 가드

네비게이션 가드는 사용자의 권한에 따라 페이지 접근을 막거나 페이지를 로딩하기 전에 데이터를 미리 불러올 때 사용하기 좋은 기술입니다. 사실상 싱글 페이지 애플리케이션을 구현할 때는 거의 필수로 구현해야 합니다.

## 네비게이션 가드 종류

네비게이션 가드 종류는 전역, 지역, 컴포넌트 3가지가 있습니다. 주로 사용되는 전역과 지역 네비게이션 가드를 살펴보겠습니다.

## 네비게이션 전역 가드

전역 가드를 설정하는 코드입니다.

```js
var router = new VueRouter();

router.beforeEach(function(to, from, next) {
  // ...
});
```

뷰 라우터 인스턴스를 하나 생성하고 해당 인스턴스를 참조하는 변수에 `beforeEach()` API를 호출합니다. 인자로 받은 3개의 변수는 다음과 같은 역할을 합니다.

- to : 이동할 url
- from : 현재 url
- next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수

## 네비게이션 지역 가드

라우팅 로직에 따라서 때로는 지역과 전역을 섞어서 사용해야 할 때가 있습니다. 지역 가드는 아래와 같이 구현합니다.

```js
var router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: function(to, from, next) {
        // 인증 값 검증 로직 추가
      }
    }
  ]
})
```

`beforeEnter()`의 인자 3개는 앞에서 살펴본 내용과 동일합니다.

## 네비게이션 가드로 인증 정보 확인

네비게이션 가드가 가장 많이 쓰이는 곳은 사용자 인증 정보에 따라 접근을 막는 로직입니다.

```js
router.beforeEach(function(to, from, next) {
  // to: 이동할 url에 해당하는 라우팅 객체
  if (to.matched.some(function(routeInfo) {
    return routeInfo.meta.authRequired;
  })) {
    // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
    alert('Login Please!');
  } else {
    console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  };
});
```

