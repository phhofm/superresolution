---
title: Changelog
description: Updates List
layout: doc
---

# Changelog

### 2. März 2023

- Add link to filterable version (can search for models in the example outputs like 'Remacri' etc) to the multiple models page
- Add Colorization Page
  - BigColor
  - DeOldify Stable, Artistic and MyHeritage versions
- Add Interpolated Models Page
  - Provide some 8 interpolated models as downloads
  - Add fate interpolated (average color correction used) example (92 lossless webp images, 193.8MB)

- Reduce Repo Size - it is was 69.8GB on disk -> now its GB. This website contains currently 15'629 images.
  - Convert/Compress 9533 lossless png outputs to lossless webp with compression method 6 (WEBP features the best lossless compression currently with wide browser support. JPEG XL would have been even better, but no browser support. AVIF is extremely bad in regards to lossless compression. OxiPNG also produced bigger filesizes than lossless WEBP.) -> went from 23.7 GB (lossless pngs) to 16.2 GB (compressed to lossless webp)
  <!--   - The .git folder(/history) itself was 42.8GB which makes 70% of the whole repo size (primarily caused by those binary blobs because no diffing supported on media files) -->
    <!--       - Used BFG Repo-Cleaner to delete image media files (and the generated json files) from the commit history. Brought the .git folder size down to X GB -->

### 28. Jan 2023

- Favorites Page
  - add RealisticRescaler to landscape favs
  - Add AI generated recommendation (life and colorjacket)
  - Add Subpage recommendations
    - deblur
    - denoise
    - jpeg artifact correction

### 23. Jan 2023

- Add more ai generated examples (outputs) to the multiple models page:
  - ColorJacket
  - Astronaut
  - Planet
  - Life
  - ColorScape
  - Door
  - CyberpunkRebel
  - YellowRoom

### 19. Jan 2023

- Add JPEG Artifact Correction Page
- Add Realistic Rescaler Model Outputs

### 17. Jan 2023

- Favorites
  - Add 4xLDSR_blended output to show that GFPGAN and CodeFormer can also be used/blended together
- Multiple Models
  - Add ART (Accurate Image Restoration with Attention Retractable Transformer) 4x SR outputs for the photos and anime examples

### 12. Jan 2023

- Update Multiple Models Page
  - Add lossless examples
  - Add fullscreen functionality to all examples
  - Separation into lossless, lossy and Sets, side menu 'on this page' level adjust
  - Update text
  - Change set order newest to oldest
- Changelog
  - Change order newest to oldest

### 09. Jan 2023

- Images - Favorites page update
  - Lossless examples with models selection, with fullscreen and reset button
  - Add simple reccommendation per example for an upscaling model to use

### 19. Dec 2022

- Externalize image source files, not bundled into app anymore but load directly from github folders through github links (reduce bundle size because of github pages artifacts size limit (deploy abort because of timeout error) and also bundle/deploy times (shot up from ~8 min to >30min when bundling image sources) reduction). Also important if more files are added in the future. For the externalized sources folder the image sources files have been re-imported from commit 70420bd136c31e26c6bba8cf19e8d630848dc67e to make sure the image files are from before I had bundled and overdone it with compression (so to get the output files I got when running chaiNNer with JPG 100% output, still lossy though since jpg format) - added anime examples from later states again
  - Adapt component, load files from github links (raw.githubusercontent.com)
  - Adapt source links for examples (externalized source folder)

### 17. Dec 2022

- Images - Multimodels
  - Replace photo and ai-generated example source files.
  - Fix file links (input and output source files) for these examples

### 16. Dec 2022

- Images - Multimodels

  - Replace anime example source files.

  Based on feedback, I had overdone it with image compression (mozjpeg) (for page speed reasons) which led to artifacts appearing on all images. Reverted those back to the original jpg 100% output files I still have, additionally compressed with fileoptimizer. Will need to do the same for the other examples. I might redo all the upscales, but with a lossless image format output (either PNG (together with oxiPNG maybe or fileoptimizer again) or WEBP Lossless).

### 15. Dec 2022

