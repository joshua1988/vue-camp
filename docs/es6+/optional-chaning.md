---
title: Optional Chaning
---

# Optional Chaning(`?.`)

옵셔널 체이닝 연산자는 객체의 속성 값이 유효한지 검증할 수 있는 자바스크립트 문법입니다. 옵셔널 체이닝은 `?.` **앞**의 평가 대상이 `undefined`나 `null`이라면, 에러가 발생하는 것 대신에 `undefined` 를 반환합니다.

## 옵셔널 체이닝이 추가되기 전

옵셔널 체이닝 문법이 추가되기 전에 중첩된 객체의 하위 속성을 찾기 위한 코드는 아래와 같았습니다.

```js
const userInfo = {
  name: {
    first: 'Hong',
    last: 'Gildong',
  },
  address: {
    city: 'Seoul',
    postcode: '04377',
  },
};

const postcode = userInfo.address && userInfo.address.postcode;
```

`&&` 연산자를 사용해서 `userInfo` 에 `address` 속성이 있는지 확인을 하고 `postcode` 에 접근하는 것을 볼 수 있습니다.

## 옵셔널 체이닝이 추가 된 후

```js
const userInfo = {
  name: {
    first: 'Hong',
    last: 'Gildong',
  },
  address: {
    city: 'Seoul',
    postcode: '04377',
  },
};

const postcode = userInfo.address?.postcode;
```

옵셔널 체이닝을 사용하면 이전 코드보다 문법적으로 깔끔하고 안전하게 중첩된 객체의 하위 속성 값에 접근할 수 있습니다.

```js
const userInfo = {
	...
  getInfo: () => userInfo,
}

userInfo.getInfo?.()
// userInfo object

userInfo.setInfo?.()
// undefined
```

옵셔널 체이닝은 메소드의 존재 여부를 확인하고 호출할 때도 사용할 수 있습니다.

```js
const userInfo = {
	...
	address: {
		city: "Seoul",
		postcode: "04377",
	}
}
const key = "city"

console.log(userInfo.address?.[key])
// Seoul
```

`.` 대신 대괄호 `[]` 를 사용해 객체의 속성에 접근하는 경우에도 옵셔널 체이닝을 사용할 수 있습니다.

## 널 병합 연산자(`??`)와 같이 활용하기

```js
const userInfo = {
	...
	address: {
		city: "Seoul",
		postcode: "04377",
	}
}

const city = userInfo.address?.city ?? "New York"
```

옵셔널 체이닝으로 객체의 속성 값을 확인하고 `undefined` 가 반환되면 [널 병합 연산자(`??`)](/es6+/nullish-coalescing-operator.html)를 통해 기본 값을 제공할 수 있습니다.

::: warning
옵셔널 체이닝을 남용하지 않도록 주의해주세요.
:::

옵셔널 체이닝(`?.`)은 존재하지 않아도 괜찮은 대상에만 사용해야 합니다. 위 예제 코드에서 `userInfo` 는 반드시 존재해야 하지만 `address` 값은 필수값이 아닙니다. 그러므로 `userInfo.address?.city` 를 사용하는 것은 바람직하지만 `userInfo?.address?.city` 는 바람직하지 않습니다. 이렇게 사용하게 된다면 `userInfo` 값이 없을 때 바로 에러를 발생시키지 못해 추후 디버깅에 어려움을 겪을 수 있습니다.
