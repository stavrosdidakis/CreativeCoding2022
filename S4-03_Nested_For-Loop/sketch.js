//An example about a nested for-loop.
//Draws shapes on the X, and Y axis.

//Global variables
let size = 80;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  fill(80);

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
      rect(size * x, size * y, size, size);
    }
  }
}
