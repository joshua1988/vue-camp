---
title: Environment Variables
---

# 환경 변수 파일을 이용한 옵션 설정

환경 변수 파일이란 애플리케이션이 실행될 때 특정 값을 넘길 수 있는 변수를 의미합니다. 웹 애플리케이션 관점에서는 `.env` 파일에 정의된 변수를 의미하며 미리 정의된 값을 애플리케이션에서 활용하고 싶을 때 사용합니다.

이번 챕터에서는 Vue.js 애플리케이션에서 `.env` 파일을 활용하는 방법에 대해서 알아보겠습니다.

## env 파일

CLI로 생성한 프로젝트로 개발 및 배포를 진행할 때 `.env`라는 환경 변수 파일로 옵션들을 편하게 바꿀 수 있습니다.

```bash
# .env 파일
VUE_APP_LOCAL_URI=http://localhost:8080/
VUE_APP_TEST_SERVER=http://test.com:9090/

clientId=client-test1234
clientServer=server-test1234
```

위에서 설정한 변수들을 가지고 애플리케이션 로직에 활용할수도 있고, 웹팩으로 빌드를 할 때 위 변수의 내용을 반영할수도 있습니다.

예를 들어 아래와 같이 API의 호출 URL 값으로 `.env` 파일에 정의한 `VUE_APP_LOCAL_URI`를 사용할 수 있습니다.

```js
// api/index.js
function fetchUser() {
  return axios.get(`${VUE_APP_LOCAL_URI}users`);
}
```

위와 같이 서비스 코드에서 `.env` 파일에 지정한 변수를 활용하려면 아래와 같이 웹팩에 추가 설정을 해줘야 합니다.

```js
// webpack.config.js
const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

plugins: [
  new webpack.DefinePlugin({
    VUE_APP_LOCAL_URI: JSON.stringify(env.VUE_APP_LOCAL_URI),
  }),
],
```

## Vue CLI 3.x 버전의 환경 변수 파일 접근

최신 뷰 CLI에서는 위와 같이 웹팩의 DefinePlugin을 설정하지 않아도 환경 변수를 쉽게 접근할 수 있습니다. 환경 변수 파일의 변수 명을 아래와 같은 방식으로 정의하면 됩니다.

```bash
VUE_APP_NUM=10
VUE_APP_STR=hi
```

변수 명 앞에 항상 `VUE_APP_` 를 붙여주면 Vue CLI에서 내부적으로 웹팩 DefinePlugin을 활용하여 클라이언트 웹 자원에서 접근할 수 있게 설정됩니다.

```js
// main.js
import Vue from 'vue';
// ...

console.log(VUE_APP_NUM); // 10

new Vue({
  // ...
})
```

```html
<!-- App.vue -->
<template>
  <!-- ... -->
</template>

<script>
export default {
  created() {
    console.log(VUE_APP_STR); // hi
  }
}
</script>
```

이와 같은 방식으로 아래의 환경 변수들도 사용할 수 있습니다.

- `NODE_ENV` : 애플리케이션 모드를 가리키는 변수 `development`, `production`, `test`
- `BASE_URL` : `vue.config.js` 파일에 정의된 `publicPath`의 값과 동일한 변수

