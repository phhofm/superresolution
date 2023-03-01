---
title: JPEG Artifact Correction
description: Visual Comparison of compression artifact removal models
layout: doc
---

<script setup lang="ts">
import ImageSliderGithub from './components/imageslidergithub.vue' // the vue image slider example comparison component

//HTML5 Fullscreen API
const fullscreenEnabled = document.fullscreenEnabled; //check if fullscreen is possible
function enterFullscreen(elementName) {
  var element = document.getElementById(elementName);
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}

// reset button, to keep it simple this will reset all examples. This is simply because when entering fullscreen mode, dragging/moving the image out of view, and pressing esc, the image will have 'vanished' (not in view anymore) so i thought id add a reset button
import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
</script>

# Colorization

Colorization is the process of adding plausible color information to monochrome photographs:

![Example](../assets/images/colorization/showcase.webp)

The image inputs are photos of my grandfather, Willy Burri. He had passed away when my mother was around 12 years old.
  
## Portrait

<div id="portraitExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/colorization/input/portrait.webp' relativePathOutputFolder='colorization/portrait'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('portraitExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/colorization/input/portrait.webp)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/colorization/portrait)

  </p>
</details>

## Couple

<div id="coupleExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/colorization/input/couple.webp' relativePathOutputFolder='colorization/couple'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('coupleExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/colorization/input/couple.webp)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/colorization/couple)

  </p>
</details>