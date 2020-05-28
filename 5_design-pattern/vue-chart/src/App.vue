<template>
  <div>
    <h1>차트 예제</h1>
    <!-- TODO: 차트 샘플 예제를 그려보세요.. -->
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';

export default {
    components: {
        BarChart,
        LineChart
    },
    // created() {
    //     // this.$nextTick(() => {

    //     // })
    // },
}
</script>

<style>

</style>