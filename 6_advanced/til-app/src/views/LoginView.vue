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
        console.log(data.token);
        this.$store.commit('setToken', data.token);
        const result = await fetchPosts();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
