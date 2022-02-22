<template>
  <b-col md="6" class="d-flex align-items-center"
    ><div class="section-card code_card">
      <h1>Animal API</h1>
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
    </div></b-col
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.code_card {
  & h1 {
    text-align: center;
  }
  & .code-input-copy {
    display: flex;
    gap: 0.4rem;
    width: 100%;
    justify-content: space-around;
    & code {
      display: flex;
      align-items: center;
      width: 100%;
    }
    & input {
      width: -webkit-fill-available;
      border: unset;
      color: unset;
      background-color: unset;
    }
    & button {
      display: block;
      position: relative;
      padding: 0.1rem 0.6rem;
      margin: 0 !important;
      border: unset;
      border-radius: 5px;
      box-shadow: 0 0 4px grey;
      background-color: white;
      transition: 0.1s ease-in-out;
      border: 2px solid transparent;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 7px grey;
      }
      &:active {
        transform: scale(1);
        box-shadow: 0 0 2px grey;
      }
      &:focus {
        box-sizing: border-box !important;
        border: 2px solid rgb(0, 138, 192) !important;
      }
    }
  }
  & .code-res-bg {
    background-color: rgba(0, 0, 0, 0.767);
    color: #64e68b;
  }
}
</style>
