var vidcapture, ctracker, drawcanvas;



let posNotfound = false;





// var mouth,Leye, Reye;
// function preload() {
// mouth = loadImage('imgs/mouth.png');
// Leye  = loadImage('imgs/Left-eye.png');
// Reye  = loadImage('imgs/right-eye.png');
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {



	var kanvas = createCanvas(windowWidth, windowHeight);
	kanvas.parent("Kauntainer");

//p5 method for  creating video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*2,vidcapture.height*3);
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
	translate(vidcapture.width*2.32,100)
	scale(-1.5,1.5)
   

    // image(vidcapture,0, 0);
    
    var positions = ctracker.getCurrentPosition();
    
    // print(positions)

    if (positions) {

    	posNotfound === true;
    

        // ctracker.draw(drawcanvas);

        

        // print('x:' + positions[27][0])
        // print('y:' + positions[27][1])

        console.log('x:' + positions[33][0])
       console.log('y:' + positions[33][1])





        var r = map(positions[33][0],250,525, 0, 255)
        var b = map(positions[33][1],122 ,200, 0, 255)

        var m = map(positions[60][1],360,370, 0, 255)
        var m2 = map(positions[60][0],222,333, 0, 255)
        // image(Leye, positions[27][0], positions[32][1]);

        
		background(r, 155,r*2)
        

        fill(255);
        ellipse(positions[27][0],positions[27][1],[50+(m/30)/10])
        ellipse(positions[32][0],positions[32][1],[50+(m/30)/10])


		fill(0);
        ellipse(positions[27][0],positions[27][1],[20 - (m /-290) ])
        ellipse(positions[32][0],positions[32][1],[20 - (m /-290) ])

		fill(252,3,123);
        ellipse(positions[57][0],positions[57][1],[40+(m/55.5)])

    }
    
     else if  (posNotfound === false) {

     	background(60,155,130)
	
    fill(255,5,84,10);
 	ellipse(290,214, 50, 50);
    }


}
















