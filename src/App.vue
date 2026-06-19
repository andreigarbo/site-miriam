<script setup lang="ts">
import { onMounted } from 'vue';
import { reportAnalyticsData } from './components/analytics';
import { RouterLink, RouterView } from 'vue-router';

onMounted(() => reportAnalyticsData());
</script>

<template>
  <header>
    <div id="header-div">
      <div id="main-header-content">
        <nav>
          <RouterLink class="header-router-link" to="/">
            <div id="logo-animation-container">
              <div id="logo-animation"></div>
            </div>
          </RouterLink>
          <RouterLink class="header-router-link" to="/visualdev">Visual Development</RouterLink>
          <RouterLink class="header-router-link" to="/demoreel">Demo Reel</RouterLink>
          <RouterLink class="header-router-link" to="/personalwork">Personal Work</RouterLink>
          <RouterLink class="header-router-link" to="/professionalwork"
            >Professional Work</RouterLink
          >
          <RouterLink class="header-router-link" to="/comics">Comics</RouterLink>
        </nav>
      </div>
      <hr />
    </div>
  </header>

  <div id="main-site-content">
    <RouterView />
  </div>

  <div id="footer"></div>
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

#footer {
  height: 150px;
  width: 100%;
}

nav {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;
}

#main-header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;
}

.header-router-link {
  align-self: center;
  justify-self: center;
}

#logo-animation {
  width: 500px;
  height: 500px;
  display: block;
  /* align-self: flex-start; */
  background: transparent url('/images/logo/spritesheet.png') 0 0 no-repeat;
  animation: moving-logo 1s steps(9) infinite;
}

@keyframes moving-logo {
  from {
    background-position: 0px;
  }
  to {
    background-position: -4500px;
  }
}

#logo-container img {
  width: 100%;
}

nav a {
  font-size: 1.3rem;
}

nav a.router-link-exact-active {
  color: var(--text-pink-color);
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

@media (min-width: 600px) {
  nav {
    font-size: 16px;
  }

  #logo-animation-container {
    width: 100px;
    height: 100px;
  }

  #logo-animation {
    transform: translate(-40%, -40%) scale(0.2);
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
    height: 16vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  #logo-animation-container {
    width: 50px;
    height: 50px;
  }

  #logo-animation {
    transform: translate(-45%, -45%) scale(0.1);
  }

  nav a {
    padding: 0;
    font-size: 1.1rem;
  }

  #instagram-link img {
    height: 18px;
    width: auto;
    padding-right: 3vw;
  }

  #main-header-content {
    align-items: center;
  }
}
</style>
