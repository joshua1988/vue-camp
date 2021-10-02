<script>
import BackToTop from '@vuepress/plugin-back-to-top/BackToTop';

export default BackToTop;
</script>

<style lang="stylus" scoped>
$green-100 = #eef6ef
$green-400 = #3eaf7c
$green-600 = #388341

.go-to-top
  z-index: 1
  cursor: pointer
  position: fixed
  bottom: 2rem
  right: 2.5rem
  width: 2rem
  height: 2rem
  padding: 1rem
  border-radius: 15px
  color: $green-400
  background-color: $green-100
  @media (max-width: 959px)
    display: block
    width: 1.25rem
    height: 1rem
    right: 0
    bottom: 7rem
    border-top-right-radius: 0
    border-bottom-right-radius: 0
</style>
