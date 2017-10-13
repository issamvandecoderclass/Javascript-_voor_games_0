var vierkant = {
  x: 50,
  y: 50,
  b: 35,
  h: 35
};

var xSize = 400;
var ySize = 180;

function setup(){
  createCanvas(xSize,ySize);
}

function draw(){
  background(0);
  rect(vierkant.x,vierkant.y,vierkant.b,vierkant.h);
}
