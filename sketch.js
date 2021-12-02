const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bg,engine,world;
var snow = [];


function preload(){
bg=loadImage("bg.jpg");
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  for( var i = 0; i< 100; i++){
    snow.push(new Neve(400,0,5));
    
  }

}

function draw() {
  background(bg);  
  Engine.update(engine);
  
 


  for(var i = 0; i < 90; i++){
    snow[i].display();
  }



}


