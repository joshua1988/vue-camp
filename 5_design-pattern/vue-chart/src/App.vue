<template>
  <div>
    <h1>Bar Chart</h1>
    <bar-chart></bar-chart>
    <h1>Line Chart</h1>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  components: {
    BarChart,
    LineChart,
  },
  // created() {
  //   console.log(document.getElementById('myChart'));
  // },
  mounted() {
    // console.log(document.getElementById('myChart'));
  }
}
</script>

<style>

</style>
