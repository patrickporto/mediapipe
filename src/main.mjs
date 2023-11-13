import { FilesetResolver, ImageSegmenter } from "@mediapipe/tasks-vision";
import { CANONICAL_NAME } from "./constants.mjs";

let wasmFileset = null;

const models = {
    selfieSegmentation: "https://storage.googleapis.com/mediapipe-tasks/image_segmenter/selfie_segmentation.tflite"
}

const mediaPipeApi = {
    ImageSegmenter,
    wasmFileset: wasmFileset,
    models,
}

Hooks.on('init', async () => {
    wasmFileset = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    game.modules.get(CANONICAL_NAME).api = mediaPipeApi;
    Hooks.call('mediapipe.ready', mediaPipeApi);
});
