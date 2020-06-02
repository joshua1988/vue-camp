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
import { loginUser } from '../api/index';

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

      const response = await loginUser();
      console.log(response);
    }
  }
};
</script>

<style></style>
