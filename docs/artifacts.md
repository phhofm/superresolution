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

# JPEG Artifact Correction

Correction of visual artifacts caused by JPEG compression, these artifacts are usually grouped into three types: blocking, blurring, and ringing. They are caused by quantization and removal of high frequency DCT coefficients:

![Example](../assets/images/artifacts/tomandjerry.png)

The image inputs are taken from the [Huggingface FBCNN](https://huggingface.co/spaces/danielsapit/JPEG_Artifacts_Removal) page, from the example images.
  
## Tom And Jerry

<div id="tomandjerryExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/output/lossless/artifactsremoval/tomandjerry/input.webp' relativePathOutputFolder='output/lossless/artifactsremoval/tomandjerry'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('tomandjerryExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/output/lossless/artifactsremoval/tomandjerry/input.webp)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/artifactsremoval/tomandjerry)

  </p>
</details>

## Gate 2

<div id="gate2Example">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/output/lossless/artifactsremoval/gate2/input.webp' relativePathOutputFolder='output/lossless/artifactsremoval/gate2'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('gate2Example')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/output/lossless/artifactsremoval/gate2/input.webp)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/artifactsremoval/gate2)

  </p>
</details>