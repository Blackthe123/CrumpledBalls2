
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin, sensor, paperSensor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  sensor = createSprite(650, 655, 120, 5);
  sensor.visible=false;
  paperSensor = createSprite(100,650, 20, 5);
  paperSensor.visible=false;
  ground = new Ground(width/2, 700, width, 50);
  paper = new Paper(100, 625, 20, 20);
  dustbin=new DustBin(650, 665, 120, 20, {isStatic:true, density:3, friction:2});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSensor.x=paper.body.position.x;
  paperSensor.y=paper.body.position.y+18;

  if(paperSensor.collide(sensor)){
  textSize(20);
  fill("blue");
  text("THANKS A LOT FOR KEEPING THE CITY CLEAN!", 150, 350);
  paper.destroy();
  }

  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
  
  textSize(20);
  fill("red");
  text("Please put the trash in the Dustbin", 225, 300);

}


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 50,
      y: -55
    });
  }
}



