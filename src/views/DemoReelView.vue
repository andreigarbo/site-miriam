<script setup>
import VideoEmbedPlayer from '../components/VideoEmbedPlayer.vue';
</script>

<template>
  <div class="embed-player-wrapper">
    <VideoEmbedPlayer id="embed-player" videoId="ii3heKtbfC8" />
  </div>
</template>

<style>
@media only screen and (max-width: 600px) {
  #embed-player {
    width: 90vw;
    height: 50vh;
    display: block;
    margin: auto;
    text-align: center;
    padding-top: 5vh;
  }
}
@media (min-width: 600px) {
  .embed-player-wrapper {
    text-align: center;
    margin: auto;
    height: 60vh;
    width: 106vh;
    padding-top: 10vh;
  }
}
</style>
