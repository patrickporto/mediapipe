import { FilesetResolver, ImageSegmenter } from "@mediapipe/tasks-vision";
import { CANONICAL_NAME } from "./constants.mjs";
import { tasksCanvas, toImageBitmap } from "./toImageBitmap.mjs";

const models = {
    selfieSegmentation: "https://storage.googleapis.com/mediapipe-tasks/image_segmenter/selfie_segmentation.tflite"
}

const isSupportedPlatform = () => {
    return navigator.userAgent.toLowerCase().indexOf("firefox") === -1;
}

const mediaPipeApi = {
    ImageSegmenter,
    wasmFileset: null,
    models,
    tasksCanvas,
    toImageBitmap,
    isSupportedPlatform,
}

Hooks.on('init', async () => {
    mediaPipeApi.wasmFileset = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    game.modules.get(CANONICAL_NAME).api = mediaPipeApi;
    Hooks.call('mediapipe.ready', mediaPipeApi);
});
