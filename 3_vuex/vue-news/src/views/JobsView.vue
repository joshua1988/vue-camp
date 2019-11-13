<template>
  <div>
    <!-- {{ jobs }} -->
    <p>{{ jobs }}</p>
    <!-- <p>{{ halfJobs }}</p> -->
  </div>
</template>

<script>
import { fetchJobs } from "../api/index.js";
import { mapState } from "vuex";

export default {
  // data() {
  //   return {
  //     jobs: []
  //   };
  // },
  computed: {
    ...mapState(["jobs"])
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
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobs()
    //   .then(({ data }) => {
    //     this.jobs = data;
    //   })
    //   .catch(error => console.log(error));
  }
};
</script>

<style></style>
