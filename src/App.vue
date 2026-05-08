<script setup>
import { RouterLink, RouterView } from 'vue-router';
const InstagramLogo = '/src/assets/svg/Instagram_Glyph_Black.svg';
const InstagramPageRedirectLocation = 'https://www.instagram.com/misaki.cherry/';
</script>

<template>
  <header>
    <div id="header-div">
      <div id="main-header-content">
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
      </div>
      <hr />
    </div>
  </header>

  <div id="main-site-content">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: 'Federo Regular';
  src: url('/src/assets/fonts/Federo-Regular.ttf');
}

body {
  position: relative;
}

#main-header-content {
  display: flex;
}

header {
  align-items: center;
  padding-top: 2rem;
  background-color: white;
  position: sticky;
  z-index: 1;
  top: 0;
}

body {
  font-family: 'Federo Regular';
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

nav a {
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
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
</style>
