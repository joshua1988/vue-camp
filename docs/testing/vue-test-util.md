---
title: Vue Test Utils
---

# Vue Test Utils

뷰 테스트 유틸([Vue Test Utils](https://vue-test-utils.vuejs.org/))은 코어 팀 멤버가 제작한 테스팅 보조 라이브러리입니다. 제스트(Jest) 뿐만 아니라 다른 테스트 도구도 사용할 수 있습니다.

## 라이브러리 설치

최신 뷰 CLI를 이용하여 프로젝트를 구성한 경우에는 아래와 같이 **Manually select features** 옵션을 선택해주면 됩니다.

![버전별 프리셋 또는 수동 설정 선택](../.vuepress/public/images/test/vue-cli-preset-setup.png)

뷰 테스트 유틸을 설치하기 위해 **Unit Testing** 옵션을 선택해줍니다.

![뷰 CLI에서 테스트 도구 옵션 선택](../.vuepress/public/images/test/vue-cli-test-setup.png)

:::tip
방향키(↑, ↓)로 항목을 이동할 수 있고 `space` 키로 선택/해제, `enter` 키로 결정할 수 있습니다.
:::

### Vue CLI 옵션 선택

**Unit Testing** 옵션을 추가하고 나면 아래와 같이 차례대로 선택합니다.

1. 먼저 코드 정리 도구인 Prettier와 문법 검사 도구인 ESLint를 선택합니다.

![문법 검사 보조 도구와 코드 정리 도구 선택](../.vuepress/public/images/test/cli-option-1.png)

2. 다음은 문법 검사 도구의 실행 시점을 선택합니다. 에디터에서 저장을 누를 때마다 검사하는 것으로 선택합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-2.png)

3. 단위 테스트 도구는 제스트로 선택합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-3.png)

4. 위에서 추가한 ESLint와 프리티어의 설정 내용을 package.json에 추가하지 않고 개별 설정 파일에 관리합니다.

![문법 검사 보조 도구와 정리 도구 선택](../.vuepress/public/images/test/cli-option-4.png)

## 레거시 뷰 CLI(2.x) 프로젝트에서의 라이브러리 설치

아래의 명령어로 뷰 테스트 유틸 라이브러리를 설치합니다.

```bash
npm install jest @vue/test-utils vue-jest babel-jest --save-dev
```

위 명령어로 `vue test util`, `jest`, `vue-jest`, `babel-jest` 4개의 라이브러리가 설치됩니다.

제스트 환경 설정은 2가지(**패키지 JSON 설정**, **jest.config.js 설정**) 방식으로 상세하게 설정해 볼 수 있습니다.

### 패키지 JSON 설정

설치하고 나서 `package.json` 파일에 아래의 옵션을 추가합니다.

```json
{
  // ...
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
      "vue"
    ],
    "transform": {
      // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
      ".*\\.(vue)$": "vue-jest",
      // `babel-jest`를 사용하여 모든 js 파일(`*.js`)을 처리합니다
      ".*\\.(js)$": "babel-jest",
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
JSON 파일이므로 복사해 붙여넣을 때 주석은 제거해주세요.
:::

### jest.config.js 설정

프로젝트 경로(최상위)에 `jest.config.js` 파일을 생성합니다.

```javascript
module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
    'vue',
  ],
  transform: {
    // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
    '.*\\.(vue)$': 'vue-jest',
    // `babel-jest`를 사용하여 모든 js 파일(`*.js`)을 처리합니다
    '.*\\.(js)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**'
  ],
};
```

::: tip
`jest.config.js` 파일로 분리하면 환경 설정 부분만 모아놓을 수 있어서 유지보수가 쉬워집니다.
자바스크립트(JavaScript) 파일이므로 주석 작성도 가능합니다.
:::

::: details 각 설정에 대한 상세 설명

`moduleFileExtensions`: 모듈에서 사용할 파일 확장명

`transform`: 변환기(transformer, 우측)를 사용하여 지정한 대상(좌측)에 대하여 호환 가능한 버전으로 컴파일. 최신 버전의 문법으로 코딩한다면 하위호환 가능한 버전으로 변환이 필요합니다.

`collectCoverage`: 커버리지(coverage) 정보의 수집 여부. `true`일 경우, 테스트 파일과 케이스가 존재한 상황에서 제스트를 명령어로 실행할 때 `--coverage`를 포함해주면 테스트한 케이스가 얼마나 충족되었는지를 나타내는 지표 보고서를 생성합니다. 결과는 terminal 또는 `프로젝트/lcov-report/index.html`을 열어보면 확인할 수 있습니다.

`collectCoverageFrom`: 커버리지를 수집할 대상을 지정. 위 설정의 경우, **모든 js 파일과 vue 파일**에 대하여 **수집**하며 **node_modules에 존재하는 파일**을 대상에서 **제외**합니다.

이 밖에 설정은 [Configuring Jest](https://jestjs.io/docs/configuration)에서 확인해보세요.
:::

이제 다음 챕터에서 간단한 테스트 코드를 작성해보겠습니다.
