<template>
  <div class="form-wrapper">
    <h1>Login</h1>
    <form @submit.prevent="submitForm" class="form">
      <div>
        <label for="username">ID: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">PW: </label>
        <input type="text" id="password" v-model="password">
      </div>
      <button class="btn">login</button>
    </form>
    <p class="log">
      {{ logMessage }}
    </p>
  </div>
</template>

<script>
import bus from '../utils/bus.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      if (!this.username || !this.password) {
        alert('Fill in the account information');
        return;
      }
      try {
        const response = await this.$store.dispatch('LOGIN', {
          username: this.username,
          password: this.password,
        });
        console.log(response);
        bus.$emit('show:toast', response.data.message);
        this.$router.push('/main');
        this.initForm();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
  created() {
    this.username = 'test@abc.com';
    this.password = '12341234';
  }
}
</script>

<style scoped>
.btn {
  background-color: #3fc1c9;
  color: white;
}
</style>
