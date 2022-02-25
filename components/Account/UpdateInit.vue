<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex flex-column align-items-start">
      <h5 class="font-weight-light">
        <small class="font-weight-light">Name:</small> {{ user.firstName }}
      </h5>
      <h5 class="font-weight-light">
        <small class="font-weight-light">Surname:</small> {{ user.lastName }}
      </h5>
    </div>
    <div>
      <b-button v-b-modal.modalInitials size="sm" variant="outline-info"
        >Update User</b-button
      >
    </div>
    <b-modal
      ref="modalInitials"
      id="modalInitials"
      title="Update User Infromation"
      hide-footer
    >
      <form @submit.prevent="submitForm">
        <b-form-group
          id="first-name-group"
          label="First name:"
          label-for="first-name"
        >
          <b-form-input
            id="first-name"
            type="text"
            v-model="form.firstName"
            placeholder="First Name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="last-name-group"
          label="Last name:"
          label-for="last-name"
        >
          <b-form-input
            id="last-name"
            type="text"
            v-model="form.lastName"
            placeholder="Last name"
            required
          ></b-form-input>
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
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'UpdateInitials',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
      },
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    updateForm(): any {
      this.form.firstName = this.user.firstName
      this.form.lastName = this.user.lastName
    },
    hideModal() {
      if (this.$refs['modalInitials']) {
        this.$refs['modalInitials'].hide()
      }
    },
    submitForm() {
      this.hideModal()
      alert(JSON.stringify(this.form))
    },
  },
  created() {
    this.updateForm()
  },
})
</script>
<style scoped lang="scss"></style>
