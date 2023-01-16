---
title: Deblurring
description: Visual Comparison of deblurring models
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

# Deblurring

Deblurring is the process of removing blur from an image as shown in this example:

![Example](../assets/images/deblur/deblur_example.jpg)  

PS Outputs have been saved in lossy jpg so compression occurred

### Details

  Creation Date: 24. Nov 2022  
  Last Update: 25. Nov 2022  
  Models used: 23
  Set Name: 'Deblur'  

  <details>
    <summary>Models List</summary>

      1x-Focus  
      1x-Focus_Moderate  
      1x_ArtClarity  
      1x_ArtClarity_strong  
      1x_DeBLR  
      1x_Fatality_DeBlur_270000_G  
      1x_mdeblur  
      1x_PixelSharpen_100000  
      1x_ReFocus_Cleanly_100000_G  
      1x_ReFocus_V3_140000_G  
      1x_ThePi7on-Solidd_Deborutify_UltraLite_260k_G  
      1x_UnResize_V3_200000_G  
      IFAN  
      Restormer_Defocus_Deblur  
      Restormer_Motion_Deblurring  
      MAXIM_GoPro  
      MAXIM_RealBlur_J  
      MAXIM_RealBlur_R  
      MAXIM_REDS  
      NAFNet_GoPro  
      NAFNet_REDS  
      DeblurGANv2_MobileNet  
      DeblurGANv2_InceptionResNet-v2  

  </details>

## GoPro

These three example images are taken from the [GoPro Large Testset](https://seungjunnah.github.io/Datasets/gopro). GOPRO_Large dataset is proposed for dynamic scene deblurring. Training and Test set are publicly available.

### Example 1

<div id="firstExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/deblur/GOPRO_Large/test/GOPR0384_11_00/000001.jpg' relativePathOutputFolder='deblur/GOPRO_Large/test/GOPR0384_11_00/output'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('firstExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

  Creation Date: 24. Nov 2022
  Last Update: 25. Nov 2022  
  Image Dimensions: 1280x720 pixels  
  Type: Frame  
  Image Files: [Github Repo](https://github.com/Phhofm/upscale/tree/sources/deblur/GOPRO_Large/test/GOPR0384_11_00)

  </p>
  </details>

### Example 2

<div id="secondExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/deblur/GOPRO_Large/test/GOPR0862_11_00/000004.jpg' relativePathOutputFolder='deblur/GOPRO_Large/test/GOPR0862_11_00/output'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('secondExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

  Creation Date: 24. Nov 2022  
  Last Update: 25. Nov 2022  
  Image Dimensions: 1280x720 pixels  
  Type: Frame  
  Image Files: [Github Repo](https://github.com/Phhofm/upscale/tree/sources/deblur/GOPRO_Large/test/GOPR0862_11_00)

  </p>
  </details>

### Example 3

<div id="thirdExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/deblur/GOPRO_Large/test/GOPR0881_11_01/000202.jpg' relativePathOutputFolder='deblur/GOPRO_Large/test/GOPR0881_11_01/output'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('thirdExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

  Creation Date: 24. Nov 2022  
  Last Update: 25. Nov 2022  
  Image Dimensions: 1280x720 pixels  
  Type: Frame  
  Image Files: [Github Repo](https://github.com/Phhofm/upscale/tree/sources/deblur/GOPRO_Large/test/GOPR0881_11_01)

  </p>
  </details>
