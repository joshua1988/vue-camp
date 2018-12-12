<template>
  <div class="inputBox shadow">
    <input id="input" type="text" v-model="inputText" 
      v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">저장</button> -->

    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus"></i>
    </span>

    <!-- modal -->
    <basic-modal v-if="showModal" v-on:close="showModal = false">
      kkkk
    </basic-modal>
  </div>
</template>

<script>
import BasicModal from './common/BasicModal.vue';

export default {
  components: {
    'basic-modal': BasicModal
  },
  data: function() {
    return {
      inputText: '',
      showModal: false,
    }
  },
  methods: {
    addTodo: function() {
      // console.log(this.inputText);
      var value = this.inputText;
      this.$emit('add', value);
      
      // localStorage.setItem(value, value);
      this.inputText = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
