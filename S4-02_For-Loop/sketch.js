//A basic example of a for-loop that draws multiple shapes on the X-axis

//Global variables
let size = 80;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(40);
  fill(80);
  //The for-loop will create 10 shapes on the canvas
  for (let x = 0; x < 10; x++) {
    //x position is adjusted by the variable x (+1 on each loop)
    //Thus, x goes from 0 to 10. Multiplying by 50 it will create this sequence:
    //0, 50, 100, 150, 200, 250, 300, 350, 400, 450
    rect(x*size, height/2-size/2, size, size);
  }

  //If we want to accomplish the same without a loop,
  //we have to do the following:

  //rect(0*size, height/2-size/2, size, size);
  //rect(1*size, height/2-size/2, size, size);
  //rect(2*size, height/2-size/2, size, size);
  //rect(3*size, height/2-size/2, size, size);
  //rect(4*size, height/2-size/2, size, size);
  //rect(5*size, height/2-size/2, size, size);
  //rect(6*size, height/2-size/2, size, size);
  //rect(7*size, height/2-size/2, size, size);
  //rect(8*size, height/2-size/2, size, size);
  //rect(9*size, height/2-size/2, size, size);
}
