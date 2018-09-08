<template>
  <div class="min-h-screen bg-grey-darker">
    <div class="w-full max-w-xs mx-auto mt-20" style="padding-top: 10rem;">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username"
            v-model="username">
          <small class="text-red-light italic">{{ nameValidation }}</small>
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************"
            v-model="password">
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-grey text-xs">
        ©2018 Captain Pangyo. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/',
        method: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          name: this.username,
          password: this.password
        })
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      this.username = '';
      this.password = '';
    }
  },
  computed: {
    nameValidation() {
      return this.username.length > 5 ? `` : `Length must be over 5. Current size is ${this.username.length}`;
    }
  }
}
</script>

<style src="./assets/css/app.css"/>