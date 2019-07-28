<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
    <toast-popup></toast-popup>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import ToastPopup from './components/common/ToastPopup.vue';

export default {
  components: {
    AppHeader,
    ToastPopup,
    AppFooter,
  },
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
