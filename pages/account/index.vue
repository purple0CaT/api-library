<template>
  <Kitt v-if="easter_egg" />
  <section v-else class="account-section">
    <div class="account-bg"></div>
    <h1 class="section-header font-weight-light mt-3">
      Hello,
      <span @click="showEasterEgg" style="cursor: pointer">
        {{ user.firstName }}!
      </span>
    </h1>
    <b-row class="w-100" style="z-index: 10">
      <APICard />
      <AccountInfo />
    </b-row>
  </section>
</template>

<script lang="js">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import AccInfo from '~/components/Account/AccInfo.vue'
import APICard from '../../components/Account/APICard.vue'
import AccountInfo from '../../components/Account/AccInfo.vue'
import Kitt from '../../components/KITT/Kitt.vue'

// Client side code, browser only
   let kitt_theme = null
 if(typeof Audio != "undefined") {
      kitt_theme = new Audio('/knight_rider.mp3')
}

export default Vue.extend({
  name: 'Account',
  components: { APICard, AccInfo, AccountInfo, Kitt },
  computed: {
    ...mapState(['user', 'easter_egg']),
  },
  methods: {
    ...mapMutations(['handleEasterEgg']),
    showEasterEgg() {
      this.handleEasterEgg()
      kitt_theme.volume = 0.2
      kitt_theme.currentTime = 0;
      kitt_theme.loop = true
      kitt_theme.play()
    },
  },
  created() {
    if (!this.user.id) {
      this.$router.push('/')
    }
  },
  destroyed(){
    this.handleEasterEgg()
    kitt_theme.pause()
  },
  watch: {
    easter_egg: function (newEgg, oldEgg) {
      if (!newEgg) {
        kitt_theme.pause()
      }
    },
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
