//Here, the noise circle is mirrored 3 times, and all shapes move
//autonomously within the boundaries of the canvas. Their color and size
//gradually shifts, using a sin() motion.

//Global variables
let r = 255;
let g = 255;
let b = 255;
let speed = 10;
let diameter = 100;
let x1;
let y1;

let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleSize = 0;

function setup() {
  createCanvas(800, 800);
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;
  background(40);
}

function draw() {
  //In the following four lines of the code, we add to x1 and y1
  //a random amoung between -3 to 3 for each frame. This makes the
  //position of the shape to jiggle randomly. In addition to this,
  //the constrain function will make sure that x1 and y1 will always
  //stay within the boundaries of the sketch (0 to 500)
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  //To make sure that we are able to mirror the additional shapes,
  //we take position x and y, and map a new range of values (reversed)
  //using the map() function
  let x2 = map(x1, 0, width, width, 0);
  let y2 = map(y1, 0, height, height, 0);

  addBlur(10);

  //Oscillate through the colors, and size
  angleR += 0.01;
  angleG += 0.005;
  angleB += 0.0025;
  angleSize += 0.01;

  //Get the sin value of each angle
  //sin output is from -1. to 1.
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinSize = sin(angleSize);

  //Map the sin output range from -1,1 to 0,255
  //This will have an effect on the color range and size
  let r = map(sinValR, -1, 1, 0, 255);
  let g = map(sinValG, -1, 1, 0, 255);
  let b = map(sinValB, -1, 1, 0, 255);
  let size = map(sinSize, -1, 1, 5, 50);

  fill (r, g, b, 120);
  ellipse(x1, y1, size, size);
  ellipse(x2, y1, size, size);
  ellipse(x1, y2, size, size);
  ellipse(x2, y2, size, size);
}

//Here we utilize the HTML5 canvas functionality to add a shadow effect
//to our rendered content
function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'grey';
}
