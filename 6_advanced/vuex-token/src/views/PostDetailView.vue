<template>
  <div>
    <form @submit.prevent="editForm">
      <div>
        <label for="title">Title: </label>
        <input id="title" type="text" v-model="title">
      </div>
      <div>
        <label for="contents">Contents: </label>
        <textarea name="contents" id="contents" cols="30" rows="10" v-model="contents"></textarea>
      </div>
      <div>
        <button type="submit">edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { fetchPostById, editPostById } from '../api/index.js';

export default {
  data() {
    return {
      title: '',
      contents: '',
    }
  },
  methods: {
    setForm({ title, contents }) {
      this.title = title;
      this.contents = contents;
    },
    async editForm() {
      try {
        const id = this.$route.params.id;
        const response = await editPostById(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const { data } = await fetchPostById(id);
      this.setForm(data);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
label { vertical-align: top; }
form>div { margin: 10px 5px; }
</style>
