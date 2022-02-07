//Here, we extend the bouncing ball example, by creating 4 objects
//that move into mirrored directions. By not erasing the background,
//we can keep the trails, which altogether create interesting generative
//patterns. Every time we run the example, a new pattern emerges.

//Setup of global variables
let x = 200;
let y = 150;
let ellipseSize = 10;
let speedX;
let speedY;

let selArray = 0;

//Color palette, strored in an array
let listOfColors = ['#618C64',
                    '#CCD9B8',
                    '#21260F',
                    '#F27C38',
                    '#F26D3D',
                    '#404040'
                  ];

function setup() {
  createCanvas(800, 800);
  noStroke();

  //Initial random values for X and Y
  speedX = random(-15., 15.);
  speedY = random(-15., 15.);
  background(40);

  listOfColors[3];
}

function draw() {
  //background( 120 );

  //Adjust the position based on speedX and speedY
  x = x + speedX;
  y = y + speedY;

  //Check the boundaries. If we hit the boundaries on the X axis, reverse,
  //and for every collision change the color
  if ((x > width - ellipseSize/2) || (x < ellipseSize/2)) {
    speedX = (speedX * -1);
    selArray = parseInt(random(6));
  }

  //Check the boundaries. If we hit the boundaries on the Y axis, reverse,
  //and for every collision change the color
  if ((y > height - ellipseSize/2) || (y < ellipseSize/2)) {
    speedY = speedY * -1;
    selArray = parseInt(random(6));
  }
  fill( listOfColors[selArray] );
  ellipse(x, y, ellipseSize, ellipseSize);

  //Here, we reverse the values for the X and Y positions
  //We do this so that we can create 4 different moving objects,
  //which mirror their positions.
  let x2 = map (x, 0, width, width, 0);
  let y2 = map (y, 0, width, width, 0);
  ellipse(x2, y, ellipseSize, ellipseSize);
  ellipse(x, y2, ellipseSize, ellipseSize);
  ellipse(x2, y2, ellipseSize, ellipseSize);
}
