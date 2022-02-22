<template>
  <section class="advanced_api_wrapper">
    <h1 class="section-header">Advanced APIs</h1>
    <b-row class="w-100">
      <SingleCard />
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SingleCard from '../../components/AdvancedApi/SingleCard.vue'
export default Vue.extend({
  components: { SingleCard },
})
</script>
<style scoped lang="scss">
.advanced_api_wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3rem);
  background: url('/advanced.png') center no-repeat;
  background-color: linear-gradient(#e66465, #9198e5);
  background-size: cover;
  
}
</style>
