<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

//自适应 40px => 0.40rem 
const WIDTH = 750;
const setView = () => {
  document.documentElement.style.fontSize = (100 * screen.width) / WIDTH + 'px';

  // vh to px
  document.documentElement.style.setProperty('--width', String(100 / WIDTH))
  // height: calc(28vw * var(--width))
}
onMounted(() => {

  // window.onorientationchange = setView
  // setView()
})

// px to vw
// 100 / 750 * 40

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tailwind-css">Tailwind CSS</RouterLink>
        <RouterLink to="/svg-test">SVG</RouterLink>
        <RouterLink to="/echarts-test">Echarts</RouterLink>
        <RouterLink to="/gsap-test">GSAP</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
