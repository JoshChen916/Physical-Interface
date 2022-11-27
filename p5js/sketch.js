//reference: https://editor.p5js.org/shfitz/sketches/n42x2dg8R
let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data
let dancers=[];
let numDancers=4;
let r= 0.1;

function preload() {
  moon = loadImage("moon.png");
  sky = loadImage("sky.png");
  rainbow=loadImage("rainbow.png");
  pony=loadImage("pony.png");
}
  
function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numDancers; i++) {
        dancers.push(new Body());
    }
  serial = new p5.SerialPort();

  // use serial port
  serial.open('/dev/tty.usbmodem143201');

  //use serial data
  serial.on('data', gotData);

}
function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable
}
function draw() {
  frameRate(8)
  background(0);
  let change = map(latestData, 0, 1023, 0 ,500);
  for (var x=0;x<=width;x+=30){
    for (var y=0;y<=height; y+=50){
      fill(random(40,change),random(100,100+2*change),random(60,100+3*change));
           ellipse(x,y,20+0.4*change,20+0.4*change);//inspired by coding train https://www.youtube.com/watch?v=1c1_TMdf8b8
    }
    
  } 
      fill(252,random(3+0.7*change,244),random(3+0.7*change,255));
      noStroke();
      ellipse(400+0.7*change,100+0.7*change,random(160,175+0.7*change));
  quad(random(267+0.7*change,280+0.7*change),random(27+0.7*change,33+0.7*change),random(261+0.7*change,275+0.7*change),random(46+0.5*change,55+0.5*change),random(348+0.7*change,360+0.7*change),random(66+0.7*change,75+0.7*change),random(359+0.7*change,370+0.7*change),random(55+0.7*change,70+0.7*change));
  quad(random(221+0.7*change,240+0.7*change),random(141+0.7*change,160+0.7*change),random(230+0.7*change,250+0.7*change),random(162+0.7*change,180+0.7*change),random(348+0.7*change,360+0.7*change),random(127+0.7*change,140+0.7*change),random(340+0.7*change,360+0.7*change),random(113+0.7*change,130+0.7*change));
  quad(random(351+0.7*change,370+0.7*change),random(141+0.7*change,160+0.7*change),random(355+0.7*change,370+0.7*change),random(151+0.7*change,170+0.7*change),random(306+0.7*change,330+0.7*change),random(206+0.7*change,230+0.7*change),random(292+0.7*change,310+0.7*change),random(189+0.7*change,210+0.7*change));
  quad(random(391+0.7*change,420+0.7*change),random(100+0.7*change,120+0.7*change),random(369+0.7*change,375+0.7*change),random(265+0.7*change,280+0.7*change),random(396+0.7*change,410+0.7*change),random(230+0.7*change,255+0.7*change),random(412+0.7*change,430+0.7*change),random(135+0.7*change,150+0.7*change));
  quad(random(454+0.7*change,470+0.7*change),random(76+0.7*change,90+0.7*change),random(459+0.7*change,470+0.7*change),random(86+0.7*change,100+0.7*change),random(544+0.7*change,560+0.7*change),random(53+0.7*change,70+0.7*change),random(532+0.7*change,550+0.7*change),random(35+0.7*change,50+0.7*change));
  quad(random(437+0.7*change,450+0.7*change),random(151+0.7*change,170+0.7*change),random(472+0.7*change,490+0.7*change),random(206+0.7*change,220+0.7*change),random(488+0.7*change,500+0.7*change),random(185+0.7*change,200+0.7*change),random(445+0.7*change,460+0.7*change),random(144+0.7*change,160+0.7*change));
  quad(random(459+0.7*change,470+0.7*change),random(124+0.7*change,133+0.7*change),random(466+0.7*change,475+0.7*change),random(111+0.7*change,130+0.7*change),random(580+0.7*change,600+0.7*change),random(136+0.7*change,150+0.7*change),random(577+0.7*change,590+0.7*change),random(155+0.7*change,170+0.7*change));
  fill(random(80+0.7*change,253+0.5*change),random(70+0.5*change,250+0.5*change),3+0.5*change,200+0.5*change);
 quad(0,600,226+0.5*change,414+0.5*change,546+0.5*change,414+0.5*change,800,600);
  for (let i=0;i<numDancers;i++){
    dancers[i].clone();
    dancers[i].render();
  }
    //add new stuffs with the arduino serial control
  if(latestData>180){
    image(sky,0,0,800,600);
    image(moon,350,80,random(180,220),random(180,220));
    image(pony,random(80,120),random(300,330),200,200);
    image(pony,random(200,250),random(200,250),200,200);
    image(pony,random(400,450),random(400,440),200,200);
    image(pony,random(550,600),random(300,350),200,200)
  }
  
push();
scale(r)
  // //add new stuffs with the arduino serial control
    if(latestData >200){
    r += 0.2;
      image(rainbow,100, 100, 60,60);
     image(rainbow,300, 300, 80,80);
      image(rainbow,450, 200, 100,100);
     image(rainbow,600, 40, 60,60);
      image(rainbow,200, 200, 100,100);
      image(rainbow,150, 300, 80,80);
      image(rainbow,350, 3500, 100,100);
      image(rainbow,450, 400, 100,100);
      image(rainbow,500, 350, 100,100);
      image(rainbow,700, 400, 100,100);
    image(rainbow,750, 450, 100,100);
    if (r>2){
       
        r=0.1
    }
}
pop();
}
class Body {
  constructor(){
    this.x=random(180,500);
    this.y=random(300,428);
  }
  clone(){
    this.x+=random(-10,10);
    this.y+=random(-10,10);
    this.y=constrain(this.y,300,600);
  }
  render(){
    push();
    translate(this.x,this.y);
    noStroke();
    fill(252,232,3);
    triangle(43,2,36,36,49,36);
  triangle(49,36,75,14,74,43);
  triangle(74,43,100,32,84,60);
  triangle(75,54,100,66,76,75);
  triangle(76,75,91,89,60,83);
  quad(110,108,150,123,145,141,110,116);
    fill(255);
    ellipseMode(CENTER);
    ellipse(42,60,82,55);
    ellipse(75,117,87,48); 
    ellipse(38,140,15,53);
    ellipse(60,146,15,53);
    ellipse(83,149,15,53); 
    ellipse(106,146,15,53);
    rectMode(CENTER);
    rect(56,83,13,35);
    triangle(67,47,75,54,86,36);
    fill(252,232,3);
    triangle(43,0,37,34,49,34);
    fill(0);
    ellipse(48,55,10,10);
    pop();
    }

   
  }

 
