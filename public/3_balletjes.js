var radius = 10;
var xSize = 600;
var ySize = 200;
var xBall = 21;
var yBall = 21;
var xSpeed = 2;
var ySpeed = 3;
var xBall2 = 50;
var yBall2 = 50;
var xSpeed2 = 5;
var ySpeed2 = 3;
var xBall3 = 70;
var yBall3 = 70;
var xSpeed3 = 8;
var ySpeed3 = 8;

function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(255);
  if (xBall > width - radius || xBall < radius){
      xSpeed = -xSpeed;
      console.log("In x ball")
  }
  if (yBall > height - radius || yBall < radius){
      ySpeed = -ySpeed;
      console.log("In y ball");
  }

  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, 2*radius, 2*radius);

  if (xBall2 > width - radius || xBall2 < radius){
      xSpeed2 = -xSpeed2;
      console.log("In de bal 2 x");
  }
  if (yBall2 > height - radius || yBall2 < radius){
      ySpeed2 = -ySpeed2;
      console.log("In de bal 2 y");
  }

  xBall2 += xSpeed2;
  yBall2 += ySpeed2;
  ellipse(xBall2, yBall2, 2*radius, 2*radius);

  if (xBall3 > width - radius || xBall3 < radius){
      xSpeed3 = -xSpeed3;
      console.log("In de bal 3 x");
  }
  if (yBall3 > height - radius || yBall3 < radius){
      ySpeed3 = -ySpeed3;
      console.log("In de bal 2 y");
  }

  xBall3 += xSpeed3;
  yBall3 += ySpeed3;
  ellipse(xBall3, yBall3, 2*radius, 2*radius);
}
