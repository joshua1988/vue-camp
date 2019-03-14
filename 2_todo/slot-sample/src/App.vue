<template>
  <div>
    <ul>
      <list-item>
        <h1 slot="title">헬로</h1>
      </list-item>


      <list-item>
        <span style="color: blue;">아이템 1</span>
      </list-item>
      <list-item>
        <span style="font-size: 30px;">아이템 2</span>
      </list-item>
      <list-item>
        <div>
          아이템 3
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg" alt="캡마"
          height="250"
          width="200">
      </list-item>


      <!-- NOTE: 1번 케이스 -->
      <!-- <list-item v-bind:propsdata="items[0]"></list-item>
      <list-item v-bind:propsdata="items[1]"></list-item>
      <list-item v-bind:propsdata="items[2]"></list-item> -->
      <!-- NOTE: 2번 케이스 -->
      <!-- <list-item v-for="(item, index) in items" 
        v-bind:propsdata="item"
        v-bind:key="index"></list-item> -->
      <!-- NOTE: 3번 케이스 -->
      <!-- <list-item propsdata="아이템 1"></list-item>
      <list-item propsdata="아이템 2"></list-item>
      <list-item propsdata="아이템 3"></list-item> -->
    </ul>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue';

export default {
  components: {
    'list-item': ListItem,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3'],
    }
  },
}
</script>

<style>

</style>
