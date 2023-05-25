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

### Intro

After creating this webpage, gathering 600+ model files and using them to create the examples here, I turned my attention towards learning how to train my own upscaling models. Since then I have trained some models myself, and on this page I have examples so these models can be compared. I also added these examples with all the model file outputs I have so these self-trained models can be compared with other official or community trained models.  

I included 4 examples, where the first image slider features my own trained models, and also the models I had interpolated. While the second image slider features all current models I have availabe so my trained models can be compared to all others (or I mean, others against others). Since this is the newest page these include all my newest acquired models like the [OmniSR](https://github.com/Francis0625/Omni-SR) ones which released just last month (meaning april 2023) and can be used with chaiNNer.  

You can find the model files and infos to my models on my [models github repo](https://github.com/phhofm/models). Models can also be tried out on the gradio space I made but since its running on a free cpu it might take a long time to upscale. Better to download and try those models out with chaiNNer, I recently made a youtube video on how to [install& use chaiNNer](https://www.youtube.com/watch?v=_r-nhJ_Cf1k) and also one on [how to train such models yourself](https://www.youtube.com/watch?v=l_tZE5l90VY).  

### Dearalice (27)
<br/>
<div id="dearaliceSelfExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/dearalice.png' relativePathOutputFolder='output/lossless/selftrained/own/dearalice' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('dearaliceSelfExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x248 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/dearalice.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/own/dearalice)

  </p>
</details>
<br/>

### Dearalice - All (686)
<br/>
<div id="dearaliceAllExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/dearalice.png' relativePathOutputFolder='output/lossless/selftrained/all/dearalice' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('dearaliceAllExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 800x248 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/dearalice.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/all/dearalice)

  </p>
</details>
<br/>

### Seeufer (27)
<br/>
<div id="seeuferSelfExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/seeufer.png' relativePathOutputFolder='output/lossless/selftrained/own/seeufer' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('seeuferSelfExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x375 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/seeufer.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/own/seeufer)

  </p>
</details>
<br/>

### Seeufer - All (686)
<br/>
<div id="seeuferAllExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/seeufer.png' relativePathOutputFolder='output/lossless/selftrained/all/seeufer' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('seeuferAllExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x375 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/seeufer.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/all/seeufer)

  </p>
</details>
<br/>

### Text (27)
<br/>
<div id="textSelfExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/text.png' relativePathOutputFolder='output/lossless/selftrained/own/text' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('textSelfExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x330 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/text.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/own/text)

  </p>
</details>
<br/>

### Text - All (686)
<br/>
<div id="textAllExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/text.png' relativePathOutputFolder='output/lossless/selftrained/all/text' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('textAllExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x330 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/text.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/all/text)

  </p>
</details>
<br/>

### Street (27)
<br/>
<div id="streetSelfExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/street.png' relativePathOutputFolder='output/lossless/selftrained/own/street' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('streetSelfExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x330 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/street.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/own/street)

  </p>
</details>
<br/>

### Street - All (686)
<br/>
<div id="streetAllExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/selftrained/street.png' relativePathOutputFolder='output/lossless/selftrained/all/street' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('streetAllExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 500x330 pixels

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/selftrained/street.png)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/selftrained/all/street)

  </p>
</details>
<br/>