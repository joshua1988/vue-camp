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
      // 9시 55분까지..
      // TODO: App.vue의 todoItems에 할 일 데이터 값을 추가
      var value = this.inputText;
      this.$emit('add', value);
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