<template>
  <nav
    class="nav-bar"
    :class="theme_mode === 'light' ? 'nav-light-theme' : 'nav-dark-theme'"
  >
    <Logo />
    <Menu />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from './Menu.vue'
import Logo from './Logo.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'NavBar',
  components: { Menu, Logo },
  computed: {
    ...mapState(['theme_mode']),
  },
})
</script>

<style lang="scss">
.nav-bar {
  position: sticky !important;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 3rem;
  box-shadow: 0 1px 5px grey;
  z-index: 900;
}
.nav-light-theme {
  background-color: white;
  color: black;
  & .btn {
    color: rgb(88, 88, 88);
    &:hover {
      color: black;
    }
  }
  & .nuxt-link-exact-active {
    color: black;
  }
}
.nav-dark-theme {
  background-color: rgb(56, 56, 56);
  color: rgb(190, 190, 190);
  & .btn {
    color: rgb(190, 190, 190);
    &:hover {
      color: white;
    }
  }
  & .nuxt-link-exact-active {
    color: white;
  }
}
</style>
