<script setup lang="ts">
const props = defineProps<{
  imagePaths: string[] | string;
  width?: string;
  height?: string;
  gridTemplateMap?: string[];
}>();

if (!props.gridTemplateMap) {
  throw new Error('Cannot build grid without template map');
}

const propGridTemplateString = props.gridTemplateMap.map((row) => `"${row}"`).join(' ');
console.log(propGridTemplateString);
</script>

<template>
  <div id="grid-container">
    <div
      class="grid-item"
      v-for="(item, index) in props.imagePaths"
      :style="{ 'grid-area': String.fromCharCode('a'.charCodeAt(0) + index) }"
    >
      <img :src="item" />
    </div>
  </div>
</template>

<style>
#grid-container {
  margin: auto;
  display: grid;
  grid-template-areas: v-bind(propGridTemplateString);
  width: 70vw;
  gap: 20px;
  height: auto;
}
.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
