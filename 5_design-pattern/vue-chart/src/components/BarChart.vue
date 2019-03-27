<template>
  <canvas id="myChart1" width="400" height="400" ref="barChart"></canvas>
</template>

<script>
export default {
    // #1 일반적인 props 선언
  props: ['chartdata', 'type'],
  watch: {
      // #1 첫 번째 문법
    //   chartdata() {
    //       this.renderChart();
    //   },
      // #2 두 번째 문법
      chartdata: {
          handler() {
              this.renderChart();
          },
        //   immediate: true,
      },
  },
  methods: {
    renderChart() {
        // debugger;
        var ctx = this.$refs.barChart.getContext("2d");
        var myChart = new this.$_Chart(ctx, {
        type: this.type,
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: this.chartdata,
        },
        options: {
            //   onClick: function(value) {
            //       this.$emit('deliver', value);
            //   },
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
  mounted() {
    // 차트 그리기
    this.renderChart();
  }
};
</script>

<style>
</style>
