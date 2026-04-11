<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  </header>

  <RouterView />
</template>

<style>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
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
</style>
