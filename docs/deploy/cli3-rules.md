---
title: CLI v3.x Rules
---

# 최신 뷰 CLI의 빌드 환경 규칙

이번 챕터에서는 뷰 CLI 버전 3 이상에서만 적용되는 몇 가지 빌드 환경 규칙을 알아보겠습니다.

## 애플리케이션 모드

뷰 CLI 3에서는 다음과 같이 크게 3가지 모드가 있습니다.

- `development` : 프로토타이핑 및 개발 용도. `npm run serve` 명령어로 실행할 때의 모드
- `production` : 상용화 및 배포 용도. `npm run build` 명령어로 실행할 때의 모드
- `test` : 테스트 용도. `npm run test:unit` 명령어로 실행할 때의 모드

위의 모드는 `NODE_ENV` 변수 값과도 연관이 있습니다. 개발 모드로 실행한 경우에는 자동으로 `NODE_ENV` 값이 `development`로 설정이 되고, 배포 모드로 실행한 경우에는 `production`으로 설정됩니다.

## 애플리케이션 모드에 따라 뷰 CLI가 해주는 일?

뷰 CLI로 생성하여 애플리케이션을 제작하게 되면 기본적으로 웹팩을 사용합니다. 따라서, 모드에 따라 웹팩의 설정이 달라집니다. 예를 들면, 개발 모드일 때는 웹팩 데브 서버를 실행하기 때문에 빠르게 빌드 하면서 프로토타이핑 해나갈 수 있고 상용 모드일 때는 웹팩으로 빌드된 파일의 이름에 해쉬 값을 붙여 캐싱과 같은 이점을 누릴 수 있습니다.

## 환경 변수 파일 규칙

뷰 CLI 3에서는 프로젝트 루트 폴더에 아래와 같은 규칙으로 환경 변수 파일을 생성할 수 있습니다.

```bash
.env                # 모든 모드에 적용되는 환경 변수 파일
.env.local          # 모든 모드에 적용되나 개인만 사용하는 파일(git에 올라가지 않음)
.env.[mode]         # 특정 모드에 해당하는 환경 변수 파일
.env.[mode].local   # 특정 모드에 해당하지만 개인이 사용하는 파일(git에 올라가지 않음)
```

여기서 말하는 모드는 앞에서 살펴봤던 애플리케이션 모드를 의미합니다. 예를 들어, 상용 버전에 해당하는 환경 변수 파일은 아래와 같습니다.

```bash
.env.production
```

## 환경 변수 파일 적용 순서

아래와 같이 개발 환경인지 배포 환경인지에 따라 여러 개의 환경 변수 파일을 분리할 수도 있습니다.

- .env
- .env.development
- .env.production

```bash
# .env
VUE_APP_URL=https://domain.com
```

```bash
# .env.development
VUE_APP_URL=https://localhost:8080
```

```bash
# .env.production
VUE_APP_URL=https://123.123.123.123:9090
```

이때 배포 모드인 `npm run build` 명령어를 입력하게 되면 `.env.production` 파일의 내용이 가장 높은 우선순위를 갖게 됩니다. 따라서, 애플리케이션에서 사용한 `VUE_APP_URL` 값은 아래와 같이 설정됩니다.

```js
// main.js
console.log(VUE_APP_URL) // https://123.123.123.123:9090
```

위처럼 특정 모드에 해당하는 환경 변수의 파일의 값이 가장 높은 우선순위를 갖게 됩니다.

:::tip
만약 `.env.development`, `.env.production` 등의 파일이 없다면 `.env` 파일에 설정한 값이 최종 값이 됩니다.
:::

## 개발할 때는 로컬 환경 변수를 사용

앞의 규칙들을 인지한 상태에서 팀 공용으로 사용하는 환경 변수 이외에 개인적으로 환경 변수를 설정하여 사용할 수 있습니다.

```bash
.env.development # 팀 공용 환경 변수
.env.development.local # 개인 디버깅 또는 개발용 환경 변수
```

팀 공용으로 사용하는 애플리케이션 설정 값들은 `.env.development` 파일에 관리하고, 개인적으로 로컬 또는 특정 서버 디버깅을 위해 `.env.development.local` 파일에 관리하면 좋습니다.

```bash
# .env.development
VUE_APP_URL=http://internal.server.address:8080
```

```bash
# .env.development.local
VUE_APP_URL=http://localhost:8081
```

위와 같이 활용하는 경우 `.local` 파일은 git에도 올라가지 않기 때문에 편하게 API 엔드포인트(URL)를 바꿔서 사용할 수 있습니다.
