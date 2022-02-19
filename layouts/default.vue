<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  min-height: 100vh;
  background-color: rgb(239, 243, 247);
}
.p-1 {
  padding: 0.5rem;
}
</style>
