var radius = 10;
var xSpeed = 5;
var ySpeed = 3;
var xSize = 600;
var ySize = 200;
var xBall = 21;
var yBall = 21;
var xBall2 = 21

function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(255);
  fill(255, 220, 115);
  if (xBall > width - radius || xBall < radius){
      xSpeed = -xSpeed;
      if (xspeed >= 40 || xspeed <= -40){
        console.log("Groter dan 40");
        xspeed = 10;
  }
  if (yBall > height - radius || yBall < radius){
      ySpeed = -ySpeed;
  }
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, 2*radius, 2*radius);
}
