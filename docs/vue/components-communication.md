---
title: Components Communication
---

# 컴포넌트 통신 방식

뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖습니다. 따라서, 컴포넌트 간에 데이터를 주고 받기 위해선 아래와 같은 규칙을 따라야 합니다.

![뷰 컴포넌트 통신 방식](../.vuepress/public/images/component-communication.png)

- 상위에서 하위로는 데이터를 내려줌, [프롭스 속성](/vue/props.html)
- 하위에서 상위로는 이벤트를 올려줌, [이벤트 발생](/vue/event-emit.html)

각 컴포넌트 통신 방법과 관련된 자세한 설명은 해당 챕터를 참고하세요.