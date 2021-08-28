<template>
  <div class="w-full max-w-xs mx-auto pt-32">
    <form v-on:submit.prevent="loginUser" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input 
          v-model="username" 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input 
          v-model="password"
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button 
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
</template>

<script>
// 가져온 jQuery 스크립트 파일을 아래에 옮겨서
// 작성해주세요.

// v-model, methods, mounted
export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginUser: function() {
      // event.preventDefault();
      console.log(this.username, this.password);

      $.ajax({
          url: 'https://jsonplaceholder.typicode.com/users/',
          method: 'POST',
          dataType: 'json',
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
    }
  }
}
</script>

<style>

</style>
