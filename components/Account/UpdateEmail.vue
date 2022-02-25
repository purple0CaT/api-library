<template>
  <div class="d-flex justify-content-between align-items-center">
    <h5 class="font-weight-light m-0">
      <small class="font-weight-light">Email: </small>{{ user.email }}
    </h5>
    <b-button v-b-modal.modalEmail size="sm" variant="outline-info"
      >Update Email</b-button
    >
    <b-modal ref="modalEmail" id="modalEmail" title="Update Email" hide-footer>
      <ValidationObserver ref="form">
        <form @submit.prevent="submitForm">
          <b-form-group id="email-form" label="Email:" label-for="email-form">
            <ValidationProvider
              mode="passive"
              rules="required|email"
              v-slot="{ errors }"
            >
              <b-form-input
                id="email-form"
                type="text"
                v-model="email"
                placeholder="First Name"
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
  name: 'UpdateEmail',
  data() {
    return {
      email: '',
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    updateForm(): any {
      this.email = this.user.email
      this.email = this.user.email
    },
    hideModal() {
      if (this.$refs['modalEmail']) {
        this.$refs['modalEmail'].hide()
      }
    },
    async submitForm() {
      ;(this.$refs.form as FormType).validate().then((success: boolean) => {
        if (success) {
          alert('Form!')
          this.hideModal()
        }
      })
    },
  },
  created() {
    this.updateForm()
  },
})
</script>

<style></style>
