<template>
  <!-- <li v-bind:style="listStyle" v-bind:class="listClass">
    {{ item }}
  </li> -->
  <li>
    <slot name="title"></slot>
    <slot name="img"></slot>
  </li>
</template>

<script>
export default {
	// props: ['item', 'listStyle', 'listClass'],
};
</script>

<style>
/* .list-item2 {

} */
</style>