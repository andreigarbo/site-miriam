<script setup lang="ts">
import { ref } from 'vue';
import fs from 'fs';
import ImageCarousel from '../components/ImageCarousel.vue';
import { loadVisualDevMedia } from '../components/data.ts';

const visualDevMedia = loadVisualDevMedia();
</script>

<template>
  <div id="visual-dev-grid">
    <div class="carousel-content" v-for="item in visualDevMedia">
      <p class="carousel-name">{{ item.name }}</p>
      <ImageCarousel
        class="image-carousel"
        :image-paths="item.src"
        :width="item.width"
        :height="item.height"
      ></ImageCarousel>
    </div>
  </div>
</template>

<style>
.image-carousel {
  padding-bottom: 20px;
}

.carousel-name {
  font-size: 2rem;
  text-align: center;
}

.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
