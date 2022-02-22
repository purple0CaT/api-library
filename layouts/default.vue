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
$darkBg: rgba(82, 82, 82, 0.9);
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
  //
  & h4,
  h5 {
    font-weight: lighter;
  }
}
.light-theme {
  background-color: #dee3e7 !important;
  color: black;
  & .section-card {
    background-color: $lightBg;
    box-shadow: 0 0 10px $darkBg;
  }
  & .section-header {
    box-shadow: 0 0 10px $darkBg;
    background-color: $lightBg;
    padding: 0.2rem 1rem;
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
    background-color: $darkBg;
    padding: 0.2rem 1rem;
    box-shadow: 0 0 10px $lightBg;
  }
}
</style>
