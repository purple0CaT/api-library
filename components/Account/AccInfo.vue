<template>
  <b-col md="6">
    <div class="section-card info-account-card">
      <h1 class="text-center font-weight-light">Account information</h1>
      <hr class="w-100" />
      <div class="d-flex justify-content-around">
        <h4 class="font-weight-light">
          <small>Name:</small> {{ user.firstName }}
        </h4>
        <h4 class="font-weight-light">
          <small>Surname:</small> {{ user.lastName }}
        </h4>
      </div>
      <br />
      <div class="d-flex justify-content-around">
        <h4 class="font-weight-light m-0">
          <small class="text-muted">Email: </small>{{ user.email }}
        </h4>
        <b-button size="sm" variant="outline-info">Update Email</b-button>
      </div>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
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
