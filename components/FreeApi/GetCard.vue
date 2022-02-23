<template>
  <b-col md="6" class="d-flex align-items-center"><GetCard /></b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import GetCard from '../MethodsCards/GetMethod.vue'
export default Vue.extend({
  components: { GetCard },
  methods: {
    handleCopy(submitEvent: any) {
      navigator.clipboard.writeText(submitEvent.target.elements.code.value)
      submitEvent.target.elements.code.focus()
    },
  },
})
</script>

<style lang="scss" scoped>
$lightBg: rgba(255, 255, 255, 0.95);
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
