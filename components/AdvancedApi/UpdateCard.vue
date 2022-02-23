<template>
  <b-col md="6" class="d-flex"
    ><div class="section-card code_card" style="height: min-content">
      <!-- <h1 class="font-weight-light">Animal API</h1> -->
      <!-- <hr class="w-100" /> -->
      <UpdateMethod /></div
  ></b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import UpdateMethod from '../MethodsCards/UpdateMethod.vue'

export default Vue.extend({
  components: { UpdateMethod },
})
</script>

<style lang="scss" scoped>
.code_card {
  & h1 {
    text-align: center;
  }
  & .code-res-bg {
    background-color: rgba(0, 0, 0, 0.767);
    color: #64e68b;
  }
}
</style>
