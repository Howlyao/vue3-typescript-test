<template>
  <div>
    <!-- viewBox="0 0 20 20" -->
    <svg width="200" height="200" version="2.0" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="30" height="30" stroke="red" fill="transparent" />
      <path d="M10 10 H 90 V 90 H 10 L 10 10" fill="transparent" stroke="black" />
      <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent" />
    </svg>
    <div class="h-40 w-40 bg-gray-600 box">
      <div class="h-20 w-20 bg-blue-800 mx-auto mt-4"></div>
    </div>
    <div class="box-container">
      <div class="box-item"></div>
    </div>
    <div class="triangle"></div>
    <label class="inline-block bg-blue-500 ring-1 ring-gray-500 hover:bg-blue-600 active:bg-blue-700 p-2 rounded-2xl"
      for="photo">Take Photos</label>
    <input id="photo" class="hidden" type="file" accpet="image/*" capture="environment">
    <img class="w-20 h-20" ref="img"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

let img = ref()
onMounted(() => {
  let fileInput: any = document.getElementById('photo')
  // let img: any = document.getElementsByTagName('img')[0]

  fileInput?.addEventListener('change', () => {
    let file = fileInput?.files[0]
    img.value.src = URL.createObjectURL(file)
    // console.log(file)
  })
})
</script>

<style lang="scss" scoped>
.box {
  display: flow-root;
}

.box-container {
  width: 200px;
  height: 100px;
  background-color: gray;
  border: 1px solid black;
}

.box-item {
  width: 40px;
  height: 200px;
  background-color: aqua;
  float: left;
}

.triangle {
  width: 50px;
  max-width: 20px;
  height: 100px;
  background-color: blue;
  border-top: 40px solid gray;
  border-left: 40px solid yellow;
  border-right: 40px solid transparent;
  border-bottom: 40px solid black;
}
</style>