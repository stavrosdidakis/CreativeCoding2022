//This example focuses on demonstrating motion techniques used for color
//change. Using a sin() function, we rotate around certain color ranges.
//In addition, we make use of blendMode, to blend color pixels of multiple
//shapes.

//Setup of global variables
let angleR = 0;
let angleG = 0;
let angleB = 0;
let angleBW = 0;

let posX1, posY1, w1, h1;
let posX2, posY2, w2, h2;
let posX3, posY3, w3, h3;
let posX4, posY4, sizeX4, sizeY4;

function setup(){
  createCanvas(800, 800);

  //Randomization of variables - position & size
  posX1 = random(10, 600); posY1 = 0;
  w1 = random(10, 100); h1 = height;

  posX2 = random(10, 600); posY2 = random(10, 600);
  w2 = random(50, width); h2 = random(50, height);

  posX3 = random(10, 600); posY3 = random(10, 600);
  w3 = random(50, width); h3 = random(50, height);

  posX4 = random(10, 600); posY4 = random(10, 600);
  sizeX4 = random(50, width); sizeY4 = random(50, height);
}

function draw(){
  background(200);

  //Accumulate an additional angle amount
  //(faster to slower rates)
  angleR += 0.01;
  angleG += 0.005;
  angleB += 0.0025;
  angleBW += 0.00125;

  //Get the sin value of each angle
  //sin output is from -1. to 1.
  let sinValR = sin(angleR);
  let sinValG = sin(angleG);
  let sinValB = sin(angleB);
  let sinValBW = sin(angleBW);

  //Map the sin output range from -1,1 to 0,255
  //This will have an effect on the color range
  let r = map(sinValR, -1, 1, 0, 255);
  let g = map(sinValG, -1, 1, 0, 255);
  let b = map(sinValB, -1, 1, 0, 255);
  let bw = map(sinValBW, -1, 1, 0, 255);

  //Each rect on the screen will have a different
  //color. Its oscillation (intensity of the color),
  //is defined by the sin() function and the angle.

  //BlendMode will blend the shapes using a difference parameter
  blendMode(DIFFERENCE);

  //Each shape has different fill() settings, but share (some) r,g,b values
  //generated above
  fill(r, g, b);
  rect(posX1, posY1, w1, h1);

  fill(r, 123, b);
  rect(posX2, posY2, w2, h2);

  fill(r, g, 123);
  rect(posX3, posY3, w3, h3);

  fill(123, g, b);
  ellipse(posX4, posY4, sizeX4, sizeX4);
}
