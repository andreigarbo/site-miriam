<script setup>
import { ref } from 'vue';
const placeholderText = ref('Coming soon!');
</script>

<template>
  <p class="coming-soon-text">{{ placeholderText }}</p>
</template>

<style>
.coming-soon-text {
  text-align: center;
  font-size: 3rem;
}
</style>
