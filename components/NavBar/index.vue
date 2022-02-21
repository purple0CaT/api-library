<template>
  <nav class="nav-bar">
    <div class="navBar-logo">
      <nuxt-link to="/">
        <img src="dark.png" alt="" width="40px" />
      </nuxt-link>
    </div>
    <div class="navBar-links">
      <nuxt-link to="free" class="btn"><h6>Free API</h6> </nuxt-link>
      <nuxt-link to="advanced" class="btn"> <h6>Advanced API</h6></nuxt-link>
      <nuxt-link to="register" class="btn"> <h6>Register</h6></nuxt-link>
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
  position: sticky !important;
  top: 0;
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
    padding: 0.2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(88, 88, 88);
    // background-color: rgb(233, 233, 233);
    // box-shadow: 0 3px 5px grey;
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
      background-color: white !important;
      color: black;
      // animation: 1.6s linear infinite btnShadow;
      animation: 2s linear infinite btnActive;
    }
    &:active {
      transform: scale(1);
      box-shadow: 0 2px 4px grey !important;
    }
  }
  .nuxt-link-exact-active {
    color: black !important;
    background-color: white !important;
    animation: 2s linear infinite btnActive;
  }
}
@keyframes btnShadow {
  0% {
    box-shadow: 0 5px 8px grey;
  }
  50% {
    box-shadow: 0 6px 10px rgb(63, 143, 175);
  }
  100% {
    box-shadow: 0 5px 8px grey;
  }
}
@keyframes btnActive {
  0% {
    border-bottom: 2px solid rgb(134, 38, 38);
  }
  25% {
    border-bottom: 2px solid rgb(64, 148, 38);
  }
  50% {
    border-bottom: 2px solid rgb(26, 130, 172);
  }
  75% {
    border-bottom: 2px solid rgb(148, 41, 116);
  }
  100% {
    border-bottom: 2px solid rgb(134, 38, 38);
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
    filter: drop-shadow(-5px 5px 5px #dd44dd);
  }
  100% {
    filter: drop-shadow(0px 0px 5px #dd4444);
  }
}
</style>
