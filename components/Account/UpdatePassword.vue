<template>
  <div class="d-flex justify-content-between align-items-center mt-2">
    <h5 class="font-weight-light m-0">
      <small class="font-weight-light">Password: </small>***********
    </h5>

    <b-button v-b-modal.modalPassword size="sm" variant="outline-info"
      >Update Password</b-button
    >
    <b-modal
      ref="modalPassword"
      id="modalPassword"
      title="Update Password"
      hide-footer
    >
      <ValidationObserver ref="form">
        <form @submit.prevent="submitForm">
          <!-- Current Password -->
          <b-form-group
            id="old-pass"
            label="Current password:"
            label-for="old-pass"
          >
            <ValidationProvider
              mode="passive"
              rules="required|password"
              v-slot="{ errors }"
            >
              <b-form-input
                id="old-pass"
                type="password"
                v-model="form.old"
                placeholder="Current password"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- New password -->
          <b-form-group
            id="password"
            label="New password:"
            label-for="password"
          >
            <ValidationProvider
              mode="passive"
              rules="required|password"
              v-slot="{ errors }"
              name="confirmation"
            >
              <b-form-input
                id="password"
                type="password"
                v-model="form.password"
                placeholder="New password"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <!-- Confirm -->
          <b-form-group
            id="confirm-password"
            label="Confirm password:"
            label-for="confirm-password"
          >
            <ValidationProvider
              mode="passive"
              rules="required|confirmationPass:@confirmation"
              v-slot="{ errors }"
            >
              <b-form-input
                id="confirm-password"
                type="password"
                v-model="form.confirm"
                placeholder="Confirm password"
                required
              ></b-form-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <hr />
          <div class="d-flex justify-content-end align-items-center">
            <b-button
              variant="outline-dark"
              size="sm"
              class="mr-2"
              @click="hideModal"
              >Cancel</b-button
            >
            <b-button type="submit" size="sm" variant="outline-success"
              >Submit</b-button
            >
          </div>
        </form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
//
interface FormType extends Element {
  validate(): Promise<boolean>
}
//
export default Vue.extend({
  name: 'UpdatePassword',
  data() {
    return {
      form: {
        old: '',
        password: '',
        confirm: '',
      },
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    hideModal() {
      if (this.$refs['modalPassword']) {
        this.$refs['modalPassword'].hide()
      }
    },
    submitForm() {
      ;(this.$refs.form as FormType).validate().then((success: boolean) => {
        if (success) {
          alert('Form!')
          this.hideModal()
        }
      })
    },
  },
})
</script>

<style></style>
