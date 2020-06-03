<template>
  <div>
    <button @click="fetchUser">get user</button>
    <div>
      <!-- TODO: 여기에 첫 번째 할 일 정보(todos/1)를 출력해보세요 -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users/1'
let url2 = 'https://jsonplaceholder.typicode.com/posts';
// https://jsonplaceholder.typicode.com/todos/1

export default {
  methods: {
    data() {
      return {
        post: {}
      }
    },
    fetchUser() {
      // axios.get(url);
      // axios.get(url2);
      axios.get(url)
        // .then(this.fetchTodo)
        .then(response => {
          console.log(response.data.id); // id: 1
          const url = url2 + response.data.id;
          axios.get(url)
            .then(({ data }) => {
              console.log(data);
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
          console.log(error);
        })
    },
    async fetchUser() {
      try {
        const response = await axios.get(url);
        const newUrl = url2 + response.data.id;
        const result = await axios.get(newUrl);
        this.post = result.data;
      } catch (error) {
        console.log(error);
        // handleError();
      }
    }
  }
}
</script>

<style>

</style>