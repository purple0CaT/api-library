<template>
  <section class="home_wrapper">
    <b-row class="w-100">
      <b-col md="8">
        <div class="about_card section_card">
          <h1>Fast and eficient way to learn API</h1>
          <h4 class="font-italic">
            We are providing a simple solution to learn how to interact with
            API's for junior engineers
          </h4>
          <h5>
            Just <strong>copy</strong> and <strong>paste</strong> link right
            from you, and you ready to fetch your first API call "=>"
          </h5>
        </div>
      </b-col>
      <b-col md="4" class="d-flex align-items-center">
        <div class="section_card code_card">
          <code
            ><input
              ref="copy_code"
              readonly
              type="text"
              value="https://sometestapi.com/api/dogs"
          /></code>
          <button @click="handleCopy">copy</button>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    handleCopy() {
      navigator.clipboard.writeText(this.$refs.copy_code!.value)
      this.$refs.copy_code!.focus()
      //   navigator.clipboard.writeText(this.$refs.copy_code)
    },
  },
})
</script>

<style lang="scss">
.home_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);
  background: url('https://imgur.com/2Z8ZOx0.jpg') center center no-repeat,
    #a4c5e0;
  background-size: cover;
}

.section_card {
  padding: 1rem;
  background-color: rgba(247, 247, 247, 0.774);
  margin: 1rem 0;
  box-shadow: 0 2px 5px rgb(255, 255, 255);
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
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  //
  & code {
    width: 100%;
  }
  & input {
    width: -webkit-fill-available;
    border: unset;
    color: unset;
    background-color: unset;
  }
  & button {
    border: unset;
    box-shadow: 0 0 4px grey;
    background-color: white;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 7px grey;
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 0 0 2px grey;
    }
  }
}
</style>
