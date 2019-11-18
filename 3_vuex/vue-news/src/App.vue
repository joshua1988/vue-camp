<template>
  <div>
    <app-header></app-header>
    <!-- <AppHeader></AppHeader>
    <AppHeader/> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style>
@import './assets/css/common.css';
</style>