<script>
/* eslint-disable */
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: false,
    }
  },
  created() {
    axios.get(this.url)
      .then(response => {
        this.response = response.data;
        this.loading = false;
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>