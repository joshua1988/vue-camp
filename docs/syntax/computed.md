---
title: Computed
---

# computed 속성

컴퓨티드(computed) 속성은 템플릿의 데이터 표현을 더 직관적이고 간결하게 도와주는 속성입니다. 바로 코드를 보겠습니다.

## computed 속성 예시

```html
<div>{{ message.split('').reverse().join('') }}</div>
```

위 코드는 message라는 데이터 속성의 문자열 순서를 역으로 변환해주는 코드입니다. message 값이 만약 Hello라면 화면에 출력되는 값은 olleH입니다. 이처럼 콧수염 괄호 안에는 단순히 데이터 속성의 값만 표시하는게 아니라 자바스크립트의 내장 API를 활용하여 어느 정도 가공할 수 있습니다.

이와 같은 계산식이 템플릿에 많아지면 템플릿의 가독성이 현저히 떨어집니다. 따라서 아래와 같이 computed 속성을 활용해야 합니다.

```js
computed: {
  reverseMessage() {
    return this.message.split('').reverse().join('');
  }
}
```

문자열을 역으로 변환하는 로직을 컴퓨티드 속성에 정의했기 때문에 최종적으로 화면에는 아래와 같이 구현하면 됩니다.

```html
<div>{{ reverseMessage }}</div>
```

## computed 속성의 장점

컴퓨티드 속성은 단순히 뷰 템플릿 코드의 가독성만 높여줄 뿐만 아니라 컴퓨티드 속성의 대상으로 정한 data 속성이 변했을 때 이를 감지하고 자동으로 다시 연산해주는 장점이 있습니다.

앞에서 살펴본 코드에서 message 값을 Hello Vue.js로 바꾸는 순간 컴퓨티드 속성이 다시 연산을 해서 화면에 sj.euV olleH를 표시해줍니다. 한번 message 값을 변경해보고 다시 화면을 갱신해주는지 직접 확인해보세요.

## computed 속성 주의사항

컴퓨티드 속성을 사용할 때 주의할 사항은 다음 2가지입니다.

1. 컴퓨티드 속성은 인자를 받지 않는다.
2. HTTP 통신과 같이 컴퓨팅 리소스가 많이 필요한 로직을 정의하지 않는다.

### 1. 인자를 받지 않는 computed

컴퓨티드의 사용법을 익히고 나서 화면을 구현하다가 보면 자연스럽게 아래와 같은 시도를 하게 됩니다.

```html
<div>{{ reverseMessage(false) }}</div>
```

```js
computed: {
  reverseMessage(isReversed) {
    return isReversed ? this.message.split('').reverse().join('') : this.message;
  }
}
```

위의 코드는 정상적으로 동작하지 않습니다. 템플릿에 선언한 컴퓨티드 속성에 괄호가 생기는 순간 해당 템플릿을 실제 DOM으로 변환할 때 라이브러리에서 에러를 발생시킵니다.

### 2. HTTP 통신 코드를 제외하는 computed

흔히 저지르는 또 다른 실수는 다음과 같습니다.

```js
data: {
  message: ''
},
computed: {
  reverseMessage() {
    var vm = this;
    axios.get('/message').then(function(response) {
      vm.message = response.data;
    });
    return this.message.split('').reverse().join('');
  }
}
```

컴퓨티드 속성에 HTTP 요청과 같은 비싼 비용의 코드를 넣는 경우가 있습니다. 기본적으로 컴퓨티드 속성은 템플릿 코드의 가독성을 위한 기능이며 HTTP 통신과 같이 브라우저 리소스가 많이 할애되는 코드들은 watch나 methods에 넣는 것이 적합합니다.





