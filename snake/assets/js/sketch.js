var s;
var cnv;
var scl = 20;
var d;
var start;

var gname;

var food;

function resetGame() {
	start = 1;
    s = new Snake();
	frameRate(4);
	startLocation();
}

function centerCanvas() {
	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	cnv.position(x);
}

function gameName() {
	gname = createElement('h1', 'SNAKE');
	gname.style('text-align', 'center');
	gname.style('margin', '.2em');
	gname.style('font-family', 'monospace');
}

function setup () {
	gameName();
    cnv = createCanvas(600, 600);
	centerCanvas();
	resetGame()
}

function startLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(cols / 2 + 4), floor(rows / 2));
	food.mult(scl);
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw () {
    background(51);
	
	if(s.eat(food)) {
		pickLocation();
	}
	s.death();
    s.update();
    s.show();
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW && d != 2) {
        s.dir(0, -1);
		d = 1;
		start = 0;
    } else if (keyCode === DOWN_ARROW && d != 1) {
        s.dir(0, 1);
		d = 2;
		start = 0;
    } else if (keyCode === RIGHT_ARROW && d != 4) {
        s.dir(1, 0);
		d = 3;
		start = 0;
    } else if (keyCode === LEFT_ARROW && d != 3) {
        s.dir(-1, 0);
		d = 4;
		start = 0;
    }
}