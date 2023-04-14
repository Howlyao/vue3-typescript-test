<template>
  <div class="about">
    <h1 @click="showInfo" class="hover:bg-red-500">This is an about page</h1>
    <div class="container">
      <div v-for="i in 6" class="box-plane" :key="i" ref="boxes">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'


function showInfo(ev: MouseEvent): void {
  let el: HTMLElement = ev.target as HTMLElement;

  el.textContent = 'HH';

}


const boxes = ref([])

onMounted(() => {
  initCube()
})

function initCube() {
  console.log('init Cube')
  let size = 100
  let offset = size / 2
  let moveOffset = [
    [0, 0, offset],
    [0, 0, -offset],
    [-offset, 0, 0],
    [offset, 0, 0],
    [0, offset, 0],
    [0, -offset, 0],
  ];
  let rotate = [
   'rotateY(0)',
   'rotateY(-180deg)',
   'rotateY(-90deg)',
   'rotateY(90deg)',
   'rotateX(90deg)',
   'rotateX(-90deg)',

  ]



  let i = 0;
  for (let box of boxes.value) {
    let temp = box as HTMLElement;
    temp.style.transform = `translate3d(${moveOffset[i][0]}px, ${moveOffset[i][1]}px , ${moveOffset[i][2]}px) ${rotate[i]}`
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    temp.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    i++;
  }
}

</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


}

body {
}

.container {
  perspective: 800px;
  height: 500px;
  transform-style: preserve-3d;
  /* transform: rotateY(45deg); */
  position: relative;
}

.box-plane {
  position: absolute;
  
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  /* transform: translate3d(50px, 0, 0); */
  
}
</style>
