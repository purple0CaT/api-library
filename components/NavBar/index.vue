<template>
  <nav class="nav-bar">
    <div class="navBar-logo">
      <nuxt-link to="/">
        <img src="dark.png" alt="" width="40px" />
      </nuxt-link>
    </div>
    <div class="navBar-links">
      <nuxt-link to="free" class="btn"><h4>Free API</h4> </nuxt-link>
      <nuxt-link to="registered" class="btn"> <h4>More API</h4></nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
})
</script>

<style scope lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: white;
  color: white;
  height: 3rem;
  box-shadow: 0 1px 5px grey;
}
.navBar-links {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  .btn {
    height: 1.8rem;
    padding: 0.2rem 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(88, 88, 88);
    background-color: rgb(233, 233, 233);
    box-shadow: 0 3px 5px grey;
    border: unset;
    transition: 0.1s;
    cursor: pointer;
    //
    & h4 {
      margin: 0;
    }
    &:hover {
      transform: scale(1.04);
      text-decoration: none;
      box-shadow: 0 6px 10px grey;
    }
    &:active {
      transform: scale(1);
      box-shadow: 0 2px 4px grey !important;
    }
  }
  .nuxt-link-exact-active {
    color: black !important;
    box-shadow: 0 5px 10px grey !important;
    background-color: white !important;
  }
}
// Logo
.navBar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 3s infinite linear logoShadow;
}
@keyframes logoShadow {
  0% {
    filter: drop-shadow(0px 0px 5px #dd4444);
  }
  25% {
    filter: drop-shadow(5px 5px 5px #51dd44);
  }
  50% {
    filter: drop-shadow(0px 10px 5px #44ddc4);
  }
  75% {
    filter: drop-shadow(-5px 5px 5px #446ddd);
  }
  100% {
    filter: drop-shadow(0px 0px 5px #dd4444);
  }
}
</style>
