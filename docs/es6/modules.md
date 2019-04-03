---
title: Modules
---

# Import & Export

임포트(Import)와 익스포트(Export)는 자바스크립트의 코드를 모듈화 할 수 있는 기능입니다. 여기서 모듈화란 쉽게 말해서 다른 파일에 있는 자바스크립트의 기능을 특정 파일에서 사용할 수 있는 것을 의미합니다. 

## 모듈화의 필요성

기본적으로 자바스크립트의 유효 범위는 전역으로 시작합니다. 따라서 아래와 같이 HTML 페이지를 로딩하면 원하는 결과가 나오지 않습니다.

```html
<!-- index.html -->
<body>
  <script src="a.js"></script>
  <script src="b.js"></script>
  <script>
    getTotal(); // 200
  </script>
</body>
```

```js
// a.js
var total = 100;
function getTotal() {
  return total;
}
```

```js
// b.js
var total = 200;
```

다른 프로그래밍 언어 배경을 가지신 분들이라면 파일 마다 변수의 유효 범위가 다를 것이라고 생각합니다. 하지만 자바스크립트는 기본적으로 변수의 유효 범위가 전역으로 잡히기 때문에 네임스페이스 모듈화 패턴이나 [Require.js](https://requirejs.org/)와 같은 모듈화 라이브러리를 이용하여 모듈화 기능을 구현해왔습니다.

이제는 프로그래밍 패턴이나 별도의 모듈화 라이브러리를 사용하지 않고도 자바스크립트 언어 자체에서 모듈화를 지원합니다.

## import & export 기본 문법

모듈화 기능을 사용하기 위한 기본적인 import, export 문법을 보겠습니다.

먼저 export 문법입니다.

```js
export 변수, 함수
```

다른 파일에서 가져다 쓸 변수나 함수의 앞에 `export` 라는 키워드를 붙입니다. 익스포트된 파일은 임포트로 불러와 사용할 수 있습니다.

import 문법을 보겠습니다.

```js
import { 불러올 변수 또는 함수 이름 } from '파일 경로';
```

익스포트된 변수나 함수를 `{}`에 선언한 뒤 해당 파일이 있는 경로를 적어줍니다.

## import & export 기본 예제

배운 문법을 바탕으로 간단한 예제를 살펴보겠습니다.

```js
// math.js
export var pi = 3.14;
```

```js
// app.js
import { pi } from './math.js';

console.log(pi); // 3.14
```

위 코드는 `math.js`라는 파일에서 `pi`를 익스포트하고 `app.js` 파일에서 임포트하여 콘솔에 출력하는 코드입니다. 만약 변수가 아니라 함수를 내보내고 싶다면 아래와 같이 코딩할 수 있습니다.

```js {3-5}
// math.js
export var pi = 3.14;
export function sum(a, b) {
  return a + b;
}
```

```js
// app.js
import { sum } from './math.js';

sum(10, 20); // 30
```

위 코드는 `math.js`에 두 숫자의 합을 구하는 `sum()` 함수를 익스포트 한 뒤 `app.js`에서 임포트하여 사용한 코드입니다.

## 브라우저 지원 범위

ES6의 기본적인 문법들이 최신 브라우저에서 지원되는데 반해 import, export는 아직 보조 도구가 있어야만 사용할 수 있습니다. 브라우저 지원 범위는 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Browser_compatibility)를 확인하세요.

가급적 실무 코드에서 사용하실 때는 [웹팩(Webpack)](https://webpack.js.org/)과 같은 모듈 번들러를 이용하여 구현하는 것을 추천드립니다.