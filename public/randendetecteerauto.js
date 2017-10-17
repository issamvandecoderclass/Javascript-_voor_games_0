var xCar;
var yCar;
var wheelSize;
var speed;

function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(800, 180);
  xCar = 50;
  yCar = 100;
  wheelSize = 24;
  speed = 10;
}

function draw() {
    //Één cijfer geeft grijswaarden
    background(220);
    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > width || xCar < 0){
        console.log("Bij de x as");
        speed = -speed;
    }
    xCar += speed;
    speed += 1;
    if (speed >= 40 || speed <= -40){
      console.log("Groter dan 40");
    };
    else if (speed <= -40) {
            speed += 1;
    } else {
      console.log('teysgrsuygeu');
    }
};

function drawCar(xCar, yCar, wheelSize){
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(255, 220, 115);
    //Parameters: x, y, breedte, hoogte
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    stroke(255); //Witte randen voor de wielen
    strokeWeight(2); //Iets dikkere randen
    fill(12, 66, 66);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize); //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(0); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); //Parameters: x1,y1,x2,y2
    //'width' is de breedte van je canvas
}
