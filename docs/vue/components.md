---
title: Components
---

# 뷰 컴포넌트

컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능입니다. 컴포넌트 기반으로 화면을 개발하게 되면 코드의 재사용성이 올라가고 빠르게 화면을 제작할 수 있습니다.

![여러 개의 컴포넌트로 구성된 화면의 컴포넌트 관계도](../.vuepress/public/images/component.png)

## 컴포넌트 생성 코드 형식

컴포넌트를 생성하는 코드 형식은 아래와 같습니다.

```js
Vue.component('컴포넌트 이름', {
  // 컴포넌트 내용
});
```

## 컴포넌트 생성 후 표시하기

위 코드 형식을 참고하여 간단한 앱 헤더 컴포넌트를 만들어보겠습니다.

```js
Vue.component('app-header', {
  template: '<h1>Header Component</h1>'
});
```

위에서 등록한 컴포넌트를 화면에서 표시하려면 아래와 같이 컴포넌트 태그(컴포넌트 이름)를 추가합니다.

```html
<div id="app">
  <app-header></app-header>
</div>
```

div 태그에 뷰 인스턴스가 생성되어 있다는 가정하에 위 템플릿 코드는 결과적으로 아래와 같이 표시됩니다.

```html
<div id="app">
  <h1>Header Component</h1>
</div>
```

## 컴포넌트 등록 방법 2가지

컴포넌트를 등록하는 방법은 크게 2가지가 있습니다. 앞에서 살펴본 방식은 전역 컴포넌트를 등록하는 방법입니다.

```js
// 전역 컴포넌트 등록
Vue.component('app-header', {
  template: '<h1>Header Component</h1>'
});
```

또 다른 방법은 지역 컴포넌트로 등록하는 방법이 있습니다. 앞에서 사용한 컴포넌트 내용을 가지고 그대로 지역 컴포넌트로 등록하면 아래와 같습니다.

```js
var appHeader = {
  template: '<h1>Header Component</h1>'
}

new Vue({
  components: {
    'app-header': appHeader
  }
})
```