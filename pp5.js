function setup() {
  createCanvas(600, 600).parent(sketchcontain5);
  noStroke();
}

function draw() {
  background(0); 

  let space = 20; 
  let square = width / space; 

  for (let i = 0; i < space; i++) {
    for (let j = 0; j < space; j++) {
      let x = i * square;
      let y = j * square + sin(frameCount * 0.05 + i) * 20;

      
      if (i % 2 === 0) { 
        let grayValue = 100 + j * 7; 
        fill(grayValue, grayValue, grayValue); 
      } else { 
        let grayValue = 255 - j * 3; 
        fill(grayValue, grayValue, grayValue); 
      }

  
      if (j > space / 2) { 
        rect(x, y, square * 0.8, square * 0.8); 
      } else { 
        rect(x, y, square, square);
      }
    }
  }
}
