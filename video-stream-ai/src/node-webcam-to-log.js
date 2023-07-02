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

  return predictions;
}

// Save the object detection results to a log file
function saveResultsToLog(results) {
  const logFilePath = './detection.log';
  let logEntries = [];

  if (fs.existsSync(logFilePath)) {
    // Read existing log file content
    const existingLogContent = fs.readFileSync(logFilePath, 'utf8');

    // Parse existing log entries
    logEntries = existingLogContent ? JSON.parse(existingLogContent) : [];
  }

  // Concatenate new results with existing log entries
  logEntries = logEntries.concat(results);

  // Save the updated log entries to the log file
  fs.writeFileSync(logFilePath, JSON.stringify(logEntries, null, 2));
}

// Run the object detection on a camera feed
async function runObjectDetection() {
  const model = await loadModel();

  // Capture frames from the camera feed
  const camera = Webcam.capture('frame', async (error, data) => {
    if (!error) {
      const results = await detectObjects(data, model);

      // Save the object detection results to the log file
      saveResultsToLog(results);
      console.log('Object detection results:', results);
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