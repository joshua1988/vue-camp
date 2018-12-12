---
title: Watch
---

# watch 속성

watch 속성은 특정 데이터의 변화를 감지하여 자동으로 특정 로직을 수행해주는 속성입니다.

## watch 코드 형식

watch 속성의 구현 코드 형식은 다음과 같습니다.

```js
new Vue({
  data() {
    return {
      message: 'Hello'
    }
  },
  watch: {
    message: function(value, oldValue) {
      console.log(value);
    }
  }
})
```

위 코드는 `message`라는 데이터에 watch 속성을 지정한 코드입니다. `message`의 데이터가 변할 때마다 watch 속성에 정의한 message 함수가 실행되면서 콘솔에 변한 데이터를 출력합니다.

## watch 실용 문법

앞의 예시에서 살펴본 기본적인 문법 말고도 아래와 같이 다양한 형태로 watch 속성을 구현할 수 있습니다.

### 1. watch 속성에 메서드 함수를 연결

watch 대상 속성에 함수를 연결하는 대신 메서드 함수를 연결할 수 있습니다.

```js {13}
new Vue({
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    logMessage() {
      console.log(this.message);
    }
  },
  watch: {
    'message': 'logMessage' // 대상 속성과 메서드 함수를 매칭
  }
})
```

### 2. 핸들러와 초기 실행 옵션

watch 대상 속성에 아래와 같이 `handler()`와 `immediate` 속성을 정의할 수 있습니다.

```js {9-12}
new Vue({
  data() {
    return {
      message: 'Hello'
    }
  },
  watch: {
    'message': {
      handler(value, oldValue) {
        console.log(value);
      },
      immediate: true // 컴포넌트가 생성되자마자 즉시 실행
    }
  }
})
```




