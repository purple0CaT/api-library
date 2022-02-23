<template>
  <section class="account-section">
    <div class="account-bg"></div>
    <h1 class="section-header font-weight-light mt-3">
      Hello, {{ user.firstName }}!
    </h1>
    <b-row class="w-100" style="z-index: 10">
      <APICard />
      <AccountInfo />
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import AccInfo from '~/components/Account/AccInfo.vue'
import APICard from '../../components/Account/APICard.vue'
import AccountInfo from '../../components/Account/AccInfo.vue'

export default Vue.extend({
  name: 'Account',
  components: { APICard, AccInfo, AccountInfo },
  computed: {
    ...mapState(['user']),
  },
  created() {
    if (!this.user.id) {
      this.$router.push('/')
    }
  },
})
</script>

<style scoped lang="scss">
.account-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 3rem);
}
.account-bg {
  position: absolute;
  inset: 0 0 0 0;
  z-index: 0;
  background: url(/brain.png) center repeat;
  // background-size: contain;
  animation: 5s linear infinite bgShadowAnim;
}
@keyframes bgShadowAnim {
  0% {
    filter: drop-shadow(0 0 5px white);
  }
  25% {
    filter: drop-shadow(0 0 5px rgb(255, 87, 87));
  }
  50% {
    filter: drop-shadow(0 0 5px rgb(87, 255, 219));
  }
  75% {
    filter: drop-shadow(0 0 5px rgb(193, 87, 255));
  }
  100% {
    filter: drop-shadow(0 0 5px white);
  }
}
</style>
