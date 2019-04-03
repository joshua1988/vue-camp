<template>
  <div>
    <form>
      <div>
        <label for="username">ID : </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">PW : </label>
        <input id="password" type="password" v-model="password">
      </div>
      <div>
        <label for="nickname">NICKNAME : </label>
        <input id="nickname" type="text" v-model="nickname">
      </div>
      <button @click.prevent="signupUser">sign up</button>
      <button @click.prevent="loginUser">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
    signupUser() {
      // axios.post('url', data);
      axios.post('http://localhost:3000/signup', {
        username: this.username,
        nickname: this.nickname,
        password: this.password,
      })
      .then((response) => {
        console.log(response.data);
        this.initForm();
      })
      .catch((error) => {
        console.log(error);
      });
    },
    loginUser() {
      axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        const token = response.data.token;
        this.$store.commit('setToken', token);
      })
      .catch(error => console.log(error));
    },
    initForm() {
      this.username = '';
      this.nickname = '';
      this.password = '';
    }
  }
}
</script>

<style>

</style>
