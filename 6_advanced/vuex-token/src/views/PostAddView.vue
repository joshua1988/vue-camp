<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title :</label>
        <input id="title" type="text" v-model="title">
      </div>
      <div>
        <label for="contents">Contents : </label>
        <textarea name="contents" id="contents" cols="30" rows="10" v-model="contents"></textarea>
      </div>
      <div>
        <button type="submit">create</button>
      </div>
      <div>
        {{ resultMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { createNewPost } from '../api/';

export default {
  data() {
    return {
      title: '',
      contents: '',
      resultMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await createNewPost({
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
label { vertical-align: top; }
form>div { margin: 10px 5px; }
</style>
