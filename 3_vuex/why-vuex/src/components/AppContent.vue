<template>
  <div>
    <login-form v-on:login="passUser"></login-form>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  methods: {
    passUser(value) {
      console.log('받음', value);
      this.$emit('login1', value);
    }
  }
}
</script>

<style>

</style>
