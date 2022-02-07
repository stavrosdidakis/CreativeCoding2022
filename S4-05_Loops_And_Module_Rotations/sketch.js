//The example demonstrates how to select certain elements within the
//nested loop, and assigns certain colors for rows and columns (on odds
//and events). In addition, it shows the use of transformations, as well
//as shape rotations.

//Global variables
let size = 80;
let varS = 1;
let angle = 0;
let jitter = 0;

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
  rectMode(CENTER);
}

function draw() {
  //The following lines create a random angle that is assigned to the rotation
  //of the foreground shapes
  if (second() % 2 == 0) jitter = random(-0.1, 0.1);
  angle = angle + jitter;
  let c = cos(angle); //variable c defines the final rotation

  translate(25, 25);  //Offset all shapes by half their width and height

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes
      fill(80);
      rect(size * x, size * y, size, size);

      //Select certain rows and columns on the grid,
      //and assign different color values
      if (x%2==0 && y%2==0) {
        fill(listOfColors[0]);
      } else if (x%2==0 && y%2==1) {
        fill(listOfColors[1]);
      } else if (x%2==1 && y%2==0) {
        fill(listOfColors[2]);
      } else fill(listOfColors[4]);
      //console.log(x%2); //see in the console the results from x%2

      //To keep our transformations correctly arranged,
      //it is necessary to have a push/pop translation system
      push(); //apply this at the beginning of the transformation
      translate(size * x, size * y); //assign here the shape position
      rotate(c); //rotate takes the number from the automated rotation
      rect(0, 0, size/2, size/2); //position is driven by translate()
      pop(); //apply this at the end of the transformation
    }
  }
}
