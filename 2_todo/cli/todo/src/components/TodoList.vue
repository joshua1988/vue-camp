<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">
        {{ item }}
        <button v-on:click="removeItem(item, index)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [],
    }
  },
  methods: {
    removeItem: function(item, index) {
      // console.log(item, index);
      this.items.splice(index, 1);
      localStorage.removeItem(item);
    }
  },
  created: function() {
    // var arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        var item = localStorage.key(i);
        this.items.push(item);
      }
    }
    // console.log(arr);
  }
}
</script>

<style>

</style>
