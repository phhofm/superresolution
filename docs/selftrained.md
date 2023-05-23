---
title: Self-Trained Models
description: Visual Comparison of Self Trained Models
layout: doc
outline: [2, 4]
---

<script setup lang="ts">
import ImageSliderGithub from './components/imageslidergithubfilterable.vue' // the vue image slider example comparison component

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

# Self-Trained Models

After creating this webpage, gathering 600+ model files and using them to create the examples here, I turned my attention towards learning how to train my own upscaling models. Since then I have trained some models myself, and on this page I have examples so these models can be compared. I also added these examples with all the model file outputs I have so these self-trained models can be compared with other official or community trained models.

Since this is the newest page I included filterable dropdowns (so you can type in the model name you want to find) and also make use of some new networks like [OmniSR]() which released just last month (meaning april 2023) and can be used with chaiNNer.
You can find the model files and infos to my models on my [models github repo](https://github.com/phhofm/models). Models can also be tried out on the gradio space I made but since its running on a free cpu it might take a long time to upscale. Better to download and try those models out with chaiNNer, I recently made a youtube video on how to [install& use chaiNNer](https://www.youtube.com/watch?v=_r-nhJ_Cf1k) and also one on [how to train such models yourself](https://www.youtube.com/watch?v=l_tZE5l90VY).

### Models from my repo

<br/>

#### Buddy

<div id="buddyExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/buddy.jpg' relativePathOutputFolder='output/lossless/photos/buddy' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('buddyExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/photos/buddy.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/photos/buddy)

  </p>
</details>

### All model outputs

<br/>

#### Buddy

<div id="buddyExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/buddy.jpg' relativePathOutputFolder='output/lossless/photos/buddy' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('buddyExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/photos/buddy.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/photos/buddy)

  </p>
</details>