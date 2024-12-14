// I record amounts cigratte I smoke everyday
const finalHeights = [300, 400, 200, 400, 300, 100, 200];
let timer = 0;
// inital height of all the data(the length of cigratte)
const initialHeight = 400;

// color of cigratte & fix length of gray and brown part
const colorBrown = "#D2B48C";
const colorWhite = "#FFFFFF";
const colorGray = "#A9A9A9";

const brownHeight = 50;
const grayHeight = 15;

const spacing = 85;


function setup() {
  createCanvas(600, 600).parent(sketchcontain6);
  noStroke();
}

function draw() {
  background(0);
  
//the animation timer
  timer += deltaTime / 1000;
  if (timer >= 3) timer = 3;
  let animationProgress = timer / 3;
  
  for (let i = 0; i < finalHeights.length; i++) {

    let targetHeight = finalHeights[i];
    let dynamicHeight = lerp(initialHeight, targetHeight, animationProgress);
    let whiteHeight = dynamicHeight - brownHeight - grayHeight;
    let posY = height;

// brown part of cigratte(x change part)
    fill(colorBrown);
    rect(20 + i * spacing, posY - brownHeight, 20, brownHeight);
    posY -= brownHeight;

// white part(the part which lenth is different)
    fill(colorWhite);
    rect(20 + i * spacing, posY - whiteHeight, 20, whiteHeight);
    posY -= whiteHeight;

// gray part(x change part)
    fill(colorGray);
    rect(20 + i * spacing, posY - grayHeight, 20, grayHeight);
  }
}