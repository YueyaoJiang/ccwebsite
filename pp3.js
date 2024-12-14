let sleepStage;
let elapsedTime;
let lastTime;

//color and speed of each sleeping state
let lightSpeed = 0.5;
let lightColor = [135, 206, 250];
let deepSpeed = 0.1;
let deepColor = [0];
let dreamingSpeed = 2.0;
let dreamingColor = [255, 182, 193];

function setup() {
  createCanvas(400, 400).parent(sketchcontain3);
  //initial set up light state, time elapsed and start time
  sleepStage = "light";
  elapsedTime = 0;
  lastTime = millis();
}

function draw() {
  let currentTime = millis(); // get current time
  let deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  //change the time passed for different stage
  if (sleepStage === "light") {
    elapsedTime += deltaTime * lightSpeed;
    background(lightColor);
  } else if (sleepStage === "deep") {
    elapsedTime += deltaTime * deepSpeed;
    background(deepColor);
  } else if (sleepStage === "dreaming") {
    elapsedTime += deltaTime * dreamingSpeed;
    background(dreamingColor);
  }
    drawClock(elapsedTime);
}

  //draw the clock
function drawClock(time) {

  stroke(255);
  strokeWeight(5);
  noFill();
  circle(width / 2, height / 2, 400);

  //calculate place of second hand
  let seconds = time / 1000 % 60;
  // change second to angle
  let angle = map(seconds, 0, 60, 0, TWO_PI); 

  //draw second hand
  let posX = width / 2 + cos(angle) * 200;
  let posY = height / 2 + sin(angle) * 200;
  stroke(255, 0, 0);
  strokeWeight(3);
  line(width / 2, height / 2, posX, posY);
}

function mousePressed() {
  //change state through mouse press
  if (sleepStage === "light") {
    sleepStage = "deep";
  } else if (sleepStage === "deep") {
    sleepStage = "dreaming";
  } else if (sleepStage === "dreaming") {
    sleepStage = "light";
  }
}


