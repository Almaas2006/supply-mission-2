var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxRect1= createSprite(360,645,200,20);
	boxRect1.shapeColor="red";

	boxRect1= Bodies.rectangle(360,645,200,20);
	World.add(world,boxRect1);

	boxRect2= createSprite(270,600,20,100);
	boxRect2.shapeColor="red";
	
	boxRect2= Bodies.rectangle(270,600,20,100);
	World.add(world,boxRect2);

	boxRect3= createSprite(450,600,20,100);
	boxRect3.shapeColor="red";

	boxRect3= Bodies.rectangle(450,600,20,100);
	World.add(world,boxRect3);


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of thse Down arrow key.
	Matter.Body.setStatic(packageBody, false)
    
  }
}



