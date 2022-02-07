//This example extends S3-05b_NoiseCirclesMirrored, and instead of having
//an autonomous motion, the shapes are controlled by the mouse position.
//Here, we also add a PNG image to enhance the composition.

//Global variables
let r = 255;
let g = 255;
let b = 255;
let speed = 3;
let diameter = 50;
let x1;
let y1;

let img;
let strokeWidth = 4;

//Preload an image to add on top of the renderings
function preload(){
  img = loadImage("assets/voronoi.png");
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;
  background(40);
  img.resize(width,height);
}

function draw() {
  //Use the colorFunction to rotate through the colors
  colorFunction();
  addBlur(strokeWidth);

  //Assign mouseX and mouseY to variables x1 and y1
  //Constrain them within the boundaries of the canvas
  x1 = mouseX;
  y1 = mouseY;
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  //Create x2 and y2 and assign the reversed x1 and y1 values
  let x2 = map(x1, 0, width, width, 0);
  let y2 = map(y1, 0, height, height, 0);

  //Calculate the distance between the centre of canvas and x1 and y1
  //Based on the maximum distance we can have from the centre (350 pixels),
  //map the new range from 1 to 80
  //1: size of the circle when is close to the edges of the canvas
  //80: size of the circle when exactly on the centre of the canvas
  let distanceFromCenter = dist(width/2, height/2, x1, y1);
  let newSize = map(distanceFromCenter, 0, 500, 80, 1);

  //console.log(mouseX + " " + mouseY)

  //Change the color on mouse press
  if (mouseIsPressed) {
    //r = random(255);
    //g = random(255);
    //b = random(255);
  }
  fill (r, g, b, a);
  ellipse(x1, y1, newSize, newSize);
  ellipse(x2, y1, newSize, newSize);
  ellipse(x1, y2, newSize, newSize);
  ellipse(x2, y2, newSize, newSize);

  tint(255, 1); // Display at half opacity
  image(img, 0, 0);
}

let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleA = 0;

function colorFunction(){
  angleR += 0.01;
  angleG += 0.005;
  angleB += 0.0025;
  angleA += 0.00125;

  //acc = acc + 0.05;
  //Get the sin value of each angle
  //sin output is from -1. to 1.
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinValA = sin(angleA);
  //Map the sin output range from -1,1 to 0,255
  //This will have an effect on the color range
  r = map(sinValR, -1, 1, 0, 255);
  g = map(sinValG, -1, 1, 0, 255);
  b = map(sinValB, -1, 1, 0, 255);
  a = map(sinValA, -1, 1, 0, 255);
}

function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'black';
}
