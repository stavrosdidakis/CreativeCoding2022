//This example demonstrates a simple use of mouse interaction.
//When the mouse position is top of the button, and if we click it,
//the color of the shape changes randomly

//Define global variables, for color and size
let r, g, b;
let circleSize = 200;

function setup() {
  //Set size of the canvas
  createCanvas(800, 800);
  // Pick colors randomly on setup
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(40);
  // Draw a circle
  strokeWeight(10);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(width/2, height/2, circleSize, circleSize);
  console.log(mouseX); //print to the console the mouse position
}

// When the user clicks the mouse do the following
function mousePressed() {
  // Check if mouse is inside the circle. Calculate the distance between two points
  let d = dist(mouseX, mouseY, width/2, height/2);
  if (d < circleSize/2) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
