<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm" class="form">
      <div>
        <label for="username">ID: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">PW: </label>
        <input type="text" id="password" v-model="password">
      </div>
      <button>login</button>
    </form>
    <div>
      {{ logMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      if (!this.username || !this.password) {
        alert('Fill in the account information');
        return;
      }
      try {
        const response = await this.$store.dispatch('LOGIN', {
          username: this.username,
          password: this.password,
        });
        console.log(response);
        this.logMessage = response.data.message;
        this.initForm();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
  created() {
    this.username = 'test@abc.com';
    this.password = '1234';
  }
}
</script>

<style>

</style>
