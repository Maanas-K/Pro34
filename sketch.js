const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1//, box2, box3,box4;
var boxes1=[];
var boxes2=[];
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for (var i=0; i<7; i++){
    boxes1[i]=new Box(600,height-(i*60),70,70)
  }

  for (var j=0; j<6; j++){
    boxes2[j]=new Box(700,height-(j*60),70,70)
  }
  
  //box2 = new Box(900, 100, 70, 70);
  //box3 = new Box(900, 100, 70, 70);
  //box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 /* box1.display();
  box2.display();
  box3.display();
  box4.display()*/

  for (var i=0; i<7; i++){
    boxes1[i].display();
  }

  for (var j=0; j<6; j++){
    boxes2[j].display();
  }

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}