<template>
  <header>
    <div>
      <router-link to="/" class="logo">TIL</router-link>
    </div>
    <div class="navigations">
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Sign Up</router-link>
      <!-- <router-link to="/main">Main</router-link> -->
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}
.logo {
  font-size: 30px;
}
</style>
