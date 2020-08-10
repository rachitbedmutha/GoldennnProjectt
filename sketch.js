const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState = 0;
var carCode = 0;
var form ;
var car1,car2,car3;
var image1,image2,image3;
var car;

var engine,world;

function preload() {
  
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  form = new Form();
 // cars = new Cars();
  bg = new BG(displayWidth/2, displayHeight-470, displayWidth, displayHeight);
  ground = new Ground(displayWidth/2,displayHeight-120,displayWidth,30);
  car = new Box(-150    );
}

function draw() {
  background(255,255,255);  
  if(gameState === 0) {
    form.display();
  } 
  // else if (gameState === 1) {
  //   form.hide();
  //   cars.display();
  // } 
  else if(gameState === 1) {
    form.hide();
    bg.display();
    ground.display();
    car.display();

    // bg.depth = 1;

    
  }
  
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(car.body,car.body.position,{x:50,y:-50});
    
  }
}