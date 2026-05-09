<script setup lang="ts">
import { ref, onMounted } from 'vue';
const ChevronLeftPath = '/src/assets/svg/chevron-left-svgrepo-com.svg';
const ChevronRightPath = '/src/assets/svg/chevron-right-svgrepo-com.svg';
const props = defineProps<{
  imagePaths: string[] | string;
  width?: string;
  height?: string;
}>();

// onMounted(() => {
//   getLargestDimensionsChildImages();
// });

onMounted(() => {
  console.log(props.width);
});

const propCarouselWidth = props.width;
const propCarouselHeight = props.height;
const propImagePaths = props.imagePaths;

type switchImageDirection = 'prev' | 'next' | number;

let currentImageId = 0;
let currentImagePath = ref('');
currentImagePath.value = props.imagePaths[0];

function switchImage(directionOrId: switchImageDirection) {
  if (directionOrId == 'prev') {
    if (currentImageId == 0) {
      currentImageId = props.imagePaths.length - 1;
    } else {
      currentImageId -= 1;
    }
  } else if (directionOrId == 'next') {
    if (currentImageId == props.imagePaths.length - 1) {
      currentImageId = 0;
    } else {
      currentImageId += 1;
    }
  } else {
    currentImageId = directionOrId;
  }
  currentImagePath.value = props.imagePaths[currentImageId];
}

function switchImagePrevious() {
  switchImage('prev');
}

function switchImageNext() {
  switchImage('next');
}

// function getLargestDimensionsChildImages() {
//   if (typeof propImagePaths != 'string') {
//     const img = new Image();
//     for (const currentPath in propImagePaths) {
//       img.src = require(currentPath);
//       img.onload = () => {
//         console.log(img.width);
//         console.log(img.height);
//       };
//     }
//   }
// }
</script>

<template>
  <div id="carousel-container">
    <div id="image-container">
      <img class="carousel-image" :src="currentImagePath" />
      <button class="chevron-button" id="prev-img-button" @click="switchImagePrevious">
        <img class="chevron" :src="ChevronLeftPath" />
      </button>
      <button class="chevron-button" id="next-img-button" @click="switchImageNext">
        <img class="chevron" :src="ChevronRightPath" />
      </button>
    </div>
    <div id="preview-selector">
      <img
        v-for="(image, index) in props.imagePaths"
        :src="image"
        :key="index"
        alt="test"
        @click="switchImage(index)"
      />
    </div>
  </div>
</template>

<style>
/* #carousel-container {
  width: v-bind(propCarouselWidth);
  height: v-bind(propCarouselHeight);
  /* overflow: hidden; 
  background-size: contain;
} */

.carousel-image {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.chevron-button {
  border: transparent;
  background-color: transparent;
  transition: 0.2s;
  opacity: 100%;
}

.chevron-button:hover {
  opacity: 30%;
}

#image-container {
  position: relative;
}

.image-carousel {
  background-size: contain;
  width: 60vw;
  height: 60vh;
}

#prev-img-button {
  position: absolute;
  top: 50%;
  left: 7%;
}

#next-img-button {
  position: absolute;
  top: 50%;
  right: 7%;
}

.chevron {
  height: 35px;
  background-color: rgb(127, 127, 127);
  width: auto;
}

#preview-selector {
  padding-top: 5px;
  display: flex;
  justify-content: start;
  overflow: scroll;
}

#preview-selector img {
  height: 90px;
  width: auto;
  margin: 0;
  margin-right: 5px;
  padding: 0;
}
</style>
