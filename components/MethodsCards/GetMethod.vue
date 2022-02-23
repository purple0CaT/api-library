<template>
  <div class="section-card code_card">
    <div class="d-flex align-items-baseline justify-content-center">
      <h3 class="m-0" style="color: DodgerBlue">GET</h3>
      <span class="ml-2"> method</span>
    </div>
    <form @submit.prevent="handleCopy" class="code-input-copy">
      <code
        ><input
          readonly
          name="code"
          type="text"
          value="https://sometestapi.com/api/animal"
      /></code>
      <button type="submit">copy</button>
    </form>
    <h4 style="font-weight: lighter">Response:</h4>
    <pre class="code-res-bg">
          <code style="white-space: break-spaces"
            >
            <span>[{</span>
              <span>"id": number,</span>
              <span>"name": "string",</span>
              <span>"type": "string",</span>
              <span>"legs": number,</span>
              <span>"tail": boolean</span>
            <span>}, ...]</span>
          </code>
          </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
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

<style lang="scss">
.code-res-bg {
  background-color: rgba(0, 0, 0, 0.767);
  color: #64e68b;
}
.code-req-bg {
  background-color: rgba(0, 0, 0, 0.767);
  color: #e69464;
}
</style>
