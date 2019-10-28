<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems"
        v-bind:key="index">
        {{ todoItem }}
        <button 
          v-on:click="removeItem(todoItem, index)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
  props: ['todoItems'],
  // data() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  methods: {
    removeItem: function(todoItem, index) {
      this.$emit('remove', todoItem, index);
      // TODO: 아래 로직을 위에서 'remove' 이벤트로 받아 실행해보세요.
      // this.todoItems.splice(index, 1);
      // localStorage.removeItem(todoItem);
      // TODO: 다 하신 분들은 TodoFooter 컴포넌트도 리팩토링 해보세요.. :)
      // axios.delete('todos/' + todo.id)
    },
    // fetchItems: function() {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var value = localStorage.key(i);
    //     this.todoItems.push(value); 
    //   }
    //   // axios.get('todos');
    // },
    clearItems: function() {
      this.todoItems = [];
    }
  },
  // created: function() {
  //   this.fetchItems();
  //   console.log(this);
  //   var vm = this;
  //   bus.$on('clear', function() {
  //     console.log('받았다', this);
  //     vm.clearItems();
  //   }); 
  // },
  // beforeDestroy: function() {
  //   // 이벤트 버스 쓰게 되면 꼭 다 해제 해줘야 함
  //   bus.$off('clear');
  // }
}
</script>

<style>

</style>