let ball;
let started = false;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 100); // fondo blanco
  ball = new Ball(width / 2, height / 2);
  noStroke(); // sin bordes en general
}

function draw() {
  if (started) {
    ball.move();
    ball.display();
  }
}

function mouseMoved() {
  started = true;
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.hue = 0;
    this.radius = width / 2 - 5;
  }

  move() {
    // Movimiento aleatorio con más distancia
    let angle = random(TWO_PI);
    let step = random(10, 25); // más distancia
    let newX = this.pos.x + cos(angle) * step;
    let newY = this.pos.y + sin(angle) * step;

    // Restringir dentro del círculo
    let d = dist(newX, newY, width / 2, height / 2);
    if (d < this.radius) {
      this.pos.set(newX, newY);
    }
  }

  display() {
    // Pintar fondo con arcoíris
    fill(this.hue, 80, 100);
    circle(this.pos.x, this.pos.y, 14); // trazo más grande

    // Pelota blanca encima
    fill(0, 0, 100);
    noStroke();
    circle(this.pos.x, this.pos.y, 8);

    this.hue = (this.hue + 3) % 360;
  }
}
