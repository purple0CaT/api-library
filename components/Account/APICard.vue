<template>
  <b-col md="6">
    <div class="section-card api-account-card">
      <h1 class="font-weight-light">Your API key</h1>
      <form @submit.prevent="handleCopy" class="code-input-copy">
        <code
          ><input readonly type="text" name="code" :value="user.api_key"
        /></code>
        <button type="submit">copy</button>
      </form>
      <div class="d-flex justify-content-center">
        <b-button variant="outline-primary" size="sm"
          >Change your API key</b-button
        >
      </div>
      <hr class="w-100" />
      <div class="api-example">
        <h3 class="font-weight-light">Example of usage:</h3>
        <br />
        <PostMethod />
      </div>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import PostMethod from '../MethodsCards/PostMethod.vue'

export default Vue.extend({
  name: 'APICard',
  components: { PostMethod },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    handleCopy(submitEvent: any) {
      navigator.clipboard.writeText(submitEvent.target.elements.code.value)
      submitEvent.target.elements.code.focus()
    },
  },
})
</script>

<style lang="scss" scoped>
.api-account-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1 rem;
  //
  & h1 {
    text-align: center;
    font-weight: lighter;
  }
}
.api-example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //
}
</style>
