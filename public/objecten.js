var xSize = 600;
var ySize = 200;
var bal1;

function setup(){
  createCanvas(xSize, ySize);
  bal1 = new Bal();
  bal1.xPos = 21;
  bal1.yPos = 21;
  bal1.radius = 10;
  bal1.xSpeed = 5;
  bal1.ySpeed = 3;
}

function draw(){
  background(255);
  bal1.teken();
  bal1.beweeg();
}

function Bal(){
  this.xPos;
  this.yPos;
  this.radius;
  this.xSpeed;
  this.ySpeed;

  this.teken = function(){
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }

  this.beweeg = function(){
    if (this.xPos > width - this.radius || this.xPos < this.radius){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.radius || this.yPos < this.radius){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
}