- Images - Update Multimodels Page
  - Restructure Page, current (now updatable) examples on Top
  - Current examples redone in own Vue Image comparison component with vue select and fore rerender component when selection happens so that multi-image comparison is possible. The list is built by traversing the folders with nodejs and saving filenames and paths in a data.json file so the frontend can use it on page load, the images get bundled with the application. Now I can simply manage files and these examples will keep themselves updated with each new build (drag&dropping 300+ images through the imgsli website to update a single example is now in the past). With the new comparison component it is simpler to drag the image around than to try to hit the middle slider to move it around. With the mouse wheel one can zoom in up to a hardcoded limit.
  - Added AI Generated Images examples with vue component
  - Added Anime examples with the vue component. Models from the 'Anime' Section in the Upscale Wiki Model Database have been used additionally.
- Images - Remove single model pages
- Images - Models used page is now also automatically generated thorugh traversing files in some example directories since I generally named the output files according to the model used
- Images - update all examples from imgsli to new local vue component
- Images - Bundle all image sources files inside the app

### 01. Dec 2022

- Images - Update Multimodel Page with [Set 5](multimodels.md#set-5)
  - Add Set 5 Photo [Buddy example](multimodels.md#buddy-2)
    - Add HAT versions, Real_HAT_GAN_SRx4 was just released a week ago on 24 Nov 2022
    - Add Swin2SR versions which released 27 Sept 2022
    - Add FeMaSE which released Oct 2022
    - Add LBNet which released Mai 2022
    - Add Poll (Voting for best results)
    - P.S. just as info "ruDALL-E-SR" is the re-trained version of Real-ESRGAN with custom dataset by Igor Pavlov which is used by ruDALL-E [Repo1](https://github.com/chenxwh/rudalle-sr) [Repo2](https://github.com/ai-forever/Real-ESRGAN) [Model](https://drive.google.com/drive/folders/16PlVKhTNkSyWFx52RPb2hXPIQveNGbxS)
  - Add Community Top 5 page template
  - Add Set 5 Photo [Grosser Mythen example](multimodels.md#grosser-mythen)
  - Add Set 5 Photo [Painting example](multimodels.md#painting-1)
  - Add Set 5 Photo [PC Build example](multimodels.md#pc-build-1)
  - Add Set 5 Photo [Snowboard example](multimodels.md#snowboard)

### 25. Nov 2022

- Images - Update Deblurring Page
  - Add DeblurGANv2_MobileNet
  - Add DeblurGANv2_InceptionResNet-v2

### 24. Nov 2022

- Images - Add Deblurring Page
  - Add three GoPro examples
- Add Image Files Links for Deblurring, Denoise, Face Restoration and Favorites Page in details

### 20. Nov 2022

- Images - Add Denoise Page
  - Add Directions example
  - Add Stefantiek example

### 17. Nov 2022

- Images - Face Restoration Page
  - Remove duplicate examples
  - Add CodeFormer
  - Add additional woman example
- Add Changelog Page

### 4. November 2022 

- Create github repo
- Add/Upload source files for this website and add the first examples

### 1. November 2022 

- Decided on the VitePress framework for this project since it seemed new and interesting to try out. Created the VitePress Site and started to work on it.

--- BACKGROUND / PRE WEBSITE ---

### 22. October 2022 

- Created my first reddit post on comparing esrgan upscaling models (had created and commented on some more upscaling posts since then)

### 6. October 2022 

- Uploaded a Youtube video where I compared universal esrgan models (also created videos about upscaling images and videos and about retexturing an old game called Freedoom with stable diffusion, generating instead of upscaling textures)

### August/September

I watched a youtube video about upscaling the images I had created with MidJourney. In this video chaiNNer was suggested together with the UltraSharp model. This got me into the upscaling topic. I tried out upscaling videos with Waifu2x-Extension-GUI, Video2x (, Dandere2x), watched 'upscaled to 4K, interpolated to 60FPS' videos on youtube and got the feeling that they all just interpolated because they could or it was some preset, but in a lot of cases it made the video worse (artifacts introduced with generated in-between frames or it made movie scenes feel like game cutscenes). Tried out image upscaling websites and chaiNNer, found the upscale wiki model database and started using these models but even though they provided a short textual description I was missing a visual comparison of how the model output would look like. I searched and could not find such a ressource and I realized that if I wanted to have it I would need to create it myself. This is how this whole project/website started.