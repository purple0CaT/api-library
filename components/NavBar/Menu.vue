<template>
  <div class="navBar-links">
    <nuxt-link to="free" class="btn"><h6>Free API</h6> </nuxt-link>
    <nuxt-link to="advanced" class="btn"> <h6>Advanced API</h6></nuxt-link>
    <nuxt-link v-if="user.id" to="account" class="btn">
      <h6>Account</h6></nuxt-link
    >
    <nuxt-link v-else to="login" class="btn"> <h6>Auth</h6></nuxt-link>
    <div class="theme-btn">
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
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['theme_mode', 'user']),
  },
  methods: {
    ...mapMutations(['handleTheme']),
  },
})
</script>
<style lang="scss">
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
  .nuxt-link-exact-active {
    animation: 2s linear infinite btnActive;
  }
}
//
.theme-btn {
  & svg {
    position: relative;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    user-select: none;
    //
  }
  & .sun-btn {
    filter: drop-shadow(0 0 4px rgb(253, 236, 0));
    &:hover {
      transform: scale(1.3);
    }
    &:active {
      transform: scale(1);
      filter: drop-shadow(0 0 2px rgb(46, 46, 46));
    }
  }
  & .moon-btn {
    filter: drop-shadow(0 0 4px rgb(40, 83, 165));
    &:hover {
      transform: scale(1.3);
    }
    &:active {
      transform: scale(1);
      filter: drop-shadow(0 0 2px rgb(223, 172, 8));
    }
  }
}
//  KeyFrames
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
@keyframes sunBgAnimation {
  0% {
    filter: drop-shadow(0 0 3px rgb(255, 230, 0));
    transform: rotate(0deg);
  }
  50% {
    filter: drop-shadow(0 0 15px rgb(255, 136, 0));
    transform: rotate(180deg);
  }
  100% {
    filter: drop-shadow(0 0 3px rgb(255, 230, 0));
    transform: rotate(360deg);
  }
}
</style>
