<template>
  <b-col md="6">
    <div class="section-card info-account-card">
      <h1 class="text-center font-weight-light">Account information</h1>
      <hr class="w-100" />
      <b-container>
        <update-init />
        <update-email />
        <update-password />
      </b-container>
      <br />
      <div class="d-flex justify-content-center">
        <b-button variant="outline-danger" size="sm">Log Out</b-button>
      </div>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import UpdateEmail from './UpdateEmail.vue'
import UpdateInit from './UpdateInit.vue'
import UpdatePassword from './UpdatePassword.vue'
export default Vue.extend({
  components: { UpdatePassword, UpdateEmail, UpdateInit },
  name: 'AccountInfo',
  computed: {
    ...mapState(['user']),
  },
})
</script>

<style lang="scss" scoped>
.info-account-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
