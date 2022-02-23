<template>
  <section class="free_api_wrapper">
    <h1 class="section-header font-weight-light">Free APIs</h1>
    <b-row class="w-100">
      <SingleCard />
      <GetIdCard />
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SingleCard from '../../components/FreeApi/GetCard.vue'
import GetIdCard from '../../components/FreeApi/GetIdCard.vue'

export default Vue.extend({
  components: { SingleCard, GetIdCard },
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
  background-size: cover;
}
</style>
