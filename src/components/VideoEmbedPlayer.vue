<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <iframe
    v-if="videoId"
    title="YouTube video player"
    height="100%"
    width="100%"
    frameborder="0"
    :src="`https://www.youtube.com/embed/${props.videoId}`"
    allow="
      accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture;
      web-share;
    "
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<style></style>
