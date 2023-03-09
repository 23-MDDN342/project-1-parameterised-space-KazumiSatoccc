var x=300;
var y=300;
var a=100;
var b=100;

var polySize=10
let deg24 = 24
let deg60 = 60


function draw_one_frame() {
	//let polyRotate = map(frameCount, 0, radians(deg24), 0, radians(deg60));
  background(255);
  //hexagons
  translate(200, 200);
  
  for (let i = 0; i < 10; i++){
	push();
	//angleMode(DEGREES);
	strokeWeight(4);
	//stroke(frameCount + 10*i);
	rotate(frameCount * i);
	strokeJoin(ROUND);
	noFill();
    polygon(0, 0, polySize + 10 * i, 6)
	
	pop();

  }
  
}

function polygon(x, y, radius, npoints) { //function for drawing polygons
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
	  let sx = x + cos(a) * radius;
	  let sy = y + sin(a) * radius;
	  vertex(sx, sy);
	}
	endShape(CLOSE);   //polygon(0, 0, 70, 7); codee for drawing
  }
