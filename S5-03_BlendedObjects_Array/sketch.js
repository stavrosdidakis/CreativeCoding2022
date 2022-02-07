//Classes are an important part of any programming language. This example 
//demonstrates the use of a class that generates random settings for a shape and
//moves it along the screen. The sketch also utilizes an array that stores multiple
//class objects, and with the use of for-loop we iterate the array, extract the
//class objects, and display them on the screen. Finally, we have a blended mode
//to mix the pixels of the rendered shapes, and utilize a custom gradient for the
//background.

//Create an array for storing the objects
let rectArray = [];
let arraySize = 200;

function setup() {
  createCanvas(800, 800);
  //Run the for-loop to initialize the array with the class objects
  for (let i=0; i<arraySize; i++){
    //Randomize the settings for each class object
    let objectSizeW = 50+random(5, 400);
    let objectSizeH = 50+random(5, 400);
    let posX = objectSizeW/2+random(width-objectSizeW-1);
    let posY = objectSizeH/2+random(height-objectSizeH-1);
    let speedX = random(-5, 5);
    let speedY = random(-5, 5);
    //Initialize the class objects, and assign them to the array
    rectArray[i] = new RectShape (posX, posY, speedX, speedY, objectSizeW, objectSizeH);
  }
  rectMode(CENTER);
  //noLoop();
}

function draw() {
  //Use a custom gradient for background
  gradient();
  //Blending mode
  blendMode(DIFFERENCE);

  //Run the array and read the classes' functions for move and display
  for (let i=0; i<rectArray.length; i++){
    rectArray[i].moveFunction();
    rectArray[i].displayRect();
  }
}

//This function helps us to generate the background gradient
function gradient(){
  //Use two colors (for beginning and end)
  c1 = color('#F2DCE0');
  c2 = color('#5D768C');

  //Create a for loop o generate multiple lines at a different Y position
  //Each line is assigned a percentage from the initial and end colors gradually
  for(let y=0; y<height; y++){
    let mapValue = map(y, 0, height, 0, 1);
    let newCol = lerpColor(c1, c2, mapValue); //Interpolate function
    stroke(newCol);
    line(0, y, width, y);
  }
}

//Definition of the class
class RectShape {
  //Constructor takes the arguments that are given on the initialization stage
  constructor(x, y, speedX, speedY, sizeW, sizeH){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.sizeW = sizeW;
    this.sizeH = sizeH;

    this.col = random (255);
    //this.rd = random(255);
    //this.grn = random(255);
    //this.bl = random(255);
    //this.a = 255;
  }

  //Class function that takes care of the motion
  moveFunction(){
    //Motion system - adjust the position according to the speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Control system: check if the object moves backwards or forwards
    if (this.speedX > 0){ //Positive speed (going on the right)
      //If the object passes the right edge, send it back to the left side
      if (this.x > width + this.sizeW + 400) this.x = -this.sizeW-400;
    } else { //Negative speed (going on the left)
      //If the object passes the left edge of the screen, send it to the right side
      if (this.x < -this.sizeW-400) this.x = width + this.sizeW + 400;
    }

    //Control system: check if the object moves upwards or downwards
    if (this.speedY > 0){ //Positive speed (going on the bottom)
      //If the object passes the bottom edge, send it back to the top side
      if (this.y > height + this.sizeH + 400) this.y = -this.sizeH - 400;
    } else { //Negative speed (going on the top)
      //If the object passes the top edge of the screen, send it to the bottom side
      if (this.y < -this.sizeH - 400) this.y = height + this.sizeH + 400;
    }
  }

  //Class function that displays the shape
  displayRect(){
    noStroke();
    //this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.col);
    push()
    translate(0,0);
    //Control position and size of the shape
    rect(this.x, this.y, this.sizeW, this.sizeH);
    pop();
  }
}
