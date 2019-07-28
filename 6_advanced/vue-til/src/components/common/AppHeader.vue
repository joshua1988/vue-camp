<template>
  <header :class="{ 'fixed': isFixed }" ref="appHeader">
    <div>
      <router-link to="/" class="logo">TIL <span>by {{ this.$store.state.user.nickname }}</span></router-link>
    </div>
    <div class="navigations">
      <template v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </template>
      <template v-else>
        <a href="javascript:;" @click="logout" class="logout-button">Logout</a>
        <!-- <router-link to="/new" class="add-button">Add</router-link> -->
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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* background-color: #3CA776; */
  /* background-color: #2e3e37; */
  background-color: #927DFC;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: white;
}
.logo {
  font-size: 30px;
  font-weight: 900;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 3px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.add-button {
  background: #3CA776;
  color: white;
  padding: 4px 23px;
  border-radius: 4px;
}
.logout-button {
  font-size: 14px;
}
</style>
