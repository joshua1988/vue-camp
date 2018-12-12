<template>
  <div>
    <transition-group name="todo" tag="ul">
      <li v-for="(todoItem, index) in todolist"
        v-bind:key="index"
        class="shadow">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="deleteItem(todoItem, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['todolist'],
  methods: {
    deleteItem: function(item, index) {
      this.$emit('delete', item, index);
      // console.log(item, index);
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition effects */
.todo-enter-active,
.todo-leave-active {
  transition: all 1s;
}
.todo-enter,
.todo-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
