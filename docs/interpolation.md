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

With chaiNNer we can create 'new models' by interpolating (combining the model weights of) two models that share a pretrained model ancestor as illustrated in the image below. I tried out combinations and are providing some the outputs and models here. Since a lot of these interpolated models seem to introduce a slight color shift, I used the average color fix on all of these outputs.

![Example](../assets/images/interpolation/showcase.webp)

You can download these interpolated models:

[4xInt-Ultracri](https://drive.google.com/file/d/1l7cZSBq-sBMK9gVUG16pJEFcmSJxVu6h/view?usp=sharing) (UltraSharp + Remacri)  
[4xInt-Superscri](https://drive.google.com/file/d/1iy84HEvSJ_PctJmqggkpkrLB7Hbg2M2e/view?usp=sharing) (Superscale + Remacri)  
[4xInt-Siacri](https://drive.google.com/file/d/1VDyB-s6H3uJSQb8-KSmnbpojTr3iMWvc/view?usp=sharing) (Siax + Remacri)  
[4xInt-RemDF2K](https://drive.google.com/file/d/1iI8sHvB6PIGPbGhWEqxfi22LdxR7rRFT/view?usp=sharing) (Remacri + RealSR_DF2K_JPEG)  
[4xInt-RemArt](https://drive.google.com/file/d/16c1jtjLa8q5J4nQb215ag3QBqfw7RAG9/view?usp=sharing) (Remacri + VolArt)  
[4xInt-RemAnime](https://drive.google.com/file/d/1L-SV9Dg-GkJVxA5skMy3ZTIYj7UM3FPk/view?usp=sharing) (Remacri + AnimeSharp)  
[4xInt-RemacRestore](https://drive.google.com/file/d/19-CNzlTibBkk_pdyxKndgPnvLvpHn0oC/view?usp=sharing) (Remacri + UltraMix_Restore)  
[4xInt-AnimeArt](https://drive.google.com/file/d/1-tvb4VBTD2Nb-RvM9iickep_kGpW4Tur/view?usp=sharing) (AnimeSharp + VolArt)  
[2xInt-LD-AnimeJaNai](https://drive.google.com/file/d/1OQeESl-FeqdRSeaxZod7sBpflssapmHX/view?usp=sharing) (LD-Anime + AnimeJaNai)  
  
## Fate interpolated

<div id="fateExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/interpolated/fate'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/interpolated/fate)

  </p>
</details>