<template>
  <div id="app">
    <line-chart></line-chart>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue';
import BarChart from './components/BarChart.vue';

export default {
  components: {
    LineChart,
    BarChart,
  }
}
</script>