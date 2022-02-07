//The example demonstrate the use of interaction for the creation of multiple
//shapes that have random visual properties. When a specific key is pressed
//("a", "s", or "d"), a different shape mode is selected and rendered on screen.

//Create global scope variables for position and size
let xRandom;
let yRandom;
let sizeRandom = 100;
let selection = 0;

//Color array
let selArray = 0;
//Color palette, strored in an array
let listOfColors = ['#225378',
                    '#1695A3',
                    '#ACF0F2',
                    '#F3FFE2',
                    '#EB7F00',
                    '#032859',
                    '#016F94',
                    '#FFE4B6',
                    '#FFB06D',
                    '#FE6A2C'
                  ];

function setup() {
  //Canvas same size as browser window
  createCanvas(800, 800);
  frameRate(10); //Drawing speed
  noStroke();
  rectMode(CENTER);
  background(40);
}

/*
//On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
*/

function draw() {
  addBlur(20);

  //Randomize the variables for the position and size
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(50, 200);

  //According to the keyboard selection, a custome shape is created
  if (selection==1) customShape1(xRandom, yRandom, sizeRandom);
  if (selection==2) customShape2(xRandom, yRandom, sizeRandom);
  if (selection==3) customShape3(xRandom, yRandom, sizeRandom);
}

//Here we utilize the HTML5 canvas functionality to add a shadow effect
//to our rendered content
function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'black';
}

//Create a custom shape. Use input parameters for position and size
function customShape1(x, y, size){
  //Drawing settings for shape
  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  strokeWeight(1);
  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  ellipse(x, y, size, size);

  strokeWeight(5);
  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  noFill();
  ellipse(x, y, size/1.2, size/1.2);

  strokeWeight(1);
  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  ellipse(x, y, size/1.4, size/1.4);

  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  strokeWeight(5);
  ellipse(x, y, size/2, size/2);

  noStroke();
  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  ellipse(x, y, size/4, size/4);
}

function customShape2(x, y, size){
  //Drawing settings for shape
  noStroke();
  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  push();
    translate(x, y);
      scale(1);
      rotate(radians(0));
      rect(0, 0, size, size/10);
      rect(0, 0, size, size/10);
      rotate(radians(45));
      rect(0, 0, size, size/10);
      rotate(radians(45));
      rect(0, 0, size, size/10);
      rotate(radians(45));
      rect(0, 0, size, size/10);
  pop();

  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  push();
    translate(x, y);
      rotate(radians(0));
      rect(0, 0, size-20, size/20);
      rect(0, 0, size-20, size/20);
      rotate(radians(45));
      rect(0, 0, size-20, size/20);
      rotate(radians(45));
      rect(0, 0, size-20, size/20);
      rotate(radians(45));
      rect(0, 0, size-20, size/20);
  pop();
}

function customShape3(x, y, size) {
  //Drawing settings for shape
  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  strokeWeight(1);

  push();
  translate(x-70, y-70);
    beginShape();
      vertex(random(size), random(size));
      vertex(random(size), random(size));
      vertex(random(size), random(size));
      vertex(random(size), random(size));
      vertex(random(size), random(size));
      vertex(random(size), random(size));
    endShape(CLOSE);
  pop();
}

//When keys are pressed, change the selection variable content
function keyPressed() {
  if (key == 'a' || key == 'A') selection = 1;
  if (key == 's' || key == 'S') selection = 2;
  if (key == 'd' || key == 'D') selection = 3;
}
