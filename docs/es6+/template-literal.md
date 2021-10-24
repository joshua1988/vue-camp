---
title: Template Literal
---

# 템플릿 리터럴(Template Literal)

템플릿 리터럴이란 자바스크립트에서 문자열을 입력하는 방식입니다. 기존에는 `var str = 'Hello ES6'`와 같은 방식으로 사용하였으나 ES6에서는 백틱(back-tick)이라는 기호(\`)를 사용하여 정의합니다. 

```js
const str = `Hello ES6`;
```

위와 같이 백틱을 이용하게 되면 여러 줄에 걸쳐 문자열을 정의할 수도 있고, 자바스크립트의 변수를 문자열 안에 바로 연결할 수 있는 이점이 생깁니다.

## 여러 줄에 걸쳐 문자열 선언하기

기존 자바스크립트의 문자열 선언 방식인 작은 따옴표(')의 문제점은 아래와 같았습니다.

```js
var str = 'Template literals are string literals allowing embedded expressions. \n' + 
'You can use multi-line strings and string interpolation features with them. \n' + 
'They were called "template strings" in prior editions of the ES2015 specification.';
```

작은 따옴표를 이용하여 긴 문자열을 선언하게 되면 자동으로 개행이 되지 않기 때문에 라인 브레이커(line breaker)인 `\n`를 개행할 곳 중간 중간에 추가해야 했습니다. 이렇게 되면 문장이 길면 길수록 `+`와 `\n`를 계속 추가해줘야 하는 번거로움이 생깁니다.

백틱을 이용해서 문자열을 선언하게 되면 위와 같이 개행할 필요가 없습니다.

```js
const str = `Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.
They were called "template strings" in prior editions of the ES2015 specification.`;
```

그럼 뷰에서는 위의 문법을 어떻게 적용할 수 있을까요? CDN 방식으로 뷰를 적용할 때 컴포넌트의 template 속성에 적용하면 좋습니다. 아래와 같이 말입니다.

```js
Vue.component('my-cmp', {
  template: `
    <div>
      <h1>My Component</h1>
      <p>back-tick is useful</p>
    </div>
  `
});
```

## 문자열 중간에 변수 바로 대입하기

기존 문자열 정의 방식에서 또 번거로웠던 부분은 바로 자바스크립트 변수 값을 문자열과 함께 사용하는 부분이었습니다.

```js
var language = 'Javascript';
var expression = 'I love ' + language + '!';
console.log(expression); // I love Javascript!
```

위와 같이 문자열에 특정 변수의 값을 함께 사용하려면 `+`를 이용하여 문자열 중간에 해당 변수를 연결해줘야 했습니다.

ES6에서는 템플릿 리터럴을 이용하면 아래와 같이 간편하게 문자열과 변수를 함께 사용할 수 있습니다.

```js
var language = 'Javascript';
var expression = `I love ${language}!`;
console.log(expression); // I love Javascript!
```

`${}`를 이용하면 위와 같이 변수의 값을 대입할 수 있을 뿐만 아니라 간단한 연산도 할 수 있습니다.

```js
var language = 'Javascript';
var expression = `I love ${language.split('').reverse().join('')}!`;
console.log(expression); // I love tpircsavaJ!
```

위 코드는 `language`의 문자열 순서를 역으로 바꾸는 코드입니다.