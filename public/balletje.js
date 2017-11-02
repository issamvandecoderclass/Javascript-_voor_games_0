var radius = 10;
var xSpeed = 5;
var ySpeed = 3;
var xSpeed2 = 5;
var ySpeed2 = 3;
var xSize = 600;
var ySize = 200;
var xBall = 21;
var yBall = 21;
var xBall2 = 21;
var yBall2 = 21;


var bal2 = {
  x: 50,
  y: 10
};

function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(255);
  if (xBall > width - radius || xBall < radius){
      xSpeed = -xSpeed;
  }
  if (yBall > height - radius || yBall < radius){
      ySpeed = -ySpeed;
  }
  if (bal2.x > width - radius || bal2.x < radius){
      xSpeed2 = -xSpeed2;
      console.log("In de bal 2 x");
  }
  if (xBall2 > width - radius || xBall2 < radius){
      xSpeed2 = -xSpeed2;
      console.log("In de bal 2 y");
  }
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, 2*radius, 2*radius);
  ellipse(bal2.x, bal2.y, 2*radius, 2*radius);
}
