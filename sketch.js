
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground,wall1,wall2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options={
	restitution:0.15,
	isStatic:false
	}
	var options1={
	isStatic:true
	}
	//Create the Bodies Here.
ball=Bodies.circle(200,100,30,options)
World.add(world,ball)

ground=Bodies.rectangle(400,690,800,20,options1)
World.add(world,ground)

wall1=Bodies.rectangle(600,630,20,100,options1)
World.add(world,wall1)

wall2=Bodies.rectangle(750,630,20,100,options1)
World.add(world,wall2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();
 ellipse(ball.position.x,ball.position.y,30)

 rect(ground.position.x,ground.position.y,800,20)

 rect(wall1.position.x,wall1.position.y,20,100)

 rect(wall2.position.x,wall2.position.y,20,100)
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.09,y:-0.15})
}
}


