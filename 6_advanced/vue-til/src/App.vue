<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
    <toast-popup></toast-popup>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import ToastPopup from './components/common/ToastPopup.vue';

export default {
  components: {
    AppHeader,
    ToastPopup,
  },
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
