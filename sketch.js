
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint; 

var roofObj, bobObj1, rope1, bobObj2, rope2, bobObj3, rope3, bobObj4, rope4;
var world;

function preload() {
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	// //Create the Bodies Here.
	roofObj = new Roof(400, 100, 600, 50);

	var bobDiameter = 40;

	bobObj1 = new Bob(360, 350, 80);
	bobObj2 = new Bob(360, 350, 80);
	bobObj3 = new Bob(360, 350, 80);
	bobObj4 = new Bob(360, 350, 80);

	rope1 = new Rope(bobObj1.body, roofObj.body, -80, 0);
	rope2 = new Rope(bobObj2.body, roofObj.body, -40, 0);
	rope3 = new Rope(bobObj3.body, roofObj.body, 0, 0);
	rope4 = new Rope(bobObj4.body, roofObj.body, 80, 0);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);


	roofObj.display();

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();

	drawSprites();

}



