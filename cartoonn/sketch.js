function setup() {
  createCanvas (500, 500);
  background (245, 0 ,66);
}

function draw() {
  
  stroke(8);
  strokeWeight(4);
  smooth(0);

  
 
  
    //pupils
  ellipseMode(CORNER);
  ellipse(25, 25, 50, 50);
  
  //body 
  fill(230, 225,100);
   ellipse (170, 180, 200, 250);
  
   // smiley
    noFill();
arc(100, 300, 60, 60, HALF_PI, PI);

 //whites of eyes
  noStroke();
  smooth ();
  fill(255);
  ellipse (200,250, 60, 80);
  ellipse (255,255, 50, 70);
  fill(0);
  ellipse (275, 295, 20, 30);
  ellipse (230, 297, 20, 30);
  
  
 
 
 
  
  
  

}