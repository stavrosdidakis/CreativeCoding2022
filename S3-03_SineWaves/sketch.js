//This is an automatic generative sketch that uses sine waves with
//different properties such as frequency, amplitude, size, color. It
//also uses a gradient background (made of multiple shapes), and a
//shading function that brings more depth to the final result.

let xpos;
let x, y;
let c1, c2;
let getColor;
let strokeVal = 1;

let xSpeed = 0.1;
let ySpeed = 0.1;
let yAmplitude = 0.2;

let size = 0;

function setup() {
  createCanvas(800, 800);
  background(40);

  //Initial settings for shape
  xpos = -size/2;
  size = random(5, 50);

  //Gradient function for the background (rendered once)
  gradient();

  noStroke();
  getColor = color(random(255), random(255), random(255));
}

function draw() {
  //background(80);

  //xpos = frameCount % width;
  //Accumulate X position (3 pixels per frame)
  xpos = xpos + 3;

  //When at the far right of the screen, run the following:
  if (xpos > width+(size/2)) {
    xpos = -size/2; //reset X position to the left
    //Randomize color, speed, amplitude, size
    getColor = color(random(255), random(255), random(255));
    xSpeed = random(0.01, 0.2);
    ySpeed = random(0.01, 0.2);
    yAmplitude = random(0.01, 0.3);
    size = random(5, 50);
  }

  x = xpos*0.2; // adjust speed/frequency
  y = sin(x*ySpeed)*yAmplitude; //set of amplitude

  //Add a shadowing effect on canvas
  addBlur(strokeVal);

  //Draw the ellipse on a waving formation
  //noStroke()
  strokeWeight(strokeVal)
  stroke(40,180);
  fill(getColor);
  ellipse(xpos, height/2 + y*height, size, size);
}

//This function helps us to generate the background gradient
function gradient(){
  addBlur(strokeVal);

  //Use two colors (for beginning and end)
  c1 = color(255);
  c2 = color(63, 191, 191);

  //Create a for loop o generate multiple lines at a different Y position
  //Each line is assigned a percentage from the initial and end colors gradually
  for(let y=0; y<height; y++){
    let mapValue = map(y, 0, height, 0, 1);
    let newCol = lerpColor(c1, c2, mapValue); //Interpolate function
    stroke(newCol);
    line(0, y, width, y);
  }
}

//Here we utilize the HTML5 canvas functionality to add a shadow effect
//to our rendered content
function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'black';
}

/*
//https://ffd8.github.io/oscillation-sandbox/

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
*/
