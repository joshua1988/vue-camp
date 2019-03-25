---
title: Vue Test Utils
---

# Vue Test Utils

뷰 테스트 유틸([Vue Test Utils](https://vue-test-utils.vuejs.org/))은 코어 팀 멤버가 제작한 테스팅 보조 라이브러리입니다. Jest 뿐만 아니라 다른 테스트 도구도 사용할 수 있습니다.

## 라이브러리 설치

아래의 명령어로 Vue Test Util 라이브러리를 설치합니다.

```bash
npm install jest @vue/test-utils vue-jest babel-jest --save-dev
```

위 명령어로 vue test util, jest, vue-jest, bable-jest 4개의 라이브러리가 설치됩니다.

## 패키지 JSON 설정

설치하고 나서 `package.json` 파일에 아래의 옵션을 추가합니다.

```json
{
  // ...
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue"
    ],
    "transform": {
      // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest",
      // process js with `babel-jest`
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**"
    ]
  }
}
```

::: danger
복붙할 때 주석은 제거해주세요.
:::

이제 다음 챕터에서 간단한 테스트 코드를 작성해보겠습니다.