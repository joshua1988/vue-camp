<template>
  <div>
    <canvas ref="myChart" id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  props: ["chartData"],
  watch: {
    chartData() {
      this.renderChart();
    }
  },
  methods: {
    renderChart() {
      // console.log(document.getElementById("myChart"));
      // console.log(this.$refs.myChart);
      var ctx = this.$refs.myChart.getContext("2d");
      var myChart = new Chart(ctx, {
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
        },
        events: {
          // clickTooltip() {
          //   this.$emit('click:tootip')
          // }
        }
      });
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>

<style></style>
