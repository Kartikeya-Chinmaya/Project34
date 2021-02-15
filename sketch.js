const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var backgroundImg;
var ground;
var hero;
var rope;
var monster;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  // creating a ground
  ground = new Ground(400,750,2500,20);

  hero = new Hero(300,300,90);

  rope = new Rope(hero.body,{x : 300, y : 300})

  monster = new Monster(1700,600,90);

block1 = new Block(1400,520,50,50);
block2 = new Block(1400,470,50,50);
block3 = new Block(1400,420,50,50);
block4 = new Block(1400,370,50,50);
block5 = new Block(1400,320,50,50);
block6 = new Block(1450,520,50,50);
block7 = new Block(1450,470,50,50);
block8 = new Block(1450,420,50,50);
block9 = new Block(1450,370,50,50);
block10 = new Block(1450,320,50,50);
block11 = new Block(1500,520,50,50);
block12 = new Block(1500,470,50,50);
block13 = new Block(1500,420,50,50);
block14 = new Block(1500,370,50,50);
block15 = new Block(1500,320,50,50);
block16 = new Block(1550,520,50,50);   
block17 = new Block(1550,470,50,50);
block18 = new Block(1550,420,50,50);
block19 = new Block(1550,370,50,50);
block20 = new Block(1550,320,50,50);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

detectollision(block1,monster);  
detectollision(block3,monster);
detectollision(block2,monster);
detectollision(block4,monster);
detectollision(block5,monster);
detectollision(block6,monster);
detectollision(block7,monster);
detectollision(block8,monster);
detectollision(block9,monster);
detectollision(block10,monster);
detectollision(block11,monster);
detectollision(block12,monster);
detectollision(block13,monster);
detectollision(block14,monster);
detectollision(block15,monster);
detectollision(block16,monster);
detectollision(block17,monster);
detectollision(block18,monster);
detectollision(block19,monster);
detectollision(block20,monster);



ground.display();
hero.display();
rope.display();
monster.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}

  function mouseReleased(){
    rope.fly();
}

function detectollision(lBlock,lMonster){
  MonsterBodyPosition = lMonster.body.position;
  BlockBodyPosition = lBlock.body.position;
  
  var distance = dist(BlockBodyPosition.x,BlockBodyPosition.y,MonsterBodyPosition.x,MonsterBodyPosition.y);
  if(distance <= lBlock.r + lMonster.r){
    Matter.Body.setStatic(lMonster.body,false);
  }
  
  }
  
