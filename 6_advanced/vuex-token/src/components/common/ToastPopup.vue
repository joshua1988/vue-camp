<template>
  <div class="toast" :class="{ show: open }">
    {{ message }}
  </div>
</template>

<script>
import bus from '../../utils/bus.js';

let toastTimer;

export default {
  data() {
    return {
      open: false,
      message: '',
    }
  },
  computed: {
    toastAnimationClass() {
      return this.open ? 'show' : null;
    },
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.open = true;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(this.hideToast, 2000);
    },
    hideToast() {
      this.open = false;
    },
  },
  created() {
    bus.$on('show:toast', this.showToast);
  },
  beforeDestroy() {
    bus.$off('show:toast', this.showToast);
  },
}
</script>

<style scoped>
.toast {
  visibility: hidden;
  position: fixed;
  width: 400px;
  height: 56px;
  background-color: #22252e;
  border-radius: 2px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  color: white;
  bottom: -60px;
  margin-left: -200px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 300ms ease-out;
}
.toast.show {
  visibility: visible;
  transform: translateY(-60px);
  transition: transform 300ms ease-in-out;
}
</style>
