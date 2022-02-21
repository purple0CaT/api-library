<template>
  <section class="home_wrapper">
    <b-row class="w-100">
      <b-col md="8">
        <div class="about_card section_card">
          <h1>Fast and efficient way to learn API's</h1>
          <h4 class="font-italic">
            A simple solution to interact with API's for junior engineers
          </h4>
          <h5>
            Just <strong>copy</strong> and <strong>paste</strong> link right
            from you, and you ready to fetch your first API call "=>"
          </h5>
        </div>
      </b-col>
      <b-col md="4" class="d-flex align-items-center">
        <form @submit.prevent="handleCopy" class="section_card code_card">
          <code
            ><input
              readonly
              type="text"
              name="code"
              value="https://sometestapi.com/api/dogs"
          /></code>
          <button type="submit">copy</button>
        </form>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    handleCopy(submitEvent: any) {
      navigator.clipboard.writeText(submitEvent.target.elements.code.value)
      submitEvent.target.elements.code.focus()
    },
  },
})
</script>

<style scoped lang="scss">
$lightBg: rgba(255, 255, 255, 0.7);
.home_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);
  background: url('/globe.png') center no-repeat;
  background-size: cover;
}

.section_card {
  box-sizing: border-box !important;
  padding: 1rem;
  background-color: $lightBg;
  margin: 1rem 0;
  box-shadow: 0 0 15px $lightBg;
  width: 100%;
  //
  & h4,
  h5 {
    font-weight: lighter;
  }
}
//
.about_card {
}
.code_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: 5rem;
  //
  & code {
    width: 80%;
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
</style>
