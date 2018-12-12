---
title: jQuery to Vue
---

# 제이쿼리에서 뷰 사고 방식으로 전환하기

## 뷰 개발자가 마주하는 현실

제이쿼리(jQuery)는 현재까지도 많은 기업들이 사용하고 있는 자바스크립트 라이브러리입니다. 아마도 뷰를 배우고 나면 가장 먼저 부딪히는 일들이 제이쿼리로 제작된 애플리케이션의 기능을 수정해야 하는 일 일겁니다.

::: tip
jQuery는 DOM을 쉽게 조작하기 위한 라이브러리입니다.
:::

## 제이쿼리와 뷰의 차이점

제이쿼리와 뷰의 가장 큰 차이점은 화면 요소를 직접 접근하느냐 그렇지 않느냐입니다. 더 쉽게 이해하기 위해 두 라이브러리의 DOM 접근 방법을 살펴보겠습니다. HTML 코드는 아래와 같이 간단한 버튼 태그를 사용하겠습니다.

```html
<button>click me</button>
```

### 제이쿼리의 버튼 태그 접근

제이쿼리는 특정 태그를 접근하기 일반적으로 태그에 id 속성을 부여하고 제이쿼리 선택자($)를 활용합니다.

```html
<button id="btn">click me</button>
```

```js
$('#btn');
```

위 코드는 btn 아이디를 가지는 DOM을 접근하는 코드입니다.

### 뷰의 버튼 태그 접근

이번엔 뷰입니다. 뷰로 특정 태그로 접근하려면 ref 속성을 활용합니다. 위의 버튼 태그에 ref 속성을 부여하고 접근해보겠습니다.

```html
<button ref="btn">click me</button>
```

```js
this.$refs.btn
```

이처럼 바로 접근하고 싶은 태그에 ref 속성을 지정하여 사용합니다.

## 제이쿼리와 뷰를 같이 쓸 때 주의할 점

보통 뷰를 배우시고 나면 기존의 제이쿼리 기반 시스템을 개편하거나 새로 서비스를 만드는 경우가 많습니다. 여기서 전자의 비율이 상당히 높습니다. 그러면 제이쿼리 기반의 코드, 플러그인 라이브러리 사용시에 주의할 점을 알아보겠습니다. 주의할 점은 바로 뷰의 인스턴스 라이프 사이클입니다.

뷰의 라이프 사이클이란 뷰의 인스턴스가 생성되고 소멸되기까지의 과정입니다. 그리고 라이프 사이클 훅이라는 게 있는데 주로 사용되는 건 아래와 같습니다.

- created
- beforeMount
- mounted

여기서 제이쿼리의 선택자로 HTML 태그를 접근할 수 있는 시점은 mounted 단계입니다. 코드로 예를 들어보겠습니다.

```html
<template>
  <div>
    <button id="btn">click me</button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $('#btn').click(function() {
      alert('hi');
    });
  }
}
</script>
```

위 코드는 뷰의 싱글 파일 컴포넌트(vue 파일 확장자) 코드 구조에서 제이쿼리를 함께 사용하는 모습입니다. `<template>` 안에 HTML 태그가 있으니 제이쿼리로 항상 접근할 수 있을 것 같지만 실제로는 그렇지 않습니다. 왜냐하면 `<template>`은 실제 돔으로 변환되기 전의 Virtual DOM 상태이기 때문에 적절한 라이프 사이클 훅에서 접근하지 않으면 접근할 수 없기 때문입니다.

예를 들어, 위의 코드는 버튼을 클릭했을 때 hi라는 경고창을 띄우지만 아래의 코드는 아무런 반응이 없습니다.

```html
<template>
  <div>
    <button id="btn">click me</button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  created() {
    $('#btn').click(function() {
      alert('hi');
    });
  }
}
</script>
```