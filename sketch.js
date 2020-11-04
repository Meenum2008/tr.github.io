const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var b1;
var e;
function preload()
{
b1=loadImage("dustbingreen.png")	 
}

function setup() {
	createCanvas(1270, 570);
		//650
	rectMode(CENTER);

 
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(20,390,55);

	groundObject=new Ground(width/2,560,width,20);
	  
	 
	dustbin3=new Dustbin(1100,400,200,20);
	dustbin3.image=b1;
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  Engine.update(engine)
  paperObject.display();
  groundObject.display();
  
  dustbin3.display();
 
}function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-85,y:-85});
	}
}

