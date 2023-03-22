// var x=300;
// var y=300;
// var a=100;
// var b=100;

// var polySize=10
// var deg24 = 24
// var deg60 = 60

var sizee; 
var sizee2;
var adder; 
var adder2;
var satulation=100;

var gradSize = 150

sizee = 15; //determines size of the seed of life
sizee2 = 120;
adder = 4; //determines speed of ellipse size change
adder2 = 4;

function draw_one_frame() {
	colorMode(HSB,360,100,100,1);
	background(270,85,5);
	translate(width/2,height/2); //center of everything

	//scale(1.7);

	radialGradient(
		0, 0, 50,
		0, 0, 100,
		color(50,100,100,100), //startcolor
		color(50,20,100,100) //endcolor
	  );
	noStroke();
	ellipse(0,0,gradSize,gradSize); //draw gradient ellipse

	angleMode(DEGREES);
	//translate(200, 200);
	//noFill();

	//rotate(frameCount * 1)

	let centerRing = 100
	
	noFill();
	strokeWeight(1);
	stroke(0);
	//ellipse(0,0,100);

	//fill(centerRing,centerRing,centerRing,200);
	ellipse(0,0,15/2+sizee, 15/2+sizee); //draw center ellipse

	// for(i=0;i<12;i++){ //draw flower of life
	// 	rotate(30);
	// 	stroke(50,50,20*i)
	// 	fill(50,50,20*i,satulation);
	// 	ellipse(0,-50,i/2+sizee, i/2+sizee);
	// }
	push();
  	for(ii=0;ii<6;ii++){ //draw outer seed of life
  		rotate(60);
		stroke(360);
		noFill();
  		ellipse(0,-gradSize/2,ii/2+sizee2,ii/2+sizee2);
  	}

  	sizee2+=adder2;

  	if (sizee2 >= 150) {
		adder2*=-1;
  	} 

  	if (sizee2 <= 100) {
  		adder2*=-1;
  	}
	pop();

	push();
	for(i=0;i<6;i++){ //draw inner seed of life
  		rotate(60);
		//stroke(40*i,50,50);
		//fill(40*i,50,50,satulation);
		stroke(0);
		noFill();
  		ellipse(0,-25,i/2+sizee, i/2+sizee);
	}

	sizee+=adder;

	if (sizee >= 50) {
  		adder*=-1;
	} 

	if (sizee <= 0) {
  		adder*=-1;
	}
	pop();

	
}

function radialGradient(sX,sY,sR,eX,eY,eR,colorS,colorE){ //gradient codes
	let gradient = drawingContext.createRadialGradient(sX,sY,sR,eX,eY,eR);
	gradient.addColorStop(0, colorS);
	gradient.addColorStop(1, colorE);
	
	drawingContext.fillStyle = gradient; 
}