<template>
  <form>
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
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    submitForm() {}
  }
};
</script>

<style></style>
