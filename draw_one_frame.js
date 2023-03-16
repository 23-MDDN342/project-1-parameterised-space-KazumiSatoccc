// var x=300;
// var y=300;
// var a=100;
// var b=100;

// var polySize=10
// var deg24 = 24
// var deg60 = 60

var sizee;
var adder;
var satulation=100;

sizee = 15;
adder = 4;

function draw_one_frame() {
// 	//let polyRotate = map(frameCount, 0, radians(deg24), 0, radians(deg60));
//   background(255);
//   //hexagons
//   translate(200, 200);
  
//   for (let i = 0; i < 10; i++){
// 	push();
// 	//angleMode(DEGREES);
// 	strokeWeight(4);
// 	//stroke(frameCount + 10*i);
// 	rotate(frameCount * i);
// 	strokeJoin(ROUND);
// 	noFill();
//     polygon(0, 0, polySize + 10 * i, 6)
	
// 	pop();

//   }
	angleMode(DEGREES);
	background(0);
	translate(200, 200);
	//noFill();

	//rotate(frameCount * 1)

	//ellipseSize = frameCount * 5;

	let centerRing = 100

	fill(centerRing,centerRing,centerRing,200);
	strokeWeight(1);
	stroke(centerRing);
	ellipse(0,0,15/2+sizee, 15/2+sizee); //draw center ellipse

	for(i=0;i<12;i++){ //draw flower of life
		rotate(30);
		stroke(50,50,20*i)
		fill(50,50,20*i,satulation);
		ellipse(0,-50,i/2+sizee, i/2+sizee);
	}

	for(i=0;i<6;i++){ //draw seed of life
  		rotate(60);

		
		stroke(40*i,50,50);
		fill(40*i,50,50,satulation);
  		ellipse(0,-25,i/2+sizee, i/2+sizee);
		
	}

	sizee+=adder;

	if (sizee >= 45) {
  		adder*=-1;
	} 

	if (sizee <= 0) {
  		adder*=-1;
	}
}

// function polygon(x, y, radius, npoints) { //function for drawing polygons
// 	let angle = TWO_PI / npoints;
// 	beginShape();
// 	for (let a = 0; a < TWO_PI; a += angle) {
// 	  let sx = x + cos(a) * radius;
// 	  let sy = y + sin(a) * radius;
// 	  vertex(sx, sy);
// 	}
// 	endShape(CLOSE);   //polygon(0, 0, 70, 7); codee for drawing
//   }
