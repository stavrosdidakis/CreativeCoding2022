//This example combines a moving object on a circular pattern around the
//center of the canvas, rotating its color variables as well.

//Setup of global variables
let angle = 0;

let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleA = 0;
let acc = 0;

function setup(){
  createCanvas(800, 800);
  noStroke();
}

function draw(){
  //These values control the speed of the angle (for the color variables)
  angleR += 0.01;
  angleG += 0.005;
  angleB += 0.0025;
  angleA += 0.00125;

  //Get the sin of each angle.
  //sin output ranges from -1. to 1.
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinValA = sin(angleA);

  //Map the sin output range from -1,1 to 0,255
  //This will have an effect on the color range
  let r = map(sinValR, -1, 1, 0, 255);
  let g = map(sinValG, -1, 1, 0, 255);
  let b = map(sinValB, -1, 1, 0, 255);
  let a = map(sinValA, -1, 1, 0, 255);

  //Keep the angle amount accumulated
  angle += 0.01;
  //Get the sin and cos value from the angle
  let sinValueX = sin(angle);
  let sinValueY = cos(angle);
  //Map the sin and cos output range from -1,1 to position values
  let x = map(sinValueX, -1, 1, 0, width-50);
  let y = map(sinValueY, -1, 1, 0, width-50);

  fill(r, g, b, a);
  ellipse(x, y, 800-acc, 800-acc);
}
