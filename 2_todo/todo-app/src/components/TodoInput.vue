<template>
  <div>
    <input type="text" v-model="inputText" v-on:keyup.enter="addItem">
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    addItem: function() {
      // this.inputText
      localStorage.setItem(this.inputText, this.inputText);
      this.inputText = '';
      this.clearInput();

      // axios.post('todos', {
      //   title: this.inputText
      // })
    },
    clearInput: function() {
      this.inputText = '';
    }
  }
}
</script>

<style>

</style>