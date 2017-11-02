var radius = 10;
var xSpeed = 5;
var ySpeed = 3;
var xSize = 600;
var ySize = 200;
var xBall = 21;
var yBall = 21;

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
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, 2*radius, 2*radius);
}
