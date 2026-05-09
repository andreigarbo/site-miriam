<script setup>
import { RouterLink, RouterView } from 'vue-router';
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
          <!-- <RouterLink to="/comics">Comics</RouterLink> -->
          <RouterLink to="/personalwork">Personal Work</RouterLink>
          <RouterLink to="/cv">CV</RouterLink>
        </nav>
        <a id="instagram-link" :href="InstagramPageRedirectLocation">
          <img src="/svg/Instagram_Glyph_Black.svg" />
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
html {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  position: relative;
  font-family: 'Federo Regular';
}

nav {
  width: 100%;
  text-align: center;
}

#main-header-content {
  display: flex;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

hr {
  /* display: block; */
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  width: 100%;
}

@media (min-width: 1200px) {
  nav {
    font-size: 16px;
  }

  header {
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    background-color: white;
    position: sticky;
    z-index: 1;
    top: 0;
  }

  nav a {
    padding: 0 1rem;
  }

  #instagram-link img {
    height: 25px;
    width: auto;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    font-size: 0.9rem;
  }
  nav a {
    padding: 0 0.5rem;
  }

  #instagram-link img {
    height: 18px;
    width: auto;
  }
}
</style>
