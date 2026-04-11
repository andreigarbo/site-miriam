<script setup>
const props = defineProps(['videoId'])

if (!props.videoId) {
  console.log('Cannot Init video player with no id')
}
</script>

<template>
  <iframe
    width="100%"
    height="550"
    src="https://player.vimeo.com/video/{{ props.videoId }}"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen=""
  ></iframe>
</template>

<style></style>
