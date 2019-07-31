<script>
export default {
  data() {
    return {
      msg: 'hi'
    }
  },
  render(createElement) {
    // return createElement('태그 이름', '태그 속성', '하위 태그 정보');
    return createElement('p', this.msg);
  }
}
</script>

<style>

</style>
