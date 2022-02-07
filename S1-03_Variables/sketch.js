//The example here demonstrates the use of variables, and how we can use
//the console to print and see our values. Also, it shows the technique
//of concatenation: how to add text together with other text, or add
//text together with numbers - all extremely useful techniques especially
//for debugging.

function setup() {
  //Canvas size
  createCanvas(800,800);
  background(40);

  //Text settings
  textSize(22)
  fill(255);
  text("Open the Developer > Javascript Console", 10, 100);
  text("to see the messages", 10, 130);

  //Setup variables with any content - text, numbers, etc
  let name; //declare variable name
  name = "Glenn"; //assign text value to variable
  console.log(name); //print it to the console

  let floatNumber = 0.4; //declare variable and assign value
  console.log(floatNumber); //print it to the console

  //We can also add variables together (as long as they contain a number)
  floatNumber = floatNumber + 20;
  console.log(floatNumber); //print it to the console

  //We can also use a method called concatenation,
  //to add strings together
  name = "Steve";
  console.log("Name is now: " + name);

  //Concatenation also works with text and numbers
  console.log("Float value is: " + floatNumber);
}
