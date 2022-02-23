<template>
  <section class="advanced_api_wrapper">
    <h1 class="section-header font-weight-light">Advanced APIs</h1>
    <b-row class="w-100">
      <PostCard />
      <UpdateCard />
      <DeleteCard />
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PostCard from '../../components/AdvancedApi/PostCard.vue'
import UpdateCard from '../../components/AdvancedApi/UpdateCard.vue'
import DeleteCard from '../../components/AdvancedApi/DeleteCard.vue'
export default Vue.extend({
  components: { PostCard, UpdateCard, DeleteCard },
})
</script>
<style scoped lang="scss">
.advanced_api_wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 3rem);
  background: url('/advanced.png') center no-repeat;
  background-size: cover;
}
</style>
