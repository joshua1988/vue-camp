<template>
  <div>
    <bar-chart v-bind:chartdata="barChartData"></bar-chart>
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
	data() {
		return {
			barChartData: [],
		};
	},
	methods: {
		fetchChartData() {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					console.log('3초 뒤 실행');
					let result = [
						{
							label: '# of Votes',
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(75, 192, 192, 0.2)',
								'rgba(153, 102, 255, 0.2)',
								'rgba(255, 159, 64, 0.2)',
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)',
							],
							borderWidth: 1,
						},
					];
					resolve(result);
				}, 3000);
			});
		},
	},
	created() {
		this.fetchChartData()
			.then(data => {
				console.log(data);
				this.barChartData = data;
			})
			.catch(error => console.log(error));
	},
};
</script>

<style>
</style>
