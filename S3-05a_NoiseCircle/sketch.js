//This example demonstrates a random walk of an ellipse. The shape always
//remains within the window as the position is constrained. Also, the
//user can change the color of the shape when the mouse is clicked.


//Global variables
let r = 255;
let g = 255;
let b = 255;

let speed = 10;
let diameter = 100;
let x1;
let y1;
let x2;

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

  //Press the mouse to change the values of r, g, b
  //which following in the fill() they control the color of the shape
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  addBlur(10);
  fill (r, g, b, 120);
  ellipse(x1, y1, diameter, diameter);
}

//Here we utilize the HTML5 canvas functionality to add a shadow effect
//to our rendered content
function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'grey';
}
