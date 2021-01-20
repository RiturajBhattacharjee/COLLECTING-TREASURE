var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
    oppRacerImg1 = loadAnimation("images/opponent1.png","images/opponent2.png");
  oppRacerImg2= loadAnimation("images/opponent3.png");
  gameOver=loadImage("images/gameOver.png")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;
  
 oppGroup=createGroup() 
  

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  arrow() 
    if(mainCyclist.isTouching(oppGroup)){
   gameState=END   
       }
    
 }
  if (gameState===END){
    path.velocityX=0;
    oppGroup.setVelocityXEach(0);
    gameover=createSprite(250,250)
    gameover.addImage(gameOver)
  }
}
function arrow(){
  if(frameCount%100===0){
  oppCyclist  = createSprite(500,random(50,250),20,20);
oppCyclist.addAnimation("RahulRunning",oppRacerImg1);
oppCyclist.scale=0.07;
oppCyclist.velocityX=-3 ; 
  oppGroup.add(oppCyclist)  
}
}