<template>
  <div>
    <input type="text"
      v-model="inputText" 
      v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">add</button>
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
    clearInput: function() {
      this.inputText = '';
    },
    addTodo: function() {
      var value = this.inputText;
      this.$emit('add', value);
      this.clearInput();

      // var items = [];
      // items.push({ title: '1' })
      // localStorage.setItem('vue-todo', items)
      // JSON.parse();
      // JSON.stringify();

      // axios.post('/todos', {
      //   title: this.inputText
      // });
    },
    
  }
}
</script>

<style>

</style>