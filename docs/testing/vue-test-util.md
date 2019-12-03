---
title: Vue Test Utils
---

# Vue Test Utils

뷰 테스트 유틸([Vue Test Utils](https://vue-test-utils.vuejs.org/))은 코어 팀 멤버가 제작한 테스팅 보조 라이브러리입니다. 제스트 뿐만 아니라 다른 테스트 도구도 사용할 수 있습니다.

## 라이브러리 설치

최신 뷰 CLI를 이용하여 프로젝트를 구성한 경우에는 아래와 같이 **Unit Testing** 옵션을 선택해주면 됩니다.

![뷰 CLI에서 테스트 도구 옵션 선택](../.vuepress/public/images/test/vue-cli-test-setup.png)

### Vue CLI 옵션 선택

**Unit Testing** 옵션을 추가하고 나면 아래와 같이 차례대로 선택합니다.

1. 먼저 코드 정리 도구인 Prettier와 문법 검사 도구인 ESLint를 선택합니다.

![문법 검사 보조 도구와 코드 정리 도구 선택](../.vuepress/public/images/test/cli-option-1.png)

2. 다음은 문법 검사 도구의 실행 시점을 선택합니다. 에디터에서 저장을 누를 때 마다 검사하는 것으로 선택합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-2.png)

3. 단위 테스트 도구는 제스트(Jest)로 선택합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-3.png)

4. 위에서 추가한 ESLint와 프리티어의 설정 내역을 package.json에 추가하지 않고 개별 설정 파일에 관리합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-4.png)


## 레거시 뷰 CLI(2.x) 프로젝트에서의 라이브러리 설치

아래의 명령어로 뷰 테스트 유틸 라이브러리를 설치합니다.

```bash
npm install jest @vue/test-utils vue-jest babel-jest --save-dev
```

위 명령어로 `vue test util`, `jest`, `vue-jest`, `babel-jest` 4개의 라이브러리가 설치됩니다.

### 패키지 JSON 설정

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
JSON 파일이므로 복붙할 때 주석은 제거해주세요.
:::

이제 다음 챕터에서 간단한 테스트 코드를 작성해보겠습니다.
