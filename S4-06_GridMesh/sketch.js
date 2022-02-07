//The following example shows how to utilize loops, transformations, and
//geometrical shapes to create a 3D illusion grid.

function setup() {
  createCanvas(800, 800);
  background(255, 0, 255);
}

function draw(){
  background(220);
  noLoop();

  for (var y=0; y<10; y++){
    for (var x=0; x<10; x++){
      //Different settings for the odd column
      //(apply transformations)
      push();
      translate(x*160-80, y*100-50);
      allShape(); //Run the allShape function
      pop();

      //Different settings for the even column
      //(apply transformations)
      push();
      translate(x*160, y*100);
      allShape(); //Run the allShape function
      pop();
    }
  }
}

//Function to draw the geometrical shape
function allShape(){
  noStroke();
  fill(0);
  quad(25,0, 50, 50, 25, 100, 0,50);

  fill(255);
  quad(25,0, 80, 0, 105, 50, 50,50);

  stroke(80);
  for (var x=0; x<4; x++){
    push();
    //translate(x*160, y*100);
    for (var x=0; x<54; x+=4){
      line(50+x+1, 50, 25+x+1, 100);
    }
    pop();
  }
}

/*
function verticalLines(){
  fill(0);
  stroke(0);
  for (var y=0; y<height; y+=50){
    line(0, y, width, y);
  }
}

function quadShape(){
  fill(0);
  noStroke();
  for (var y=-1; y<6; y++){
    for (var x=0; x<7; x++){
      push();
      if (x%2==0) translate(x*80, y*100);
      else translate(x*80, y*100-50);
      quad(25,0, 50, 50, 25, 100, 0,50);
      pop();
    }
  }
}

function shadeLines(){
  stroke(80);
  for (var x=0; x<54; x+=4){
    line(50+x, 50, 25+x, 100);
  }
}
*/
