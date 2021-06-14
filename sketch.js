
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof,rope,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1= new Bob(300,350,50)
  bob2= new Bob(310,350,50)
  bob3= new Bob(320,350,50)
  bob4= new Bob(330,350,50)
  bob5= new Bob(340,350,50)
	roof= new Roof(400,400,200,20)
  rope= new Rope(bob1.body,roof.body)
  rope2= new Rope(bob2.body,roof.body)
  rope3= new Rope(bob3.body,roof.body)
  rope4= new Rope(bob4.body,roof.body)
  rope5= new Rope(bob5.body,roof.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()



  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode== LEFT_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}


