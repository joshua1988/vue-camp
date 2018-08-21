<template>
  <div id="app">
    <div class="dashboard">
      <div class="flex-container column">
        <div class="item one" @click="clickChart('1')" style="transform: translate(-22.4%,-33.5%) scale(0.33)">
          <BarChart></BarChart>
        </div>
        <div class="item two" @click="clickChart('2')" style="transform: translate(-22.4%,0.5%) scale(0.33)">
          <LineChart></LineChart>
        </div>
        <div class="item three" @click="clickChart('3')" style="transform: translate(-22.4%,34.5%) scale(0.33)">
          <BarChart></BarChart>
        </div>
        <div class="item four active" @click="clickChart('4')" style="transform: translate(43.7%, 0) scale(1)">
          <LineChart></LineChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'

export default {
  name: 'app',
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.initOrder()
  },
  methods: {
    resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    initOrder() {
      this.items = document.querySelectorAll('.flex-container .item')
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector('.flex-container .active')
      let activeIndex = activeItem.dataset.order
      let clickItem = this.items[clickIndex - 1]
      if (activeIndex === clickIndex) {
        return
      }
      activeItem.classList.remove('active')
      clickItem.classList.add('active')
      this.setStyle(clickItem, activeItem)
    },
    setStyle(el1, el2) {
      let transform1 = el1.style.transform
      let transform2 = el2.style.transform
      el1.style.transform = transform2
      el2.style.transform = transform1
    }
  },
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style>
body, #app {
  position: absolute;
  height: 100%;
  width: 100%;
}
.dashboard {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  /* padding-top: 5%; */
    /* background-size 100% 100% */
}
.flex-container.column {
  position: relative;
  height: 90%;
  width: 90%;
  overflow: hidden;
  margin: auto;
  box-sizing: content-box;
}
.item {
  padding: 0px;
  margin: 0px;
  width: 68%;
  height: 100%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
.point,.multipleColumn,.columnChart,.line {
  height: 100% !important;
  width: 100% !important;
  background: none !important;
}
.active {
  height: 100%;
  width: 69%;
  margin-left: 10px;
  line-height: 300px;
}
</style>
