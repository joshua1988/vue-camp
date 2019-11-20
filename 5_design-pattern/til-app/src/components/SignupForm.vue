<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">가입</button>
  </form>
</template>

<script>
import { registerUser } from "../api/index";

function initData() {
  return {
    username: "",
    password: "",
    nickname: ""
    // developer: {
    //   name: "",
    //   age: ""
    // }
  };
}

export default {
  data() {
    return initData();
  },
  methods: {
    async submitForm() {
      // this.developer.age = 10;
      // this.$set(this.developer, 'age', 0);
      const data = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };
      const response = await registerUser(data);
      console.log(response.data);
      this.$router.push("/login");
      // this.$router.push({
      //   path: '/login',
      //   name: '',
      //   query: {},
      // })
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    }
  }
};
</script>

<style></style>
