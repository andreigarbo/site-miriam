<script setup lang="ts">
import { ref } from 'vue';
import ImageCarousel from '../components/ImageCarousel.vue';

const folderAbrenhedCarousel = '/src/assets/images/visualdev/abrenhed';
const folderAsimpthomaCarousel = '/src/assets/images/visualdev/asimpthoma';

const test = [folderAbrenhedCarousel, folderAsimpthomaCarousel];

interface carousel {
  filePaths: string[];
}

interface carouselCollection {
  items: carousel[];
}

function populateCarouselObject(folderPath: string): Array<string> {
  const filePaths: Array<string> = [];
  const carouselPathObject = import.meta.glob(folderAbrenhedCarousel, {
    eager: true,
  });

  for (const key in carouselPathObject) {
    filePaths.push(key);
  }
  return filePaths;
}

const imagePaths = ref([
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
  '/src/assets/images/visualdev/dgnzdttd.png',
  '/src/assets/images/visualdev/esrgrgrg.png',
]);
</script>

<template>
  <ImageCarousel id="carousel" :image-paths="test"></ImageCarousel>
</template>

<style></style>
