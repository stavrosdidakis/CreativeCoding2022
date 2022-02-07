//This example demonstrates how to set different properties within the
//nested for-loop, and more specifically, by randomizing the color of
//each shape.

//Global variables
let size = 80;
let varS = 1;

//Color array
let selArray = 0;
//Color palette, strored in an array
let listOfColors = ['#225378',
                    '#1695A3',
                    '#ACF0F2',
                    '#F3FFE2',
                    '#EB7F00',
                    '#032859',
                    '#016F94',
                    '#FFE4B6',
                    '#FFB06D',
                    '#FE6A2C'
                  ];

function setup() {
  createCanvas(800, 800);
  frameRate(3); //Drawing speed 3 fps
}

function draw() {
  varS++;
  frameRate(varS); //Drawing speed 3 fps

  if (varS > 10) varS = 1;

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes
      fill(80);
      rect(size * x, size * y, size, size);

      //Randomize the color selection
      selArray = parseInt(random(10));
      //Here we get the randomized value and read the array position
      //to assign color
      fill(listOfColors[selArray]);
      //Create a slight offeset for the x and y, to appear in the middle
      rect(20+size * x, 20+size * y, size/2, size/2);
    }
  }
}
