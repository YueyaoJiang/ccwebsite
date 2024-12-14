let onX
let onY

let onX2
let onY2

function setup() {
  createCanvas(400, 400).parent(sketchcontain2);
}

function draw() {
  background(0);

  onX = map(mouseX, 0, 400, 100, 130);
  onY = map(mouseY, 0, 400, 120, 145);

  onX2 = map(mouseX, 0, 400, 250, 280);
  onY2 = map(mouseY, 0, 400, 120, 145);

  fill(255);
  stroke(0);
  strokeWeight(5);
  circle(200,200,350);


  fill(255);
  stroke(0);

  circle(125,150,70);
   circle(275,150,70)


  fill(0);
  rect(onX, onY, 10, 10);
  rect(onX2, onY2, 10, 10);

  fill(255);
  rect(100, 225, 200, 75);

  line(150, 225, 150, 300);
  line(200, 225, 200, 300);
  line(250, 225, 250, 300);
}