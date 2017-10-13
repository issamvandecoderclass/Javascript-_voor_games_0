var vierkant = {
  x: 50,
  y: 50,
  b: 35,
  h: 35
};

function setup(){
  createCanvas(800,600);
}

function draw(){
  background(0);
  rect(vierkant.x,vierkant.y,vierkant.b,vierkant.h);
}
