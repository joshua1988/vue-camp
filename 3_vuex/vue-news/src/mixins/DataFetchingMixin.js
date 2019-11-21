import { fetchListData } from '../api/index'

export default {
  data() {
    return {
      listItems: [],
      num: 0,
    }
  },
  // 인스턴스 옵션
  beforeCreate() {
    console.log('믹스인 코드');
  },
  async beforeMount() {
    const { data } = await fetchListData(this.$route.name);
    this.listItems = data;
  }
}