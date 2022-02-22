<template>
  <section class="login-section">
    <div class="section-card">
      <form class="form-section" @submit.prevent="">
        <b-form-group
          id="email"
          label="Email address:"
          label-for="email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button variant="outline-info">Log In</b-button>
      </form>
      <hr />
      <div class="d-flex justify-content-around align-items-baseline">
        <h4 class="m-0">Don't have account?</h4>
        <nuxt-link to="register" class="text-decoration-none">
          <h5 class="m-0">Register</h5></nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  methods: {
    async handleLogin() {},
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
})
</script>

<style scoped lang="scss">
.section-card {
  width: unset !important;
  & .form-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .form-group {
      text-align: center;
    }
  }
}
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 3rem);
  background: url('/brain.png') center no-repeat;
  background-color: linear-gradient(#e66465, #9198e5);
  background-size: contain;
}
</style>
