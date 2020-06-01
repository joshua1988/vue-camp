<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">패스워드:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">닉네임:</label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">가입</button>
  </form>
</template>

<script>
import { signupUser } from "../api/index";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };
      signupUser(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("A", error);
        });
    }
  }
};
</script>

<style></style>
