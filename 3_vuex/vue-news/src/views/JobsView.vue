<template>
  <div>
    <!-- {{ jobs }} -->
    <p>{{ listItems }}</p>
    <!-- <p>{{ halfJobs }}</p> -->
  </div>
</template>

<script>
import { fetchJobs } from "../api/index.js";
import { mapState } from "vuex";
import DataFetchingMixin from '../mixins/DataFetchingMixin';

export default {
  mixins: [DataFetchingMixin],
  data() {
    return {
      listItems: 0,
      listItems: [],
    }
  },
  // data() {
  //   return {
  //     jobs: []
  //   };
  // },
  computed: {
    // ...mapState(["jobs"])
    // halfJobs() {},
    // jobs: [],
    // ask: []
  },
  // computed: {
  //   jobs: [],
  // }
  // computed: {
  //   jobs() {
  //     return this.$store.state.jobs
  //   },
  //   ask() {
  //     return this.$store.state.ask
  //   }
  // }
  // created() {
  //   fetchJobs();
  //   // this.$store.dispatch("FETCH_JOBS");
  //   // fetchJobs()
  //   //   .then(({ data }) => {
  //   //     this.jobs = data;
  //   //   })
  //   //   .catch(error => console.log(error));
  // }
};
</script>

<style></style>
