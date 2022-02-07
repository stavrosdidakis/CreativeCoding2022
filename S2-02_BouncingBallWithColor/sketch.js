//The bouncing ball is a great example that demonstrates the uses of
//conditionals. The ball moves on the X and Y axis by moving one pixel
//to left or right (X), or up and down (Y). When the ball reaches the
//edges of the window (i.e. when the position variable approximates 0 or
//800), we reverse its speed by multiplying it with -1 (which appears
//as bouncing off the canvas edge).


//Setup of global variables
let x, y;
let ellipseSize = 200;
let speedX, speedY;
let col;

function setup() {
  createCanvas(800, 820);
  noStroke();

  //Assign initial X and Y values to the center
  x = width/2;
  y = height/2;

  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
  col = color (255, 255, 255)
}

function draw() {
  background(40);

  //Background grid
  fill(60);
  rect(20,20,width-40, 20);
  rect(20,60,width-40, 20);
  rect(20,100,width-40, 20);
  rect(20,140,width-40, 20);
  rect(20,180,width-40, 20);
  rect(20,220,width-40, 20);
  rect(20,260,width-40, 20);
  rect(20,300,width-40, 20);
  rect(20,340,width-40, 20);
  rect(20,380,width-40, 20);
  rect(20,420,width-40, 20);
  rect(20,460,width-40, 20);
  rect(20,500,width-40, 20);
  rect(20,540,width-40, 20);
  rect(20,580,width-40, 20);
  rect(20,620,width-40, 20);
  rect(20,660,width-40, 20);
  rect(20,700,width-40, 20);
  rect(20,740,width-40, 20);
  rect(20,780,width-40, 20);

  //Adjust the position based on speedX and speedY
  x = x+speedX;
  y = y+speedY;

  //Check the boundaries. If we hit the boundaries on the X axis, reverse,
  //and for every collision change the color
  if ((x > width-ellipseSize/2) || (x < 0+ellipseSize/2)) {
    speedX = (speedX * -1);
    col = color (random(255), random(255), random(255));
  }

  //Check the boundaries. If we hit the boundaries on the Y axis, reverse,
  //and for every collision change the color
  if ((y > height-ellipseSize/2) || (y < ellipseSize/2)) {
    speedY = speedY * -1;
    col = color (random(255), random(255), random(255));
  }
  fill(col);
  ellipse(x, y, ellipseSize, ellipseSize);
}
