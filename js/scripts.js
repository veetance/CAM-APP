var vidcapture, ctracker, drawcanvas;


var mouth,Leye, Reye;


// function preload() {
// mouth = loadImage('imgs/mouth.png');
// Leye  = loadImage('imgs/Left-eye.png');
// Reye  = loadImage('imgs/right-eye.png');
// }



function setup() {



	var kanvas = createCanvas(windowWidth, windowHeight);
	kanvas.parent("Kauntainer");

//p5 method for  creating video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*5,vidcapture.height*6);
	vidcapture.hide();

// start the tracker
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt)

	
	//just for testing
	drawcanvas = document.getElementById('defaultCanvas0')


}


function draw() {


	background(0,50);
	translate(vidcapture.width,0)
	scale(-1,1)
   

    // image(vidcapture,0, 0);
    
    var positions = ctracker.getCurrentPosition();
    
    // print(positions)

    if (positions) {

        // ctracker.draw(drawcanvas);

        fill(255);
        ellipse(positions[27][0],positions[32][1],[20])
        ellipse(positions[32][0],positions[27][1],[20])

        print('x:' + positions[27][0])
        print('y:' + positions[27][1])


        var r = map(positions[27][0],0, width, 0, 255)
        var b = map(positions[27][1],0, height, 0, 255)
        // image(Leye, positions[27][0], positions[32][1]);

        background(r,255,b)

        fill(255);
        ellipse(width/2, height/2, r,b)
    }
}












	// translate( width/2, height/2);
	
	// noStroke();
	// fill(255,203,0);
	// // circle( mouseX, mouseY, 40);

	// // print("x: " + mouseX)
	// // print("y: " + mouseY)



	// var xColor = map(mouseX, 0, width, 0, 255)
	// var yColor = map(mouseY, 0, height, 0, 255)

	// stroke(xColor, 0 ,yColor);

	// var xRotate = map(mouseX, 0, width, 0, 360)
	// print(xRotate)
	// angleMode(DEGREES)
	// rotate(xRotate);
	// // line(mouseX + 50, mouseY + 50, mouseX - 50, mouseY - 50)
	// line(0,0,50,50)


