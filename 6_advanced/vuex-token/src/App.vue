<template>
  <div class="main-container">
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
@import './assets/font/typicons.min.css';

.form {
  margin: 0.5rem 0.2rem;
}
a {
  color: #364f6b;
  text-decoration: none;
}
a:hover {
  color: #3fc1c9;
}
a.router-link-exact-active {
  color: #fc5185;
}
</style>
