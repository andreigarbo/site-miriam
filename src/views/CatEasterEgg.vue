<script setup lang="ts">
import { loadCatMedia } from '../components/data.ts';
import ImageGrid from '../components/ImageGrid.vue';
const catMedia = loadCatMedia();

const gridPathObjects = catMedia.filter((mediaItem) => mediaItem.type == 'grid');
</script>

<template>
  <div id="visual-dev-grid">
    <div class="grid-content" v-for="item in gridPathObjects">
      <p class="grid-name">{{ item.name }}</p>
      <ImageGrid
        class="image-grid"
        :image-paths="item.src"
        :grid-template-map="item.gridTemplateMap"
      ></ImageGrid>
    </div>
  </div>
</template>

<style>
.grid-name {
  font-size: 2rem;
  text-align: center;
}
</style>
