<template>
  <div>
    <NavBar />
    <main class="container">
      <Nuxt />
    </main>
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
  background-color: #e5e9ee;
}
.p-1 {
  padding: 0.5rem;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: calc(100vh - 3rem);
}
</style>
