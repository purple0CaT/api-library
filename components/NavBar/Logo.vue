<template>
  <div class="navBar-logo">
    <nuxt-link to="/">
      <img src="dark.png" alt="" width="40px" />
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navBar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 3s infinite linear logoShadow;
}
// 
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
