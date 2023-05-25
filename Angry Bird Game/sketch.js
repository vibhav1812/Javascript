const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var stone, slingshot;
var engine,world;



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(600,590,1200,20,groundOptions);
  World.add(world,ground);

  box1 = new Box(900,100);
  box2 = new Box(900,100);
  box3 = new Box(900,100);
  box4 = new Box(900,100);
  box5 = new Box(900,100);
  box6 = new Box(900,100);
  box7 = new Box(900,100);
  box8 = new Box(800,100);
  box9 = new Box(800,100);
  box10 = new Box(800,100);
  box11 = new Box(800,100);
  box12 = new Box(800,100);
  box13 = new Box(800,100);
  box14 = new Box(800,100);
  box15 = new Box(700,100);
  box16 = new Box(700,100);
  box17 = new Box(700,100);
  box18 = new Box(700,100);
  box19 = new Box(700,100);
  box20 = new Box(700,100);
  box21 = new Box(700,100);
  stone = new Stone(200,200)
  slingshot = new SlingShot(stone.body,{x:500,y:50});

  Engine.run(engine)
}

function draw() {
  background(255,255,255);  
  fill("yellow")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("red")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  
  fill("orange")
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
 
  fill("black")
  stone.display();
  slingshot.display()
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20);
}