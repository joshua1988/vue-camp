<template>
  <div>
    <button @click="loginUser">login</button>
    <div>
      {{ todo }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todo: null,
    }
  },
  methods: {
    loginUser: async function() {
      try {
        var user = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        // console.log(user);
        if (user.data.id === 1) {
          var todo = await axios.get('https://jsonplaceholder.typicode.com/tod/1');
          console.log(todo);
        }
      } catch (error) {
        console.log(error);
      }
    },
    













    
  }
}
</script>

<style>

</style>
