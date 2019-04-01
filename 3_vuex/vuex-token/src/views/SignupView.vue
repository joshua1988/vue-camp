<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="registerUser" class="form">
      <div>
        <label for="username">ID: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">PW: </label>
        <input type="text" id="password" v-model="password">
      </div>
      <div>
        <label for="nickname">Nickname: </label>
        <input type="text" id="nickname" v-model="nickname">
      </div>
      <button>create</button>
    </form>
    <div>
      {{ logMessage }}
    </div>
  </div>
</template>

<script>
import { signupUser } from '../api';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await signupUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        this.logMessage = 'User is created';
        this.initForm();
      } catch (error) {
        console.log(error);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  }
}
</script>

<style>

</style>
