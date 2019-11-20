<template>
  <div>
    <!-- TODO: BarChart 컴포넌트화 -->
    <bar-chart v-bind:chartData="barChartData"></bar-chart>
    <!-- TODO: LineChart 컴포넌트화: Getting Started에 코드 있음-->
    <!-- NOTE: vim, vue와 같은 단축키 활용해보세요..! ES6 문법도..! -->
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      barChartData: [],
      num: 100,
    };
  },
  methods: {
    fetchChartData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var result = [12, 19, 3, 5, 2, 3];
          resolve(result);
        }, 3000);
      });
    }
  },
  created() {
    this.fetchChartData().then(data => {
      // console.log("받아왔음");
      this.barChartData = data;
    });
  },
  beforeMount() {
    // this.logText();
    console.log(this);
  }

  // beforeMount() {
  //   `<div>
  //     <canvas id="myChart" width="400" height="400"></canvas>
  //   </div>`
  //   document.querySelector('canvas')
  //   $('canvas');
  // },
  // mounted() {
  //   <div>
  //     <canvas id="myChart" width="400" height="400"></canvas>
  //   </div>
  // },
  // updated() {},
  // beforeDestroy() {}
};
</script>

<style></style>
