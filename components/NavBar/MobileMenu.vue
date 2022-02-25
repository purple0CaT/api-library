<template>
  <main>
    <b-icon
      class="menu-btn"
      icon="list"
      font-scale="2"
      @click="handleMobileMenu"
    ></b-icon>
    <section class="mobileMenuModal" v-if="showMenu" @click="handleMobileMenu">
      <div class="mobileMenuModal__navigation">
        <!-- Menu Header -->
        <div class="menuHeader">
          <Logo />
          <b-icon class="menu-btn" icon="list" font-scale="2"></b-icon>
        </div>
        <!-- Menu Options List -->
        <div class="menu-list">
          <div class="d-flex justify-content-center">
            <nuxt-link to="free" class="btn"><h6>Free API</h6> </nuxt-link>
          </div>
          <div class="d-flex justify-content-center">
            <nuxt-link to="advanced" class="btn">
              <h6>Advanced API</h6></nuxt-link
            >
          </div>
          <div class="d-flex justify-content-center">
            <nuxt-link v-if="user.id" to="account" class="btn">
              <h6>Account</h6></nuxt-link
            >
            <nuxt-link v-else to="login" class="btn"> <h6>Auth</h6></nuxt-link>
          </div>
          <div class="theme-btn d-flex justify-content-center">
            <b-icon
              class="moon-btn"
              v-if="theme_mode === 'dark'"
              icon="moon"
              variant="dark"
              font-scale="1"
              @click="handleTheme"
            ></b-icon>
            <b-icon
              class="sun-btn"
              v-else
              icon="sun"
              variant="warning"
              font-scale="1"
              @click="handleTheme"
            ></b-icon>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import Logo from './Logo.vue'
export default Vue.extend({
  components: { Logo },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    ...mapState(['theme_mode', 'user']),
  },
  methods: {
    ...mapMutations(['handleTheme']),
    handleMobileMenu() {
      if (this.showMenu) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
      console.log('click')
    },
    hideMobileMenu() {
      this.showMenu = false
    },
  },
})
</script>

<style lang="scss" scoped>
.menu-btn {
  cursor: pointer;
}
.mobileMenuModal {
  position: absolute;
  inset: 0 0 auto 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  //
  &__navigation {
    box-shadow: 0 3px 5px grey;
    & .menuHeader {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      height: 3rem;
    }
    & .menu-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
    }
    & .btn {
      height: 1.8rem;
      padding: 0.2rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: 0.1s;
      cursor: pointer;
      //
      & h6 {
        margin: 0;
        font-weight: 400;
      }
      &:hover {
        transform: scale(1.04);
        text-decoration: none;
        animation: 2s linear infinite btnActive;
      }
      &:active {
        transform: scale(1);
        border-bottom: 3px solid rgb(39, 121, 189) !important;
      }
    }
    & .nuxt-link-exact-active {
      animation: 2s linear infinite btnActive;
    }
  }
}
</style>
