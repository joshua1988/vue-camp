<template>
  <div>
    <button v-on:click.prevent="loginUser">login</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginUser() {
      let username = 'test@abc.com';
      // this.$emit('login', username);
      this.$store.commit('saveUsername', username);
    }
  }
}
</script>

<style scoped>
form {
  margin: 0.5rem;
}
</style>
