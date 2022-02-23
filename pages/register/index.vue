<template>
  <section class="register-section">
    <div class="section-card">
      <ValidationObserver ref="form">
        <form class="form-section" @submit.prevent="submitForm">
          <h3 class="text-center">Register</h3>
          <!-- First Name -->
          <b-form-group
            id="reg-firstname"
            label="First name"
            label-for="reg-firstname"
          >
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-input
                id="reg-email"
                v-model="firstname"
                type="text"
                placeholder="Enter your name"
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!--  -->
          <b-form-group
            id="reg-lastname"
            label="Last name"
            label-for="reg-email"
          >
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-input
                id="reg-email"
                v-model="lastname"
                type="text"
                placeholder="Enter your last name"
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="reg-email"
            label="Email address:"
            label-for="reg-email"
          >
            <ValidationProvider
              mode="passive"
              rules="required|email"
              v-slot="{ errors }"
            >
              <b-form-input
                id="reg-email"
                v-model="email"
                type="text"
                placeholder="Enter email"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="reg-password"
            label="Password:"
            label-for="password"
          >
            <ValidationProvider
              mode="passive"
              rules="required|password"
              v-slot="{ errors }"
              name="confirmation"
            >
              <b-form-input
                id="reg-password"
                v-model="password.password"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="reg-repeat-password"
            label="Repeat password"
            label-for="reg-repeat-password"
          >
            <ValidationProvider
              mode="passive"
              rules="required|confirmationPass:@confirmation"
              v-slot="{ errors }"
            >
              <b-form-input
                id="reg-repeat-password"
                v-model="password.confirm"
                type="password"
                placeholder="Repeat password"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-button variant="outline-info" type="submit">Register</b-button>
        </form>
      </ValidationObserver>
      <hr />
      <div class="d-flex justify-content-around align-items-baseline">
        <h4 class="m-0">Have an account?</h4>
        <nuxt-link to="login" class="text-decoration-none">
          <h5 class="m-0">Log In</h5></nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormType extends Element {
  validate(): Promise<boolean>
}
export default Vue.extend({
  name: 'Register',
  methods: {
    async submitForm() {
      ;(this.$refs.form as FormType).validate().then((success: boolean) => {
        if (success) {
          alert('Form!')
        }
      })
    },
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: { password: '', confirm: '' },
    }
  },
})
</script>

<style scoped lang="scss">
.section-card {
  width: auto;
  min-width: 20rem;
  & .form-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .form-group {
      text-align: center;
    }
  }
}
.register-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 3rem);
  background: url('/brain.png') center no-repeat;
  background-size: contain;
}
</style>
