<script setup lang="ts">
import { onMounted } from 'vue';
import homeBannerSVGRaw from '../assets/svg/cover.svg?raw';

const InstagramPageRedirectLocation = 'https://www.instagram.com/misaki.cherry/';
const LinkedInRedirectLocation = 'https://linkedin.com/in/miriam-arvunescu-27b3bb2b2';
const MailToLink = 'mailto:miriam.arvunescu@gmail.com';

function addLinkToSVGElements() {
  const instagramLogoRect = document.querySelector('#instagram-logo-rect');
  const mailToLogoRect = document.querySelector('#mail-logo-rect');
  const linkedInLogoRect = document.querySelector('#linkedin-logo-rect');

  if (instagramLogoRect instanceof SVGElement) {
    instagramLogoRect.onclick = () => {
      location.href = InstagramPageRedirectLocation;
    };
  }

  if (mailToLogoRect instanceof SVGElement) {
    mailToLogoRect.onclick = () => {
      location.href = MailToLink;
    };
  }

  if (linkedInLogoRect instanceof SVGElement) {
    linkedInLogoRect.onclick = () => {
      location.href = LinkedInRedirectLocation;
    };
  }
}

onMounted(() => addLinkToSVGElements());
</script>

<template>
  <div id="main-greeting-image">
    <div v-html="homeBannerSVGRaw" id="main-greeting-svg"></div>
  </div>
</template>

<style>
#main-greeting-svg {
  display: block;
  margin: auto;
}

@media (min-width: 600px) {
  #main-greeting-image {
    width: 65vw;
    height: auto;
    display: block;
    margin: auto;
    /* display: inline-block; */
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  #main-greeting-image {
    width: 90vw;
    margin: 0;
    border: 0;
    padding: 0;
    height: auto;
    display: block;
    margin: auto;
  }
}
</style>
