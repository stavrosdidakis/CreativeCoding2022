//This sketch extends the basic bouncing ball example, and displays multiple objects that are
//created with the use of a class and an array. Moreover, we use an image for the background,
//and use the color patterns of the image to colorize the objects of our class

//Create an array for storing the objects
let circleArray = [];
let arraySize = 1000;

//We are going to have an image for the background
let img;

//Color array
let selArray = 0;
//Color palette, strored in an array
let listOfColors = ['#CFA774',
                    '#232224',
                    '#F3F3F0',
                    '#C4956C',
                    '#B16B42',
                    '#DAD7D0'
                  ];

//Load the image
function preload(){
  img = loadImage("assets/tiger.png")
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(800, 800);
  //Run the for-loop to initialize the array with the class objects
  for (let i=0; i<arraySize; i++){
    //Randomize the settings for each class object
    let objectSize = 10+random(5, 40);
    let posX = objectSize/2+random(width-objectSize-1);
    let posY = objectSize/2+random(height-objectSize-1);
    let speedX = random(-5, 5);
    let speedY = random(-5, 5);
    selArray = parseInt(random(5));
    //Initialize the class objects, and assign them to the array
    circleArray[i] = new Circle(posX, posY, speedX, speedY, objectSize, selArray);
  }
  img.resize(800,800);
  //blendMode(DIFFERENCE);
  //noLoop();
}

/*
// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
*/

function draw() {
  //Use the image for background
  background(img);
  //addBlur(50);
  //Run the array and read the classes' functions for move and display
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

/*
//Here we utilize the HTML5 canvas functionality to add a shadow effect
//to our rendered content
function addBlur(mySize) {
  drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'black';
}
*/

//Definition of the class Circle
class Circle{
  //Constructor takes the arguments that are given on the initialization stage
  constructor(x, y, speedX, speedY, size, setCol){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.setCol = setCol;
    //this.rd = random(255);
    //this.grn = random(255);
    //this.bl = random(255);
    //this.a = 255;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - adjust the position according to the speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width - this.size/2 || this.x < this.size/2){
      this.speedX *= -1;
    }
    if (this.y > height - this.size/2 || this.y < this.size/2){
      this.speedY *= -1;
    }
  }

  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    stroke(0);
    strokeWeight(0.5);
    //this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(listOfColors[this.setCol]);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
