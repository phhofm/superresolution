---
title: Interpolation
description: Visual Comparison of interpolated models
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

# Interpolated Models

With chaiNNer we can create 'new models' by interpolating (combining the model weights of) two models that share a pretrained model ancestor as illustrated in the image below. I tried out combinations and are providing some the outputs and models here. Since a lot of these interpolated models seem to introduce a slight color shift, I used the average color fix on these outputs.

![Example](../assets/images/artifacts/tomandjerry.png)

You can download these interpolated models:
4xInt-Ultracri (UltraSharp + Remacri)
4xInt-Superscri (Superscale + Remacri)
4xInt-Siacri (Siax + Remacri)
4xInt-RemDF2K (Remacri + RealSR_DF2K_JPEG)
4xInt-RemArt (Remacri + VolArt)
4xInt-RemAnime (Remacri + AnimeSharp)
4xInt-RemacRestore (Remacri + UltraMix_Restore)
4xInt-AnimeArt (AnimeSharp + VolArt)

The combinations I had tried out so far:
Remacri + BSRGAN = RemacRGAN
Siax + Remacri = Siacri
Superscale + Remacri = Superscri
RealisticRescaler + Remacri = RealisticRemacri
UltraSharp + Remacri = Ultracri
RealisticRescaler + UltraSharp = RealisticSharp
Remacri + VolArt = RemArt
Remacri + AnimeSharp = RemAnime
AnimeSharp + VolArt = AnimeArt
RealisticRescaler + UltraMix_Restore = RealisticRestore
Remacri + RealSR_DF2K_JPEG = RemDF2K
RealisticRescaler + VolArt = RealisticArt
Struzan + Deviance = Struzance
Remacri + UltraMix_Restore = RemacRestore
BSRGAN + UltraMix_Restore = BSRestore
BSRGAN + RealisticRescaler = BSRescaler
Siax + BSRGAN = SiAN
  
## Tom And Jerry

<div id="tomandjerryExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/output/lossless/artifactsremoval/tomandjerry/input.jpeg' relativePathOutputFolder='output/lossless/artifactsremoval/tomandjerry'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('tomandjerryExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/output/lossless/artifactsremoval/tomandjerry/input.jpeg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/artifactsremoval/tomandjerry)

  </p>
</details>

## Gate 2

<div id="tomandjerryExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/output/lossless/artifactsremoval/gate2/input.jpeg' relativePathOutputFolder='output/lossless/artifactsremoval/gate2'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('tomandjerryExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/output/lossless/artifactsremoval/gate2/input.jpeg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/artifactsremoval/gate2)

  </p>
</details>