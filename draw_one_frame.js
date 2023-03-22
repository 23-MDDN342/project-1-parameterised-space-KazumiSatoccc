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
	colorMode(RGB,255,100,100,100);
	background(200);
	translate(200,200);

	radialGradient(
		0, 0,0,
		0, 0,350,
		color(250,230,80,100), //startcolor
		color(250,180,0,100) //endcolor
	  );
	noStroke();
	ellipse(0,0,200,200); //draw gradient ellipse

	angleMode(DEGREES);
	//translate(200, 200);
	//noFill();

	//rotate(frameCount * 1)

	let centerRing = 100

	ellipse(0,0,100);

	fill(centerRing,centerRing,centerRing,200);
	strokeWeight(5);
	stroke(centerRing);
	ellipse(0,0,15/2+sizee, 15/2+sizee); //draw center ellipse

	// for(i=0;i<12;i++){ //draw flower of life
	// 	rotate(30);
	// 	stroke(50,50,20*i)
	// 	fill(50,50,20*i,satulation);
	// 	ellipse(0,-50,i/2+sizee, i/2+sizee);
	// }

	for(i=0;i<6;i++){ //draw seed of life
  		rotate(60);
		//stroke(40*i,50,50);
		//fill(40*i,50,50,satulation);
		noFill();
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

function radialGradient(sX,sY,sR,eX,eY,eR,colorS,colorE){ //gradient codes
	let gradient = drawingContext.createRadialGradient(sX,sY,sR,eX,eY,eR);
	gradient.addColorStop(0, colorS);
	gradient.addColorStop(1, colorE);
	
	drawingContext.fillStyle = gradient; 
}