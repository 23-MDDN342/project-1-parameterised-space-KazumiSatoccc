var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  background(255);
  push();  //illusion hexagon
  translate(200, 200);
  for (let i = 0; i < 7; i++){
	stroke(5);
    polygon(0, 0, 70 - 10 * i, 6);
  }
  pop();
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
