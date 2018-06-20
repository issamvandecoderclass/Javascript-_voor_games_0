var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 100;
var xSize = 50;
var ySize = 100;

function setup(){
  createCanvas(xSize, ySize);

  for (var i = 0; i< aantalBallen; i++){
    x = random(12, 200);
    y = random(12, 100);
    radius = random(10, 12);
    xSpeed = random(3, 4);
    ySpeed = random(2, 3);
    bal = new Bal(x, y, radius, xSpeed, ySpeed);
    ballen.push(bal);
  }
}
function draw(){
  background(255);

  // ballen.length geeft de lengte van het ballenarray terug
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i]; //Haal een bal uit het array
    bal.teken();
    bal.beweeg();
  }
}
