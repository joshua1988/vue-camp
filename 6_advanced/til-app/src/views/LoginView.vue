<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">ID:</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">PW:</label>
        <input id="password" type="text" v-model="password" />
      </div>
      <button type="submit">로그인</button>
      <!-- <router-link to="/home">홈 화면</router-link> -->
    </form>
  </div>
</template>

<script>
import { loginUser, fetchPosts } from '../api/index';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async submitForm() {
      // loginUser({
      //   username: this.username,
      //   password: this.password
      // })
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error));
      try {
        const { data } = await loginUser({
          username: this.username,
          password: this.password
        });
        this.$store.commit('setToken', data.token);
        // saveToken();
        localStorage.setItem('til-token', data.token);
        this.$router.push('/home');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
