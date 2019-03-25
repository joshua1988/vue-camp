<template>
  <div>
    <app-header v-bind:username="user"></app-header>
    <app-content v-on:login1="setUser"></app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      user: '',
    }
  },
  methods: {
    setUser(value) {
      this.user = value;
    }
  }
}
</script>

<style>

</style>
