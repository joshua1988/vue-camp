<template>
  <div class="form-container">
    <div class="form-wrapper">
      <h1>Login</h1>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID: </label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="password-container">
          <label for="password">PW: </label>
          <input type="text" id="password" v-model="password">
        </div>
        <button class="btn">login</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
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
        this.$router.push('/main');
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

<style scoped>
.form-container {
  padding: 120px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-wrapper {
  border: 1px solid #dae1e7;
  border-radius: 30px;
  padding: 1rem 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
}
.form {
  width: 360px;
  height: 290px;
  padding: 24px 20px;
}
.form label {
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
  color: #364f6b;
  font-size: 90%;
}
.form input {
  font-family: inherit;
  font-size: 100%;
  width: 100%;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}
.password-container {
  margin-bottom: 0.6rem;
}
.btn {
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  border-radius: .25rem;
  border: 0 solid #dae1e7;
  background-color: #3fc1c9;
  color: white;
}
.log {
  color: #ff4057;
  font-size: 1rem;
  text-align: center;
}
</style>
