
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic: true
	}

	var rotator_options = {
		isStatic: true
	}

	//Crie os Corpos aqui.
	plano = Bodies.rectangle (250,690,3000,2000, plane_options);
    World.add(world,plano);

	//Corpos que giram
	rotator1 = Bodies.rectangle (250,200,150,20, rotator_options);
	World.add(world, rotator1);

	rotator2 = Bodies.rectangle (250,200,150,20, rotator_options);
	World.add(world, rotator2);

	rotator3 = Bodies.rectangle (250,200,150,20, rotator_options);
	World.add(world, rotator3);

	var particle_options ={
		restitution: 0.4,
		friction: 0.02,
	}

	particle1 = Bodies.circle(220,10,10,particle_options) 
	World.add(world, particle1);

	particle2 = Bodies.circle (300,400,10, particle_options);
	World.add(world, particle2);

	particle3 = Bodies.circle (220,10,10, particle_options);
	World.add(world, particle3);

	particle4 = Bodies.circle (220,10,10, particle_options);
	World.add(world, particle4);

	particle5 = Bodies.circle (220,10,10, particle_options);
	World.add(world, particle5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);

  rect(plano.position.x, plano.position.y, 1200, 20);
  
  Matter.Body.rotate (rotator1,angle1)
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=1.3;

  Matter.Body.rotate (rotator2,angle2)
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=2.6;

  Matter.Body.rotate (rotator3,angle3)
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=3.9;

  ellipse(particle1.position.x, particle1.position.y);

  ellipse(particle2.position.x, particle2.position.y);
  ellipse(particle3.position.x, particle3.position.y);
  ellipse(particle4.position.x, particle4.position.y);
  ellipse(particle5.position.x, particle5.position.y);

  drawSprites();
 
}



