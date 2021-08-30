---
title: D3 with Vue
---

# 뷰에서 D3 사용하기

D3는 뷰와 유사한 작업을 수행하기 때문에 결합하려고 하면 논리 일관성을 유지하기가 어려울 수 있습니다. D3는 수학적 계산을 수행하여 데이터 시각화에 필요한 데이터를 생성하고 뷰는 반응성을 수용하면서 돔을 조작하여 이 충돌을 해결할 수 있습니다. 더 쉽게 이해할 수 있도록 예제를 통해 살펴 보겠습니다.


## 일반적인 D3
앞의 챕터에서 진행한 예제를 그대로 가져와서 뷰에서 작성해보겠습니다.

**진행예정**



## 뷰에서의 D3
`select`, `append` 와 같은 D3의 돔 접근 함수는 뷰의 렌더링(rendering) 영역과 겹쳐서 혼란 스럽습니다. 이를 해결 하기위해 렌더링 영역은 뷰 템플릿(template)에서 SVG 마크업으로 작성하고 데이터 시각화를 위한 수학적 연산에만 D3 유틸 함수를 사용할 수 있습니다.

**코드**

[실행해보기](https://codesandbox.io/s/vuecamp-d3withvue-example-d3-with-vue-lhygp)

```html
<!-- VueLineChart.vue -->
<template>
    <svg :width="width" :height="height">
        <path fill="none" stroke="#76BF8A" stroke-width="3" :d="path"></path>
         <g
                class="xAxis"
                :transform="`translate(0, ${height - margin.bottom})`"
                fill="none"
                font-size="10"
                font-family="sans-serif"
                text-anchor="middle"
            >
            <path class="doamin" stroke="currentColor" :d="`M${x(xTicks[0])},0H${x(xTicks[xTicks.length - 1])}`"></path>
            <g
                v-for="(v, i) in xTicks"
                :key="`xAxis-tick-${i}`"
                class="tick"
                opacity="1"
                :transform="`translate(${x(v)},0)`"
            >
            
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">
                    {{ v }}
                </text>
            </g>
        </g>
        <g
            class="yAxis"
            :transform="`translate(${margin.left}, 0)`"
            fill="none"
            font-size="10"
            font-family="sans-serif"
            text-anchor="end"
        >
            <path class="doamin" stroke="currentColor" :d="`M-6,${y(yTicks[0])}H0V${y(yTicks[yTicks.length - 1])}H-6`"></path>
            <g
                v-for="(v, i) in yTicks"
                :key="`xAxis-tick-${i}`"
                class="tick"
                opacity="1"
                :transform="`translate(0,${y(v)})`"
            >
                <line stroke="currentColor" x2="-6"></line>
                <text fill="currentColor" x="-9" dy="0.32em">
                    {{ v }}
                </text>
            </g>
        </g>
    </svg>
</template>

<script>
import * as d3 from 'd3'
export default {
    data () {
        return {
            data: [90, 72, 75, 25, 10, 92],
            width: 500,
            height: 300,
            margin: {
                top: 20,
                right: 20,
                bottom: 40,
                left: 40
            }
        }
    },
    computed: {
        yTicks () {
            return this.y.ticks()
        },
        xTicks () {
            return this.x.ticks(this.data.length)
        },
        path () {
            return this.line(this.data)
        },
        line () {
            return d3.line()
                .x((d, i) => this.x(i))
                .y(d => this.y(d))
        },
        x () {
            return d3.scaleLinear()
                .range([this.margin.left, this.width - this.margin.right])
                .domain(d3.extent(this.data, (d, i) => i))
        },
        y () {
            return d3.scaleLinear()
                .range([this.height - this.margin.bottom, this.margin.top])
                .domain([0, 100])
        }
    }
}
</script>
```


위의 코드는 뷰의 가상 돔을 그대로 활용하고 계산과 렌더링(rendering)이 명확하게 분리되어 있기 때문에 구성요소를 더 쉽게 이해할 수 있습니다.


