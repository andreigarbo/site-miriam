<script setup lang="ts">
import { ref, computed } from 'vue';
import fs from 'fs';
import ImageCarousel from '../components/ImageCarousel.vue';
import { loadVisualDevMedia } from '../components/data.ts';
import ImageGrid from '../components/ImageGrid.vue';

const visualDevMedia = loadVisualDevMedia();

const gridPathObjects = visualDevMedia.filter((mediaItem) => mediaItem.type == 'grid');
const carouselPathObjects = visualDevMedia.filter((mediaItem) => mediaItem.type == 'carousel');
</script>

<template>
  <div id="visual-dev-grid">
    <div class="grid-content" v-for="item in gridPathObjects">
      <p class="carousel-or-grid-name">{{ item.name }}</p>
      <ImageGrid
        class="image-grid"
        :image-paths="item.src"
        :grid-template-map="item.gridTemplateMap"
      ></ImageGrid>
    </div>
    <div class="carousel-content" v-for="item in carouselPathObjects">
      <p class="carousel-or-grid-name">{{ item.name }}</p>
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

.carousel-or-grid-name {
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
