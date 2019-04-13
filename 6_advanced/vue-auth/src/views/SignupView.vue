<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="email">Email: </label>
        <input id="email" type="text" v-model="email">
      </div>
      <div>
        <label for="password">Password: </label>
        <input id="password" type="text" v-model="password">
      </div>
      <div>
        <label for="nickname">Nickname: </label>
        <input id="nickname" type="text" v-model="nickname">
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// import SignupForm from './components/SignupForm.vue';

export default {
  // components: {
  //   SignupForm: () => import('./components/SignupForm.vue'),
  // },
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
    submitForm() {
      const url = 'http://localhost:3000/signup';
      const data = {
        username: this.email,
        password: this.password,
        nickname: this.nickname,
      };
      axios.post(url, data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }
}
</script>

<style>

</style>
