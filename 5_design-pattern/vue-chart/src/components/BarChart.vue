<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
// import Chart from 'chart.js'

export default {
  data() {
    return {
      chartData: []
    };
  },
  watch: {
    chartData() {
      // 변경될 때 마다 여기 코드가 실행됩니다..
      this.renderChart();
    }
  },
  methods: {
    // 라인 차트에 적용할 메서드
    fetchLineChartData() {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = [0, 10, 5, 2, 20, 30, 45];
          resolve(result);
        }, 2000);
      });
    },
    fetchChartData() {
      setTimeout(() => {
        this.chartData = [12, 19, 3, 5, 2, 3];
        console.log("받아옴");
      }, 2000);
    },
    renderChart() {
      console.log(this.$refs.barChart);
      var ctx = this.$refs.barChart.getContext("2d");
      new this.$_Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: this.chartData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  },
  created() {
    this.fetchChartData();
  },
  mounted() {
    // this.renderChart();
  }
};
</script>

<style>
</style>