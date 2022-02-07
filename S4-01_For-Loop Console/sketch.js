//A simple example demonstrating how a nested for loop operates calculations.
//The console is used here, to help as observed more clearly the printed
//statements.

function setup() {
  createCanvas(800, 800);
  noLoop();
  textSize(22);
  //textAlign(CENTER);
}

function draw() {
  background(40);
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Print result to the console
      //Open Chrome > View > Developer > Javascript Console
      console.log("X: " + x + ", Y: " + y)
    }
  }
  fill(255);
  text("Open the Developer > Javascript Console", 10, 100);
  text("to see the nested-loop number values", 10, 130);
}
