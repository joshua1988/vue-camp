<template>
  <div>
    <h1>Bar Chart</h1>
    <bar-chart v-bind:chartdata="fetchedData" type="bar"></bar-chart>
    <h1>Line Chart</h1>
    <line-chart></line-chart>
    <h1>Watch</h1>
    <watch></watch>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
import Watch from './components/Watch.vue';

let chartData = [
  {
    label: "# of Votes",
    data: [12, 19, 3, 5, 2, 3],
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
];

export default {
  components: {
    BarChart,
    LineChart,
    Watch,
  },
  data() {
    return {
      fetchedData: null
    }
  },
  methods: {
    fetchChartData() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(chartData);
        }, 2000);
      });
    }  
  },
  created() {
    this.fetchChartData()
      .then((result) => {
        console.log(result);
        this.fetchedData = result;
      });

    // this.fetchedData = [
    //   {
    //     label: "# of Votes",
    //     data: [12, 19, 3, 5, 2, 3],
    //     backgroundColor: [
    //       "rgba(255, 99, 132, 0.2)",
    //       "rgba(54, 162, 235, 0.2)",
    //       "rgba(255, 206, 86, 0.2)",
    //       "rgba(75, 192, 192, 0.2)",
    //       "rgba(153, 102, 255, 0.2)",
    //       "rgba(255, 159, 64, 0.2)"
    //     ],
    //     borderColor: [
    //       "rgba(255, 99, 132, 1)",
    //       "rgba(54, 162, 235, 1)",
    //       "rgba(255, 206, 86, 1)",
    //       "rgba(75, 192, 192, 1)",
    //       "rgba(153, 102, 255, 1)",
    //       "rgba(255, 159, 64, 1)"
    //     ],
    //     borderWidth: 1
    //   }
    // ]
  }
}
</script>