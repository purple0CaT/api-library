<template>
  <main :class="theme_mode === 'light' ? 'light-theme' : 'dark-theme'">
    <NavBar />
    <Nuxt />
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['theme_mode']),
  },
  head() {
    return {
      title: 'Use API',
      meta: [
        {
          hid: 'Free API to use',
          name: 'Free API to use',
          content: 'Free API to use',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
$lightBg: rgba(255, 255, 255, 0.9);
$darkBg: rgba(82, 82, 82, 0.95);
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  min-height: 100vh;
}
.main {
  transition: 0.1s;
}
.section-card {
  box-sizing: border-box !important;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  height: fit-content;
}
.light-theme {
  background-color: #dee3e7 !important;
  color: black;
  & .section-card {
    background-color: $lightBg;
    box-shadow: 0 0 10px $darkBg;
  }
  & .section-header {
    border-radius: 15px;
    box-shadow: 0 0 10px $darkBg;
    background-color: $lightBg;
    padding: 0.2rem 1rem;
    z-index: 10;
  }
  .mobileMenuModal__navigation {
    background-color: $lightBg;
  }
}
.dark-theme {
  background-color: #686b6d;
  color: rgb(255, 255, 255);
  & .section-card {
    background-color: $darkBg;
    box-shadow: 0 0 10px $lightBg;
  }
  & .section-header {
    border-radius: 15px;
    background-color: $darkBg;
    padding: 0.2rem 1rem;
    box-shadow: 0 0 10px $lightBg;
    z-index: 10;
  }
  .mobileMenuModal__navigation {
    background-color: $darkBg;
  }
}
.code-input-copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  //
  & code {
    width: 80%;
  }
  & input {
    width: -webkit-fill-available;
    color: unset;
    background-color: unset;
    border: 1px solid grey;
    border-radius: 5px;
  }
  & button {
    display: block;
    position: relative;
    color: black !important;
    padding: 0.1rem 0.6rem;
    margin: 0 !important;
    border: unset;
    border-radius: 5px;
    box-shadow: 0 0 4px grey;
    background-color: white;
    transition: 0.1s ease-in-out;
    border: 2px solid transparent;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 7px grey;
    }
    &:active {
      transform: scale(1);
      box-shadow: 0 0 2px grey;
    }
    &:focus {
      box-sizing: border-box !important;
      border: 2px solid rgb(0, 138, 192) !important;
    }
  }
}
</style>
