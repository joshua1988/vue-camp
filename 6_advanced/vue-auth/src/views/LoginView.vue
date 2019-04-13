<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email: </label>
        <input id="email" type="text" v-model="email">
      </div>
      <div>
        <label for="password">Password: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
    <div>
      <p>{{ logMessage }}</p>
    </div>
    <div>
      <button @click="testApi">test post api</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { fetchPosts } from '../api/index.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    testApi() {
      fetchPosts()
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
    async submitForm() {
      try {
        const url = 'http://localhost:3000/login';
        const response = await axios.post(url, {
          username: this.email,
          password: this.password,
        });
        // console.log(response.data.token);
        this.$store.commit('setToken', response.data.token);
        this.logMessage = response.data.message;
        this.initForm();
        // this.$router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
  }
}
</script>

<style>

</style>
