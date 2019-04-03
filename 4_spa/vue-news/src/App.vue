<template>
  <div>
    <progress-bar :loading="isLoading"></progress-bar>
    <tool-bar></tool-bar>
    <!-- URL에 따라 컴포넌트가 표시되는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import ToolBar from './components/ToolBar.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ProgressBar,
    ToolBar,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    onProgress() {
      this.isLoading = true;
    },
    offProgress() {
      this.isLoading = false;
    },
  },
  created() {
    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  },
  beforeDestroy() {
    bus.$off('on:progress', this.onProgress);
    bus.$off('off:progress', this.offProgress);
  },
}
</script>

<style>
@import './assets/css/common.css';
</style>
