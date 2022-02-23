<template>
  <div id="kitt" @click="handleEasterEgg">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <div class="six"></div>
    <div class="seven"></div>
    <div class="eight"></div>
    <div class="nine"></div>
    <div class="ten"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations(['handleEasterEgg']),
  },
})
</script>

<style>
#kitt {
  position: absolute;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  height: 100vh;
  z-index: 999;
  animation: 1s ease-in kittShow forwards;
}
.one,
.two,
.three,
.four,
.five,
.six,
.seven,
.eight,
.nine,
.ten {
  width: 120px;
  aspect-ratio: 1.5/1;
  background: red;
  margin: 0;
  display: inline-block;
  box-shadow: 0 0 30px red, inset 0 0 5px rgba(255, 255, 255, 0.5);
  border-radius: 7%;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.one {
  animation-name: first;
}
.two {
  animation-name: second;
}
.three {
  animation-name: third;
}
.four {
  animation-name: fourth;
}
.five {
  animation-name: fifth;
}
.six {
  animation-name: sixth;
}
.seven {
  animation-name: seventh;
}
.eight {
  animation-name: eighth;
}
.nine {
  animation-name: ninth;
}
.ten {
  animation-name: tenth;
}
/*  */
@keyframes kittShow {
  0% {
    background-color: rgb(94, 94, 94);
  }
  100% {
    background-color: black;
  }
}
@keyframes first {
  0% {
    opacity: 0.2;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes second {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes third {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.2;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fourth {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fifth {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sixth {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes seventh {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0.2;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes eighth {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0.2;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes ninth {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0.2;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes tenth {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
