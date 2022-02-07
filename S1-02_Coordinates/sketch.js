//This example demonstrates the use of standard shape and text functions,
//and how we can utilize the coordination system to place them on
//certain locations on the canvas. Here, we also make an extensive use
//of the fill() function, which controls the color of the shape, text,
//and we also see how to perform associated alignments.

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(800, 800);

  //Set the size of all text
  textSize(18);

  //No stroke (line on the outside of shapes)
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to grey
  background(40);

  /////////////////////////////////// CENTER
  //Set color to white
  fill(255);
  //Alighment mode of shape to center
  rectMode(CENTER);
  //Position and size settings for shape
  rect(400, 400, 200, 100);

  //Text preferences for circle0
  //Set color to grey
  fill(100);
  //Alighment mode of text to center
  textAlign(CENTER);
  //Text content and positions
  text("Rect Center Position:", 400, 400);
  text("X=400, Y=400", width/2, height/2+20);

  /////////////////////////////////// TOP LEFT
  //Set color to blue
  fill(0, 0, 255);
  //Position and size settings for shape
  ellipse(0, 0, 100, 100);

  //Text preferences for circle1
  textAlign(LEFT);
  fill(255);
  //Text content and positions
  text("Circle1 Center Position:", 0, 70);
  text("X=0, Y=0", 0, 90);

  /////////////////////////////////// TOP RIGHT
  //Set color to red
  fill(255, 0, 0);
  //Position and size settings for shape
  ellipse(width, 0, 100, 100);

  //Text preferences for circle2
  textAlign(RIGHT);
  fill(255);
  //Text content and positions
  text("Circle2 Center Position:", width, 70);
  text("X=800, Y=0", width, 90);


  /////////////////////////////////// BOTTOM LEFT
  //Set color to green
  fill(0, 255, 0);
  //Position and size settings for shape
  ellipse(0, height, 100, 100);
  //Text preferences for circle3
  textAlign(LEFT);
  fill(255);
  //Text content and positions
  text("Circle3 Center Position:", 0, height-80);
  text("X=0, Y=800", 0, height-60);

  /////////////////////////////////// BOTTOM RIGHT
  //Set color to yellow
  fill(255, 255, 0);
  //Position and size settings for shape
  ellipse(width, height, 100, 100);
  //Text preferences for circle4
  textAlign(RIGHT);
  fill(255);
  //Text content and positions
  text("Circle4 Center Position:", width, height-80);
  text("X=800, Y=800", width, height-60);
}
