---
title: Snapshots
---

# Snapshot Testing

스냅샷(Snapshot Testing) 테스팅을 하기 위해 먼저 아래 환경을 구성합니다.

```bash
npm install --save-dev jest-serializer-vue
```

```json
// package.json
{
  // ...
  "jest": {
    // ...
    // serializer for snapshots
    "snapshotSerializers": [
      "jest-serializer-vue"
    ]
  }
}
```

그리고 코드는 다음과 같습니다.

```js
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('Hello World Component', () => {
  test('[Snapshot Testing] renders hello world message', () => {
    const { vm } = mount(HelloWorld);
    expect(vm.$el).toMatchSnapshot();
  });
});
```

위 코드를 실행할 때 주의 할점은 명령어를 `npm t -u`로 해야 한다는 점입니다.