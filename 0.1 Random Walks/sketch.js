// create new walker
let walker;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // instantiating walker object
  walker = new Walker();
  background(255);
}

// each loop, the walker will step and draw
function draw() {
  walker.step();
  walker.render();
}

// creating walker object
class Walker {
  // initializing walker's starting location in the constructor
  // location = center of window
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  // displays the pixels/stroke
  render () {
    stroke(0);
    point(this.x, this.y);
  }

  // directs the walker to take a step
  step() {
    // four possible directions (left, right, up, down)
    // using the Random method to choose which direction to go in
    var choice = floor(random(4));

    // depending on the number (0-3), the walker will move in that direction
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }

    // keeps the walker within the window
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

}