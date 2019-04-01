<template>
  <div>
    <div>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/main">Main</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.form {
  margin: 0.5rem 0.2rem;
}
</style>
