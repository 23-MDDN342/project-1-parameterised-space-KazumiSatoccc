var sizee; 
var sizee2;
var adder; 
var adder2;

var seedSize = 50 //determines size of each seed ellipse 
var gradSize = 150 //determines size of gradient ellipse

sizee = 15; //determines size of the seed of life
sizee2 = 115;
adder = 4; //determines speed of ellipse size change
adder2 = 4;

function draw_one_frame() {
	colorMode(HSB,360,100,100,1);
	angleMode(DEGREES);
	background(280,100,20);
	translate(width/2,height/2-50); //center of everything

	scale(1.7);


	let centerRing = 100
	
	ellipse(0,0,1/2+sizee, 1/2+sizee); //draw center ellipse

	push();
  	for(ii=0;ii<6;ii++){ //draw outer seed of life
  		rotate(60);
		stroke(360);
		noFill();
		push();
		strokeradialGradient(
			0, gradSize/2, 50,
			0, gradSize/2, 100,
			0, gradSize/2, 190,
			color(280,100,20,0),
			color(50,40,100,100),
			color(280,100,20,0)
			);
		noFill();
		
		strokeWeight(3);
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
	radialGradient(
		0, 0, 50,
		0, 0, 100,
		color(50,100,100,100), //startcolor
		color(50,20,100,0) //endcolor
	  );
	noStroke();
	ellipse(0,0,250,250); //draw gradient ellipse
	pop();

	push();
	// for(i=0;i<6;i++){ //draw inner seed of life
  	// 	rotate(60);
	// 	push();
	// 	strokeradialGradient(
	// 	  0, seedSize/2, 50,
	// 	  0, seedSize/2, 100,
	// 	  0, seedSize/2, 190,
	// 	  color(0,0,100,100),
	// 	  color(270,85,5,0),
	// 	  color(0,0,100,100) //endcolor
	// 	);
	// 	noFill();
		  
	// 	strokeWeight(3);
	// 	ellipse(0,seedSize/2,i/2+sizee, i/2+sizee);
	// 	pop();
	// }

	// sizee+=adder;

	// if (sizee >= seedSize) {
  	// 	adder*=-1;
	// } 

	// if (sizee <= seedSize-50) {
  	// 	adder*=-1;
	// }
	// pop();

	
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