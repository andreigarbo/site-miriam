<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import homeBannerSVG from '../assets/svg/cover.svg';

const InstagramPageRedirectLocation = 'https://www.instagram.com/misaki.cherry/';
const LinkedInRedirectLocation = 'https://linkedin.com/in/miriam-arvunescu-27b3bb2b2';
const MailToLink = 'mailto:miriam.arvunescu@gmail.com';

function addLinkToSVGElements() {
  const instagramLogoRect = document.querySelector('#instagram-logo');
  const mailToLogoRect = document.querySelector('#mail-logo');
  const linkedInLogoRect = document.querySelector('#linkedin-logo');

  if (instagramLogoRect instanceof HTMLElement) {
    instagramLogoRect.onclick = () => {
      location.href = InstagramPageRedirectLocation;
    };
  } else console.log(instagramLogoRect);
  if (mailToLogoRect instanceof HTMLElement) {
    mailToLogoRect.onclick = () => {
      location.href = MailToLink;
    };
  } else console.log(instagramLogoRect);
  if (linkedInLogoRect instanceof HTMLElement) {
    linkedInLogoRect.onclick = () => {
      location.href = LinkedInRedirectLocation;
    };
  } else console.log(instagramLogoRect);
}

onMounted(() => addLinkToSVGElements());
</script>

<template>
  <object id="main-greeting-image" :data="homeBannerSVG" />
</template>

<style>
@media (min-width: 600px) {
  #main-greeting-image {
    width: 65vw;
    height: auto;
    display: block;
    margin: auto;
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

#instagram-logo {
  border-style: solid;
  border-color: black;
  border-width: 10px;
}
</style>
