<script setup>
import { RouterLink, RouterView } from 'vue-router';
const InstagramLogo = '/src/assets/svg/Instagram_Glyph_Black.svg';
const InstagramPageRedirectLocation = 'https://www.instagram.com/misaki.cherry/';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/visualdev">Visual Development</RouterLink>
      <RouterLink to="/demoreel">Demo Reel</RouterLink>
      <RouterLink to="/comics">Comics</RouterLink>
      <RouterLink to="/personalwork">Personal Work</RouterLink>
      <RouterLink to="/cv">CV</RouterLink>
    </nav>
    <a id="instagram-link" :href="InstagramPageRedirectLocation">
      <img :src="InstagramLogo" />
    </a>
  </header>

  <RouterView />
</template>

<style>
@font-face {
  font-family: 'Federo Regular';
  src: url('/src/assets/fonts/Federo-Regular.ttf');
}

header {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

body {
  font-family: 'Federo Regular';
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  height: 5vh;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

#instagram-link img {
  height: 25px;
  width: auto;
  margin-top: -20px;
}
</style>
