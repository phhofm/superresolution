// since I generally use the model names as the file output names in the examples, I simply extract all unique example file base names and get an automatically updated models list this way

import data from './data.json' assert { type: "json" };
import fs from 'fs'
import Os from 'os'

// Create Set so we can add only unique items so we get all the models
let models = new Set();

// Add examples here that use all the models. I use specific examples because the input image names etc would show up as models, specifically "chilling","couple","family", "child__4x_NMKDSuperscale","grossermythen__4x_NMKDSuperscale","landscape__4x_NMKDSuperscale","lightning__4x_NMKDSuperscale","livingroom__4x_NMKDSuperscale","painting__4x_NMKDSuperscale", and so forth, generated example with no examples given
let examples = ['output/lossless/selftrained/all/dearalice', 'output/lossless/generated/life', 'output/lossless/artifactsremoval/gate2', 'output/lossless/interpolated/fate', 'deblur/GOPRO_Large/test/GOPR0384_11_00/output', 'denoise/output/directions', 'facerestoration/buddy', 'colorization/couple']

/*
  let modelNames = data.map(file => file.basename)
  modelNames.forEach(name => {
    models.add(name)
  })
*/


examples.forEach(example => {
  // get the relevant files and extract model names
  let relevantFiles = data.filter(file => file.relativePath.startsWith(example))
  let modelNames = relevantFiles.map(file => file.basename)

  // only gets added if unique
  modelNames.forEach(name => {
    models.add(name);
  })
});


await fs.writeFile('./models.json', JSON.stringify([...models]), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Models used data created successfully\n");
  }
});
