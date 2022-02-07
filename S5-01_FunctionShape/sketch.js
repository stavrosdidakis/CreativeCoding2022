//This example demonstrates the use of functions and generates shapes
//with random settings. Every time the function is called, a shapes
//with unique settings is rendered on the screen

//Create global scope variables for position and size
let xRandom;
let yRandom;
let sizeRandom = 100;

//Color array
let selArray = 0;
//Color palette, strored in an array
let listOfColors = ['#D9525E',
                    '#0C2E59',
                    '#175073',
                    '#2E8C83',
                    '#05F2AF',
                    '#FFE4B6'
                  ];

function setup() {
  //Canvas same size as browser window
  createCanvas(800, 800);
  frameRate(10); //Drawing speed
  noStroke();
  background(40);
}

/*
//On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
*/

function draw() {
  //Randomize the variables for the position and size
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(20, 300);

  //Call the function. Pass the arguments for position and size
  customShape(xRandom, yRandom, sizeRandom);
}

//Create a custom shape. Use input parameters for position and size
function customShape(x, y, size){
  //The shape consists of multiple circular layers.
  //Each layer has its own settings. The color is extracted automatically
  //from the palette array
  stroke(134, 151, 178);
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

  strokeWeight(5);
  selArray = parseInt(random(6));
  stroke(listOfColors[selArray]);
  ellipse(x, y, size/2, size/2);

  noStroke();
  selArray = parseInt(random(6));
  fill(listOfColors[selArray]);
  ellipse(x, y, size/4, size/4);
}
