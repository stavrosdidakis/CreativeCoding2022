//Here we see how to utilize mouse interaction, random motion, and color
//rotation. When the mouse is moved, the circle enlarges and shrinks
//accordingly.

//Declare global variables
let x, y;
let sizeCircle = 25;
let sinValBW, bw, angleBW = 0;

let img;

function preload(){
  img = loadImage("assets/bg.jpeg");
}

function setup() {
  createCanvas(800, 800);
  //noStroke();

  //Starts in the bottom middle
  x = width / 2;
  y = height;

  //Background is rendered only once (so that the shape trails remain visible)
  background(img);
}

function draw() {
  //Map the mouseX to the new size of the shape
  sizeCircle = map(mouseX, 0, width, 10, 200);

  //Color rotation
  angleBW += 0.025;
  sinValBW = sin(angleBW);
  bw = map(sinValBW, -1, 1, 20, 210);

  fill(bw);
  ellipse(x, y, sizeCircle, sizeCircle);

  //Jiggle randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 3;

  //When at the top, reset to the bottom
  if (y < 0) {
    y = height;
  }
}
