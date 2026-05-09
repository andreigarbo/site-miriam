<script setup lang="ts">
import { ref } from 'vue';
const ChevronLeftPath = '/src/assets/svg/chevron-left-svgrepo-com.svg';
const ChevronRightPath = '/src/assets/svg/chevron-right-svgrepo-com.svg';
const props = defineProps<{
  imagePaths: string[] | string;
  width?: string;
  height?: string;
}>();

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
        @click="switchImage(index)"
      />
    </div>
  </div>
</template>

<style>
#carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chevron-button {
  border: transparent;
  background-color: transparent;
  transition: 0.2s;
  opacity: 100%;
}

.chevron {
  background-color: rgb(127, 127, 127);
  width: auto;
}

#prev-img-button {
  position: absolute;
  top: 50%;
  left: 7%;
}

#image-container {
  position: relative;
}

#next-img-button {
  position: absolute;
  top: 50%;
  right: 7%;
}

.carousel-image {
  background-size: cover;
  display: block;
  margin: auto;
}

@media (min-width: 600px) {
  .chevron-button:hover {
    opacity: 30%;
  }

  .chevron {
    height: 2rem;
  }

  #preview-selector {
    padding-top: 5px;
    display: flex;
    justify-content: start;
    overflow: scroll;
  }

  .carousel-image {
    max-width: 80vw;
    max-height: 60vh;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #preview-selector img {
    height: 90px;
    width: auto;
    margin: 0;
    margin-right: 5px;
    padding: 0;
  }
}

@media only screen and (max-width: 600px) {
  .chevron {
    height: 1rem;
  }

  .carousel-image {
    max-width: 90vw;
    max-height: 60vh;
    width: auto;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #preview-selector {
    height: 5vh;
    padding-top: 5px;
    display: flex;
    width: 80vw;
    justify-content: start;
    overflow: scroll;
  }

  #preview-selector img {
    margin: 0;
    margin-right: 5px;
    padding: 0;
  }
}
</style>
