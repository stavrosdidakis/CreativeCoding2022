//As an extension of the bouncing ball, instead of reversing the speed
//when hitting the edges, we can switch the direction of the shape to
//come from the opposite direction after it goes off screen. On each
//switch, the parameters of the shape change (color, size, speed).
//Moreover, we add a PNG ink image on top for variation and contrast.

//Setup of global variables
let x;
let y;
let size = 100;
let speedX;
let speedY;
let r, g, b = 255; //Initialize r,g,b each to 255
let mainSpeed = 10;
let listOfColors = ['#17261E',
                    '#3B463D',
                    '#85826F',
                    '#8C7456',
                    '#BEA999'];
let selArray = 0;

let paper, ink1, ink2;

//Use the preload function to load images for background and overlay
function preload() {
  // preload() runs once
  paper = loadImage('assets/paper.jpg');
  ink1 = loadImage('assets/ink7.png');
  ink2 = loadImage('assets/ink8.png');
}

function setup(){
  createCanvas(800, 800);
  x = width/2;
  y = height/2;
  //Randomize speedX and speedY
  //Positive means the ellipse moves forward,
  //and negative it moves backwards
  speedX = random(-mainSpeed, mainSpeed);
  speedY = random(-mainSpeed, mainSpeed);

  textSize(16);
  noStroke();
  //background(40);

  image(paper, 0, 0);
}

function draw(){
  //Adjust the position according to speed values
  x = x + speedX;
  y = y + speedY;

  //If ellipse goes off screen (right side of canvas),
  //then reset position to 0 (aappears from the left)
  if (x > width+size){ //width plus 25 (half size of ellipse)
    selArray = parseInt(random(5));
    x = -size; //appear to Copyright (c) 2018 Copyright Holder All Rights Reserved. (half size of ellipse)
    speedX = random(-mainSpeed, mainSpeed);
    speedY = random(-mainSpeed, mainSpeed);
    size = random(10, 100);

  }
  //If ellipse goes off screen (left side of canvas),
  //then reset position to 400 (appears from the right)
  if (x < -size){
    selArray = parseInt(random(5));
    x = width+size;
    speedX = random(-mainSpeed, mainSpeed);
    speedY = random(-mainSpeed, mainSpeed);
    size = random(10, 100);
  }
  //Same applies here, but for the y axis
  if (y > width+size){
    selArray = parseInt(random(5));
    y = -size;
    speedX = random(-mainSpeed, mainSpeed);
    speedY = random(-mainSpeed, mainSpeed);
    size = random(10, 100);
  }
  if (y < -size){
    selArray = parseInt(random(5));
    y = width+size;
    speedX = random(-mainSpeed, mainSpeed);
    speedY = random(-mainSpeed, mainSpeed);
    size = random(10, 100);
  }

  fill(listOfColors[selArray]);
  ellipse(x, y, size, size);

  //Overlay image of ink - the image is PNG with transparency,
  //and for this reason the rendering below remains visible
  image(ink2, 120, 300, 900, 700);
}
