<template>
  <div>
    <div class="d-flex justify-content-center align-items-baseline">
      <h4 class="mr-2" style="color: tomato">Delete</h4>
      <span>method</span>
    </div>
    <form @submit.prevent="handleCopy" class="code-input-copy">
      <code
        ><input
          readonly
          type="text"
          name="code"
          :value="
            user.api_key
              ? 'https://sometestapi.com/api/animal/id?api_key=' + user.api_key
              : 'https://sometestapi.com/api/animal/id?api_key=<api-key>'
          "
      /></code>
      <button type="submit">copy</button>
    </form>
    <h5 class="font-weight-light">Response:</h5>
    <pre class="code-res-bg">
          <code style="white-space: break-spaces"
            >
            <span>{</span>
              <span>msg: Item with id:'id' deleted!</span>
            <span>}</span>
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
