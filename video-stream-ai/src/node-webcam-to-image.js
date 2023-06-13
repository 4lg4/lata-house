// Import required libraries
import tf from '@tensorflow/tfjs';
import tfjsNode from '@tensorflow/tfjs-node';
import cocoSsd from '@tensorflow-models/coco-ssd';
import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import NodeWebcam from 'node-webcam';

// Configure the camera
const cameraOptions = {
  width: 640,
  height: 480,
  quality: 100,
  delay: 0,
  saveShots: false,
  output: 'jpeg',
  device: false,
  callbackReturn: 'buffer',
  verbose: false
};

// Create a webcam instance
const Webcam = NodeWebcam.create(cameraOptions);

// Load the COCO-SSD model
async function loadModel() {
  const model = await cocoSsd.load();
  return model;
}

// Detect objects in an image
async function detectObjects(imageData, model) {
  // Load the image
  const img = await loadImage(imageData);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Convert the canvas image to a tensor
  const input = tf.browser.fromPixels(canvas);

  // Run the object detection model
  const predictions = await model.detect(input);

  // Draw bounding boxes around the detected objects
  predictions.forEach((prediction) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.font = '14px Arial';
    ctx.beginPath();
    ctx.rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3]);
    ctx.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    ctx.stroke();
  });

  // Convert the annotated image back to buffer data
  const outputBuffer = canvas.toBuffer('image/jpeg');

  return outputBuffer;
}

// Run the object detection on a camera feed
async function runObjectDetection() {
  const model = await loadModel();

  // Capture frames from the camera feed
  const camera = Webcam.capture('frame', async (error, data) => {
    if (!error) {
      const outputBuffer = await detectObjects(data, model);

      // Save the annotated image to a file
      const outputImagePath = './output.jpg';
      fs.writeFileSync(outputImagePath, outputBuffer);
      console.log(`Object detection completed. Annotated image saved to ${outputImagePath}`);
    } else {
      console.error('Error capturing frame:', error);
    }
  });

  // Stop capturing frames after 10 seconds
  setTimeout(() => {
    camera.stop();
    console.log('Camera feed stopped.');
  }, 10000);
}

// Run the object detection script
runObjectDetection();