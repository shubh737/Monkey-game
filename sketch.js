var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score=0
var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var survivalTime=0;


function preload(){
   monkey_running =             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 }



function setup() {
createCanvas(600,600) ; 
monkey = createSprite(50,250,20,20)
monkey.addAnimation("monkeyrunning",monkey_running)
monkey.scale= 0.1
  
bananaGroup=createGroup();
obstacleGroup=createGroup();
}

function draw() {
  background("white")
  {
  stroke("white")
  textSize(15)
  fill("red")  
  text("Score: "+ score, 500,50);
}
  
  {
  stroke("black")
  textSize(15)
  fill("black") 
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivalTime,290,90)
 }
  
  ground=createSprite(600,284,600,15)
  ground.velocityX=-4
  ground.shapeColor="grey"
  ground.x=ground.width/2
  monkey.collide(ground)
  
  drawSprites()
  
  if(gameState===PLAY){
  if(keyDown("space")&& monkey.y>=100){
  monkey.velocityY=-12
     // monkey.velocityY = monkey.velocityY + 0.8
}
   monkey.velocityY = monkey.velocityY + 1
   food()
   stone()
}
}

function food(){
    if(frameCount % 80===0){
    banana= createSprite(600,300,20,20)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    banana.lifetime= 200
    bananaGroup.add(banana)
   }
}
function stone(){
  if(frameCount % 80===0){
    obstacle= createSprite(600,600,20,20)
    obstacle.y=Math.round(random(265,268))
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.1
    obstacle.velocityX=-5
    obstacle.lifetime=200
    obstacleGroup.add(obstacle)
   }
}
  
 








