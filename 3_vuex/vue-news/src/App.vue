<template>
  <div>
    <header>
      <!-- <router-link to="/login">Login</router-link> | -->
      <!-- <a href="/login">Login</a> -->
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>