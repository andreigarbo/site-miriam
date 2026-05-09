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
@media (min-width: 600px) {
  #grid-container {
    margin: auto;
    display: grid;
    grid-template-areas: v-bind(propGridTemplateString);
    width: 70vw;
    gap: 20px;
    height: auto;
  }
}
@media only screen and (max-width: 600px) {
  #grid-container {
    display: flex;
    flex-direction: column;
  }
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* img:hover {
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%) scale(1);
  width: auto;
  height: 80vh;
} */
</style>
