//In this project, we generate a list of particles that flow around the screen.
//If the distance of each particle is within a certain boundary, a line will be
//drawn from the particle to all the others that are within this range. The example
//makes use of the function splice() to insert the values of the class objects
//into each instance of the class, and check on the distance between each object
//against a class instance.

//Here we create an array to store class object instances
let plexusArray = [];

//Size of array
let arraySize = 30;

//We load a gradient image for background
let img;

//Have a list of colors
let listOfColors = ['#FF6BC7',
                    '#CE5DDE',
                    '#BB73F5',
                    '#7A5DDE',
                    '#5F6FFA'
                  ];

//Preload the image
function preload(){
  img = loadImage('assets/backPurple800.jpeg');
}

function setup() {
  createCanvas(800, 800);
  strokeWeight(4);

  //Run the for loop to initialize the class objects and assign to the array
  for (let i=0; i<arraySize; i++){
    //Randomized variables
    let posX = width/2
    let posY = height/2;
    let speedX = random(-5, 5);
    let speedY = random(-5, 5);
    let colVar = parseInt(random(5));

    //Initialize the class object
    plexusArray[i] = new Plexus(posX, posY, speedX, speedY, colVar);
  }
}

/*
// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
*/

function draw() {
  //background(40);
  image(img, -400, 0)
  blendMode(ADD);

  //Run the loop to move and display the objects
  for (let i=0; i<plexusArray.length; i++){
    //Move function for the particles
    plexusArray[i].moveFunction();
    //The following line inserts the values of the array into its own self
    //By this, we check the distance of each object against all the others
    plexusArray[i].plexus(plexusArray.slice(i));
    //Display the circles (nodes)
    plexusArray[i].displayCircle();
  }
}

//Definition of the class
class Plexus{
  constructor(x, y, speedX, speedY, col){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;

    this.col = listOfColors[col];
    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
    this.distRand = random(50, 300);
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //We need to return the position of the instance, so that we can check its distance
  //in relation to the other objects
  returnPositionX(){
    return this.x;
  }
  returnPositionY(){
    return this.y;
  }

  //Check the distance of the instance in relation to the other objects
  //If the distance is less than the checked amount, draw a line to connect the
  //instance with the other objects
  plexus(objects) {
    objects.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis < this.distRand+50) {
        let aStroke = random(0, 0.5);
        stroke(this.col);
        strokeWeight(2);
        line(this.x,this.y,element.x,element.y);
      }
    });
  }

  //Class function that displays the ellipse (node)
  displayCircle(){
    //this.fillcol = color(this.rd, this.grn, this.bl)
    //stroke(255,100);
    //stroke('rgba(255, 0, 100, 1)');
    //strokeWeight(10);
    noStroke();
    fill(this.col);
    //fill(255,230);
    ellipse(this.x, this.y, 10, 10);
  }
}
