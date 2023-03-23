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

var seedSize = 50 //determines size of each seed ellipse 
var gradSize = 150 //determines size of gradient ellipse

sizee = 25; //determines size of the seed of life
sizee2 = 125;
adder = 4; //determines speed of ellipse size change
adder2 = 4;

function draw_one_frame() {
	colorMode(HSB,360,100,100,1);
	angleMode(DEGREES);
	background(270,85,5);
	translate(width/2,height/2-50); //center of everything

	scale(1.7);

	push();
	radialGradient(
		0, 0, 50,
		0, 0, 100,
		color(50,100,100,100), //startcolor
		color(50,20,100,0) //endcolor
	  );
	noStroke();
	ellipse(0,0,250,250); //draw gradient ellipse
	pop();

	let centerRing = 100
	
	noFill();
	strokeWeight(3);
	stroke(0);
	//ellipse(0,0,100);

	//fill(centerRing,centerRing,centerRing,200);
	ellipse(0,0,1/2+sizee, 1/2+sizee); //draw center ellipse

	push();
  	for(ii=0;ii<6;ii++){ //draw outer seed of life
  		rotate(60);
		noFill();
		push();
		strokeradialGradient(
			0, gradSize/2, 50,
       		0, gradSize/2, 100,
			0, gradSize/2, 190,
			color(270,85,5,0),
			color(0,0,100,100),
        	color(270,85,5,0) 
	  	);
		strokeWeight(30);
		ellipse(0,gradSize/2,ii/2+sizee2,ii/2+sizee2);
		pop();
  	}

  	sizee2+=adder2;

  	if (sizee2 >= gradSize) {
		adder2*=-1;
  	} 

  	if (sizee2 <= gradSize-50) {
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
  		ellipse(0,seedSize/2,i/2+sizee, i/2+sizee);
	}

	sizee+=adder;

	if (sizee >= seedSize) {
  		adder*=-1;
	} 

	if (sizee <= seedSize-50) {
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

function strokeradialGradient(sX,sY,sR,mX,mY,mR,eX,eY,eR,colorS,colorM,colorE){ //gradient codes
	let strokegradient = drawingContext.createRadialGradient(sX,sY,sR,mX,mY,mR,eX,eY,eR);
	strokegradient.addColorStop(0, colorS);
    strokegradient.addColorStop(0.5, colorM);
	strokegradient.addColorStop(1, colorE);
	
	drawingContext.strokeStyle = strokegradient; 
}