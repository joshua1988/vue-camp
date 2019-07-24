<template>
  <div>
    <!-- TODO: BarChart, LineChart 제작 -->
    <bar-chart></bar-chart>
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
	created() {
		console.log(this);
	},
};
</script>

<style>
</style>
