---
title: Practical Jest
---

## Jest 문법 소개

```js
test.only(); // watch 모드에서 해당 테스트 케이스만 집중할 수 있음
test.skip(); // 테스트 검증시 해당 테스트 케이스는 스킵
```

## beforeAll()

해당 테스트 파일의 모든 테스트 케이스가 돌기 전에 실행할 로직을 넣는 API.
프로미스와 같은 비동기 코드의 동작까지 기다려주기 때문에 서버 실행이나 DB 설정 코드를 넣기에 좋다.
`beforeEach()`와 다른점은 `beforeAll()`은 모든 테스트 케이스가 실행되기 전의 로직이고,
`beforeEach()`는 각 테스트 케이스의 실행 전에 실행할 로직이다.

## expect.any()

특정 타입의 변수인지를 확인할 수 있는 API

```js
expect(response.data.user).toContainEqual({
  name: expect.any(String),
  email: expect.any(String)
})
```

## toHaveLength()

대상 변수의 길이를 체크하는 API

```js
expect(response.data.user).toHaveLength(10)
```