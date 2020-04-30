<template>
  <p>hello</p>
</template>

<script>
document.createElement("p");

export default {
  // Javascript
  render(h) {
    return h("header", "제목");
  }
};
</script>

<style>
header {
  color: red;
}
/* CSS */
</style>