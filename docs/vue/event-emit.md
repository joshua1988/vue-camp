---
title: Event Emit
---

# 이벤트 발생

이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식입니다.

## 이벤트 발생 코드 형식

하위 컴포넌트의 메서드나 라이프 사이클 훅과 같은 곳에 아래와 같이 코드를 추가합니다.

```js
// 하위 컴포넌트의 내용
this.$emit('이벤트 명');
```

그리고 나서 해당 이벤트를 수신하기 위해 상위 컴포넌트의 템플릿에 아래와 같이 구현합니다.

```html
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-on:이벤트 명="상위 컴포넌트의 실행할 메서드 명 또는 연산"></child-component>
</div>
```

## 이벤트 코드 예시

그럼 위의 예시 코드를 참고하여 간단한 이벤트 발신, 수신 코드를 짜보겠습니다.

```js {5,17}
// 하위 컴포넌트 : childComponent
var childComponent = {
  methods: {
    sendEvent: function() {
      this.$emit('update');
    }
  }
}

// 상위 컴포넌트 : root 컴포넌트
new Vue({
  el: '#app',
  components: {
    'child-component': childComponent
  },
  methods: {
    showAlert: function() {
      alert('event received');
    }
  }
})
```

```html {2}
<div id="app">
  <child-component v-on:update="showAlert"></child-component>
</div>
```

위 코드는 하위 컴포넌트인 childComponent에서 `sendEvent()` 메서드가 실행되면 `update`라는 이벤트가 발생되고,
이를 상위 컴포넌트인 루트 컴포넌트의 `v-on` 디렉티브로 이벤트를 받아 `showAlert()` 메서드를 실행하는 코드입니다.

실행 결과는 event received 라는 경고창이 표시됩니다.