<template>
  <section class="free_api_wrapper">
    <h1 class="section-header">Free API's</h1>
    <b-row class="w-100">
      <SingleCard />
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SingleCard from './SingleCard.vue'
export default Vue.extend({
  components: { SingleCard },
})
</script>

<style scoped lang="scss">
.free_api_wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3rem);
  background: url('/circuit.png') center no-repeat;
  background-color: linear-gradient(#e66465, #9198e5);
  background-size: cover;
  //
  & .section-header {
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0.2rem 1rem;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
}
</style>
