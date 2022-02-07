//On each new loop, we generate and display on the canvas a shape
//(ellipse) with randomized values for color and position. The color
//is extracted from an array that has stored certain color values
//(palette).

//Declare global variables
let size, posx, posy;
let selArray;

//This array stores hexadecimal representations of color values
//It serves as a color palette for our sketch
let listOfColors = ['#225378',
                    '#1695A3',
                    '#ACF0F2',
                    '#F3FFE2',
                    '#EB7F00',
                    '#032859',
                    '#016F94',
                    '#FFE4B6',
                    '#FFB06D',
                    '#FE6A2C'];

function setup() {
  createCanvas(800, 800);
  background(40);
  //frameRate(1);
  noStroke();
}

function draw() {
  //background(80);

  //Randomize size and position of shapes
  size = random(200);
  posx = random(width);
  posy = random(height);

  //We could also play with the stroke of the shape
  //strokeWeight(random(10));
  //stroke(255, random(255));

  //Randomize the array position, and assign the value to selArray variable
  selArray = parseInt(random(10));

  //This provides a shadow effect
  fill(80);
  ellipse(posx, posy+5, size, size);

  //Here we get the randomized value and read the array position to assign color
  fill(listOfColors[selArray]);
  ellipse(posx, posy, size, size);
}
