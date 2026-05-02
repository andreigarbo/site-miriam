<script setup>
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue';
const imagePaths = ref([
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  "/src/assets/images/visualdev/dgnzdttd.png", 
  "/src/assets/images/visualdev/esrgrgrg.png",
  ]);
</script>

<template>
  <ImageCarousel id="carousel" :image-paths="imagePaths"></ImageCarousel>
</template>

<style>
</style>
