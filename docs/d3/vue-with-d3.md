---
title: D3 with Vue
---

# 뷰에서 D3 사용하기

D3는 뷰와 유사한 작업을 수행하기 때문에 결합하려고 하면 논리 일관성을 유지하기가 어려울 수 있습니다.
D3는 수학적 계산을 수행하여 데이터 시각화에 필요한 데이터를 생성하고 뷰는 반응성을 수용하면서 돔을 조작하여 이 충돌을 해결할 수 있습니다.
더 쉽게 이해할 수 있도록 예제를 통해 살펴보겠습니다.

## 일방적인 D3 사용

앞의 챕터에서 진행한 예제를 그대로 가져와서 뷰에서 작성해보겠습니다.

[실행해보기](https://codesandbox.io/s/vuecamp-d3withvue1-m9se1?file=/src/components/VueLineChart.vue)

```html{3,16,21}
<!-- VueLineChart.vue -->
<template>
  <svg ref="line"></svg>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {
      data: [90, 72, 75, 25, 10, 92],
    };
  },
  mounted() {
    const svg = d3
      .select(this.$refs.line)
      .attr("width", 500)
      .attr("height", 300);

    svg
      .append("path")
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", "#76BF8A")
      .attr("stroke-width", 3)
      .attr("d", this.line);
  },
  computed: {
    line() {
      return d3
        .line()
        .x((d, i) => this.xScale(i))
        .y((d) => this.ySclae(d));
    },
    xScale() {
      return d3
        .scaleLinear()
        .range([20, 480])
        .domain(d3.extent(this.data, (d, i) => i));
    },
    ySclae() {
      return d3.scaleLinear().range([280, 20]).domain([0, 100]);
    },
  },
};
</script>
```

위 코드는 `select`, `append`, `datum` 와 같은 D3의 Selections API를 사용해서 돔에 접근하고
수정해서 데이터를 돔에 결합합니다.
이는 변경된 데이터를 추적하여 반응형으로 동작하는 뷰의 데이터 바인딩, 렌더링(rendering) 영역과 겹쳐서 혼란스럽습니다.

## 조화로운 D3 사용

앞의 문제를 해결하기 위해 데이터 바인딩과 렌더링 영역은 뷰 템플릿(template)에서 담당하고 데이터 시각화를 위한
수학적 연산에만 D3 유틸 함수를 사용할 수 있습니다.

먼저 이 예제에서는 `mounted` 훅에 작성된 데이터를 `path` 요소에 결합시키는 코드를 뷰 템플릿에서 작성하기 위해
`computed` 속성에 다음 코드를 추가합니다.

```js
    // computed
    .
    .
    pathData() {
      return this.line(this.data);
    },
```

이제 `mounted` 훅을 지우고 뷰 템플릿에서 데이터 바인딩과 렌더링 요소를 마크업으로 작성해보겠습니다.

```html
<template>
  <svg :width="width" :height="height">
    <path fill="none" stroke="#76BF8A" stroke-width="3" :d="pathData"></path>
  </svg>
</template>
.
.
```

* 전체 코드

[실행해보기](https://codesandbox.io/s/vuecamp-d3withvue2-lhygp?file=/src/components/VueLineChart.vue)

```html
<template>
  <svg :width="width" :height="height">
    <path fill="none" stroke="#76BF8A" stroke-width="3" :d="path"></path>
  </svg>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {
      data: [90, 72, 75, 25, 10, 92],
      width: 500,
      height: 300,
      padding: 20,
    };
  },
  computed: {
    path() {
      return this.line(this.data);
    },
    line() {
      return d3
        .line()
        .x((d, i) => this.xScale(i))
        .y((d) => this.ySclae(d));
    },
    xScale() {
      return d3
        .scaleLinear()
        .range([this.padding, this.width - this.padding])
        .domain(d3.extent(this.data, (d, i) => i));
    },
    ySclae() {
      return d3.scaleLinear().range([this.height - this.padding, this.padding]).domain([0, 100]);
    },
  },
};
</script>
```

변경된 코드는 뷰의 가상 돔의 특성을 그대로 활용하고 계산과 렌더링(rendering) 영역이
명확하게 분리되어 있기 때문에 구성요소를 더 쉽게 이해할 수 있습니다.
