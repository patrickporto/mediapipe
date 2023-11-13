# mediapipe-lib

![](https://img.shields.io/badge/Foundry-v11-informational)
[![Donate via Ko-Fi](https://img.shields.io/badge/donate-ko--fi-red.svg?logo=ko-fi)](https://ko-fi.com/darkmoor) [![Latest Version](https://img.shields.io/github/v/tag/patrickporto/mediapipe-lib?label=version)](https://github.com/patrickporto/mediapipe-lib/releases) [![Download Count](https://img.shields.io/github/downloads/patrickporto/mediapipe-lib/latest/mediapipe-lib.zip)](https://github.com/patrickporto/mediapipe-lib/releases)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fmediapipe-lib&colorB=4aa94a)

## About

This module provides a library of functions to help developers to create modules for Foundry VTT.

[MediaPipe](https://developers.google.com/mediapipe) is a cross-platform framework for building multimodal applied machine learning pipelines.

## API

To use the API, you need to enable the module and access the API object.

```javascript
const mediaPipeLib = game.modules.get('mediapipe-lib').api
```

### Hooks.on('mediapipe.ready', callback)

This hook is called when the MediaPipe library is ready to be used.

```javascript
Hooks.on('mediapipe.ready', (mediaPipeLib) => {
  // MediaPipe is ready to be used
})
```

### ImageSegmenter

The ImageSegmenter class is a wrapper for the [Selfie Segmentation](https://google.github.io/mediapipe/solutions/selfie_segmentation.html) MediaPipe solution.
```javascript
const mediaPipeLib = game.modules.get('mediapipe-lib').api

const imageSegmenter = await mediaPipeLib.ImageSegmenter.createFromOptions(wasmFileset, {
    baseOptions: {
        modelAssetPath: mediaPipeLib.models.selfieSegmentation,
        delegate: "GPU"
    },
    canvas: mediaPipeLib.tasksCanvas,
    runningMode: "VIDEO",
});

const imageSegmenterResult = imageSegmenter.segmentForVideo(input, 0);
```
