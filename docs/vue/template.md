---
title: Template
---

# 뷰의 템플릿 문법

뷰의 템플릿 문법이란 뷰로 화면을 조작하는 방법을 의미합니다. 템플릿 문법은 크게 데이터 바인딩과 디렉티브로 나뉩니다.

## 데이터 바인딩

데이터 바인딩은 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법입니다. 가장 기본적인 데이터 바인딩 방식은 콧수염 괄호(Mustache Tag)입니다.

```html
<div>{{ message }}</div>
```

<code-group>
<code-block title="Vue 2">
```js
new Vue({
  data: {
    message: 'Hello Vue.js'
  }
})
```
</code-block>

<code-block title="Vue 3">
```js
Vue.createApp({
  data() {
    return {
      message: 'Hello Vue.js'
    }
  }
})
```
</code-block>
</code-group>

div 태그에 콧수염 괄호를 이용해 뷰 인스턴스의 `message` 속성을 연결했습니다. 코드를 실행하면 화면에 Hello Vue.js라는 코드가 출력됩니다.

## 디렉티브

디렉티브는 뷰로 화면의 요소를 더 쉽게 조작하기 위한 문법입니다. 화면 조작에서 자주 사용되는 방식들을 모아 디렉티브 형태로 제공하고 있습니다. 예를 들어 아래와 같이 특정 속성 값에 따라 화면의 영역을 표시하거나 표시하지 않을 수 있습니다.

```html
<div>
  Hello <span v-if="show">Vue.js</span>
</div>
```

<code-group>
<code-block title="Vue 2">
```js
new Vue({
  data: {
    show: false
  }
})
```
</code-block>

<code-block title="Vue 3">
```js
Vue.createApp({
  data() {
    return {
      show: false
    }
  }
})
```
</code-block>
</code-group>

위의 코드는 `show`라는 데이터 속성 값에 따라 Vue.js 텍스트가 출력되거나 되지 않는 코드입니다. 또 다른 사례를 살펴보겠습니다.

```html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```

<code-group>
<code-block title="Vue 2">
```js
new Vue({
  data: {
    items: ['shirts', 'jeans', 'hats']
  }
})
```
</code-block>

<code-block title="Vue 3">
```js
Vue.createApp({
  data() {
    return {
      items: ['shirts', 'jeans', 'hats']
    }
  }
})
```
</code-block>
</code-group>

v-for 디렉티브를 활용하면 데이터 속성의 개수만큼 화면의 요소를 반복하여 출력할 수 있습니다. 목록을 표시해야 할 때 유용하게 사용할 수 있는 기능입니다.

이외에도 자주 사용되는 디렉티브는 다음과 같습니다.

- v-bind
- v-on
- v-model