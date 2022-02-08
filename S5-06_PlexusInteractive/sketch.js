//This example extends S5-05_Plexus and demonstrates a case
//in which the user can generate the particles by clicking the
//mouse. Moreover, a motion fading process is applied to create
//an ethereal aesthetic.

//Here we create an array to store class object instances
let plexusArray = [];

//Have a list of colors
let listOfColors = ['#FF6BC7',
                    '#CE5DDE',
                    '#BB73F5',
                    '#7A5DDE',
                    '#5F6FFA'
                  ];

function setup() {
  createCanvas(800, 800);
  strokeWeight(4);
  gradient();
}

//This function helps us to generate the background gradient
function gradient(){
  //addBlur(strokeVal);

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

//The objects are created when the mouse is pressed
function mousePressed() {
  let objectSize = 10;
  let selArray = parseInt(random(5));
  let speedX = random(-5, 5);
  let speedY = random(-5, 5);
  //Insted of having a predefined array size, we use the push() function
  //This is add one additional array position with the instance of the class
  plexusArray.push( new Plexus(mouseX, mouseY, speedX, speedY, objectSize, listOfColors[selArray]));
}

/*
// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}*/

function draw() {
  //background(40);
  //image(img, 0, 0)
  noStroke();
  fill(40,20);
  rect(0,0,width,height);
  //gradient();
  blendMode(SCREEN);

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
  constructor(x, y, speedX, speedY, size, col){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size/4;

    this.col = col;
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

  //Class function that displays the ellipse
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
