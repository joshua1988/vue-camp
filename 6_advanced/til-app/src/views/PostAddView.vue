<template>
  <div>
    <h1>학습노트 생성</h1>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" />
        <label for=""></label>
      </div>
      <div>
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">생성</button>
    </form>
  </div>
</template>

<script>
import { createPost } from '../api';

export default {
  data() {
    return {
      title: '',
      contents: ''
    };
  },
  methods: {
    async submitForm() {
      const result = await createPost({
        title: this.title,
        contents: this.contents
      });
      if (result) {
        this.$router.push('/home');
      }
    }
  }
};
</script>

<style></style>
