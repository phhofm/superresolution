---
title: Face Restoration
description: Visual Comparison of face restoration models
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

# Face Restoration

Face Restoration Models are meant to restore faces after an upscale because they often come out a little weird. Here I simply use some upscales and then run the face restoration model on them so you can compare which restoration model you like best.  
  
PS It seems like the "GFPGANCleanv1-NoCE-C" model and the "GFPGANv1.2" model are interchangeable (same output). Outputs have been saved in lossy jpg so compression occurred.

### Details

  Creation Date: 17. Nov 2022  
  Models used: 6  
  Set Name: 'Face Restoration'

  <details>
    <summary>Models List</summary>

    GFPGANCleanv1-NoCE-C2
    GFPGANv1.2
    GFPGANv1.3
    GFPGANv1.4
    RestoreFormer
    CodeFormer
  </details>

## Buddy

The input is the buddy example, the SwinIR-L taken from the 'Favorites' page. CodeFormer has been run with fidelity iteration set in 0.1 steps

<div id="buddyExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/facerestoration/buddy/input/SwinIR-L.jpg' relativePathOutputFolder='facerestoration/buddy/output'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('buddyExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

  Creation Date: 17. Nov 2022

  Original Input Image: 480x320 pixels

  Scaling Factor: 4

  Upscale Model: SwinIR-L

  Input Image: 1920x1280 pixels

  Output Image: 1920x1280 pixels

  Type: Photo

  Image Files: [Github Repo](https://github.com/Phhofm/upscale/tree/sources/facerestoration/buddy)

  </p>
</details>

## Woman

This input is the img_005 from the Set5 dataset, specifically the version here: <https://github.com/jbhuang0604/SelfExSR/blob/master/data/Set5/image_SRF_4/img_005_SRF_4_LR.png>, upscaled 4x with SwinIR-L.

<div id="womanExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/facerestoration/woman/input/SwinIR-L.jpg' relativePathOutputFolder='facerestoration/woman/output'/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('womanExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

Just to be aware that such an effect might happen, if we go too low with CodeFormers fidelity in this example, the hat gets messed up:

![Teeth](../assets/images/facerestoration/facerestoration_codeformer_teeth.gif)  

<details>
  <summary>Details</summary>
  <p>

  Creation Date: 17. Nov 2022

  Original Input Image: 57x86 pixels

  Scaling Factor: 4

  Upscale Model: LDSR (100 steps)

  Input Image: 228x344 pixels

  Output Image: 228x344 pixels

  Type: Photo

  Image Files: [Github Repo](https://github.com/Phhofm/upscale/tree/sources/facerestoration/woman)

  </p>
</details>
