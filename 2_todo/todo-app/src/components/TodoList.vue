<template>
  <div>
    <!-- {{ todoItems }} -->
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="index">
        {{ todoItem }}
        <!-- TODO: 아래 삭제 버튼을 눌렀을 때 동작하게 코드를 변경해보세요..! -->
        <button v-on:click="removeItem(todoItem, index)">
          remove
        </button>
      </li>
    </ul>
    <!-- <button @click="changeProps">change</button> -->
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeItem: function(todoItem, index) {
      console.log('clicked', todoItem, index);
      this.$emit('remove', todoItem, index);
    },
    // changeProps: function() {
    //   this.propsdata = 'hi'
    // }
  },
  // created: function() {
  //   this.fetchTodoItems();

    

  //   // localStorage.getItem();
  //   // axios.get();
  //   // $.ajax()
  // },
}
</script>

<style>

</style>