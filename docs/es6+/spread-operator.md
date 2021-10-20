---
title: Spread Operator
---

# 스프레드 오퍼레이터(Spread Operator)

스프레드 오퍼레이터는 한글로 번역해보면 펼침 연산자 정도로 볼 수 있습니다. 스프레드 오퍼레이터는 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용합니다. 연산자의 모양은 `...` 이렇게 생겼습니다.

## 스프레드 오퍼레이터 사용법

바로 한번 코드로 살펴볼까요?

```js
// obj 객체를 newObj 객체에 복제
var obj = {
  a: 10,
  b: 20
};
var newObj = {...obj};
console.log(newOjb); // {a: 10, b: 20}

// arr 배열을 newArr 배열에 복제
var arr = [1,2,3];
var newArr = [...arr];
console.log(newArr); // [1, 2, 3]
```

위 코드들은 모두 스프레드 오퍼레이터를 이용하여 특정 객체, 배열의 값을 각각 새로운 객체와 배열에 복제하는 코드입니다. 이렇게 스프레드 오퍼레이터를 사용하는 이유는 무엇일까요? 

## 기존 자바스크립트의 객체 복제 방식

앞에서 살펴본 코드에서 스프레드 오퍼레이터를 사용하지 않고 기존 자바스크립트 문법으로만 구현해보겠습니다.

```js
// 객체의 값을 복사하는 경우
var obj = {
  a: 10,
  b: 20
};
var newObj = {
  a: obj.a,
  b: obj.b
};
console.log(newObj); // {a: 10, b: 20}

// 배열의 값을 복사하는 경우
var arr = [1,2,3];
var newArr = [arr[0], arr[1], arr[2]];
console.log(newArr); // [1, 2, 3]
```

객체를 복사하는 경우, 새로운 객체인 `newObj`에 새로운 속성들을 선언하고 각 속성에 `obj`의 속성들을 일일이 접근해서 대입해줘야 합니다. 배열 `newArr`의 경우에는 기존 배열 `arr`의 인덱스에 일일이 접근하여 새로운 요소를 만들어줘야 합니다.

위 코드에서 살펴볼 수 있듯이 스프레드 오퍼레이터를 사용하게 되면 타이핑해야 하는 코드의 양이 확연히 줄어듭니다.

## 뷰엑스에 적용해본 스프레드 오퍼레이터

뷰에서 스프레드 오퍼레이터가 가장 잘 활용되는 부분은 뷰엑스(Vuex)의 헬퍼 함수입니다. 뷰엑스와 헬퍼 함수가 익숙하지 않은 분들은 [Vuex 시작하기 2](https://joshua1988.github.io/web-development/vuejs/vuex-getters-mutations/)글을 참고하세요. 어차피 여기서 중요한 부분은 스프레드 오퍼레이터가 어떤 식으로 뷰에서 활용되는지 확인하는 것입니다.

그럼 코드를 살펴보겠습니다.

```js
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getStrings', 'getNumbers', 'getUsers']),
    anotherCounter() {
      // ..
    }
  }
}
```

위 코드에서 `mapGetters`라는 헬퍼 함수 앞에 스프레드 오퍼레이터인 `...`를 사용하였습니다. 만약 `...`를 사용하지 않았다면, computed 속성 함수에는 뷰엑스의 getters 속성 함수들만 정의할 수 있었을 것입니다. 무슨 말인지 이해가 안가신다구요? 그럼 위의 코드에서 `...`를 더 풀어볼게요.

```js
import { mapGetters } from 'vuex';

export default {
  computed: {
    getStrings() {
      // ..
    },
    getNumbers() {
      // ..
    },
    getUsers() {
      // ..
    },
    anotherCounter() {
      // ..
    }
  }
}
```

만약 `...`를 쓰지 않았다면 `anotherCounter()`를 추가로 정의할 수 없었을 것입니다. `...`로 풀어서 위와 같이 삽입을 해줬기 때문에 추가로 computed 속성 함수를 정의할 수 있게 되었습니다.