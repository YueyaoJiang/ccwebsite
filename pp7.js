let cols, rows;
let w = 40;
let grid = [];
let current;
let stack = [];
let me;
let exit;

let myImage, tnsImage; 

function preload() {

  myImage = loadImage('image/mee.jpg');
  tnsImage = loadImage('image/building.png');
}

function setup() {
  createCanvas(600, 600,WEBGL).parent(sketchcontain7);
  cols = floor(width / w / 2);
  rows = floor(height / w / 2);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid.push({
        i: i,
        j: j,
        walls: [true, true, true, true],
        visited: false
      });
    }
  }

  current = grid[0];
  me = { x: 0, y: 0 };
  exit = { x: cols - 1, y: rows - 1 };
}

function draw() {
  background(30);

  rotateX(PI / 4);
  translate(-cols * w / 2, -rows * w / 2, 0);

  for (let i = 0; i < grid.length; i++) {
    showCell(grid[i]);
  }

  drawMe(me.x, me.y);
  drawExit(exit.x, exit.y);

  current.visited = true;
  let next = checkNeighbors(current);
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

function keyPressed() {
  let cell = getCell(me.x, me.y);
  if (keyCode === UP_ARROW && !cell.walls[0]) me.y -= 1;
  if (keyCode === RIGHT_ARROW && !cell.walls[1]) me.x += 1;
  if (keyCode === DOWN_ARROW && !cell.walls[2]) me.y += 1;
  if (keyCode === LEFT_ARROW && !cell.walls[3]) me.x -= 1;
}

function showCell(cell) {
  let x = cell.i * w;
  let y = cell.j * w;

  push();
  translate(x + w / 2, y + w / 2, 0);
  noStroke();
  fill(50);
  plane(w, w);

  stroke(255);

  if (cell.walls[0]) drawWall(0, -w / 2);
  if (cell.walls[1]) drawWall(w / 2, 0, true);
  if (cell.walls[2]) drawWall(0, w / 2);
  if (cell.walls[3]) drawWall(-w / 2, 0, true);

  pop();
}

function drawWall(x, y, rotate = false) {
  push();
  translate(x, y, w / 4);
  if (rotate) rotateZ(HALF_PI);
  box(w, 2, w / 2);
  pop();
}
  // draw me
function drawMe(x, y) {
  push();
  translate(x * w + w / 2, y * w + w / 2, w / 4);

  texture(myImage);
  plane(w, w);
  pop();
}
  // draw the school
function drawExit(x, y) {
  push();
  translate(x * w + w / 2, y * w + w / 2, w / 4);
  texture(tnsImage);
  plane(w, w);
  pop();
}

function getCell(i, j) {
  return grid[index(i, j)];
}

function index(i, j) {
  if (i < 0 || j < 0 || i >= cols || j >= rows) return -1;
  return i + j * cols;
}

function checkNeighbors(cell) {
  let neighbors = [];
  let top = getCell(cell.i, cell.j - 1);
  let right = getCell(cell.i + 1, cell.j);
  let bottom = getCell(cell.i, cell.j + 1);
  let left = getCell(cell.i - 1, cell.j);

  if (top && !top.visited) neighbors.push(top);
  if (right && !right.visited) neighbors.push(right);
  if (bottom && !bottom.visited) neighbors.push(bottom);
  if (left && !left.visited) neighbors.push(left);

  return neighbors.length > 0 ? neighbors[floor(random(neighbors.length))] : undefined;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) { a.walls[3] = false; b.walls[1] = false; }
  if (x === -1) { a.walls[1] = false; b.walls[3] = false; }
  let y = a.j - b.j;
  if (y === 1) { a.walls[0] = false; b.walls[2] = false; }
  if (y === -1) { a.walls[2] = false; b.walls[0] = false; }
}