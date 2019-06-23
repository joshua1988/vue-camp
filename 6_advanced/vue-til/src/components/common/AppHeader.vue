<template>
  <header :class="{ 'fixed': isFixed }" ref="appHeader">
    <div>
      <router-link to="/" class="logo">TIL</router-link>
    </div>
    <div class="navigations">
      <template v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </template>
      <template v-else>
        <router-link to="/new">Add</router-link> |
        <a href="javascript:;" @click="logout">Logout</a>
      </template>
      <!-- <router-link to="/main">Main</router-link> -->
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  data() {
    return {
      navHeight: 0,
      isFixed: false,
    }
  },
  watch: {
    '$route'(to, from) {
      this.looseHeader();
    }
  },
  methods: {
    logout() {
      this.$store.commit('LOGOUT');
      this.$router.push('/');
    },
    checkHeight() {
      window.scrollY > 0 ? this.stickHeader() : this.looseHeader();
    },
    stickHeader() {
      this.isFixed = true;
      document.querySelector('.main').classList.add('sticky');
    },
    looseHeader() {
      this.isFixed = false;
      document.querySelector('.main').classList.remove('sticky');
    }
  },
  mounted() {
    this.navHeight = this.$refs.appHeader.offsetHeight;
    window.addEventListener('scroll', this.checkHeight);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkHeight);
  },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}
.logo {
  font-size: 30px;
}
.navigations > a {
  margin-left: 3px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
