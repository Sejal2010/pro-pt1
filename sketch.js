var stone,frog,bg;
var si,fi,bi;
var ground;

function preload(){
 si=loadImage("./imgs/stone.png");
 fi=loadImage("./imgs/frog.png");
 bi=loadImage("./imgs/forest.jpg");
} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth-700, windowHeight-80, windowWidth, 100000);
  bg.addImage(bi);
 
  ground=createSprite(800,550,10000,100);
  

  frog=createSprite(200,500,50,50);
  frog.addImage(fi);
  frog.scale=0.25;
}

function draw() {
  background("black");
  stones();
  drawSprites();
}

function stones(){
  if(frameCount%100===0){
    stone = createSprite(random(1000,5000),500);
    stone.addImage(si);
    stone.scale=0.25;
    stone.velocityX=-3;
  }
  }