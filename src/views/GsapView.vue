<template>
  <div class="container">
    <div class="box"></div>
    <button class="bg-blue-400 border-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md ring-1 px-2 py-1" @click="play">play</button>
    <p>Animation State: {{ state }}</p>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import {ref} from 'vue'
function play() {
  let t1 = gsap.timeline({onComplete: animateFinsh, repeat: 1})
  // gsap.to('.box', 2, {x: 200, rotate: 90, repeat: 2, yoyo: true})
  t1.to('.box', 2, {x: 200}).to('.box', 2, {rotate: 90})
  t1.addLabel('mid', '+=1')
  t1.to('.box', 1, {scale: 1.5}, 'mid')
}

let state = ref('Before start')
function animateFinsh() {
  state.value = 'Complete'
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;

  
  background-color: red;
  
  border: 2px solid gray;

  border-radius: 25px;



}
</style>