var ground,jungle,stone,banana,monkey;
var bananaGroup,stoneGroup,count,score = 0;
var play =1,end =0;
var gameState =play;
var buton;
function preload(){
count = 0;  
  bananaimg = loadImage("Banana.png");
  stoneimg = loadImage("stone.png");
  groundimg = loadImage("ground.jpg"); 
jungleimg = loadImage("jungle.jpg");
monkeyimg =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
} 



function setup() {
  createCanvas(600,500);

  //set ground
  ground = createSprite(100,550,10,10);
 ground.addImage(groundimg); 
  ground.scale = 0.3;
  ground.visible = false;

  //SET BACKGROUND
  jungle = createSprite(500,200,10,10); 
  jungle.addImage(jungleimg);
 jungle.velocityX = -5; 
          
  //setting monkeys
  monkey = createSprite(100,500,10,10);
monkey.addAnimation("running",monkeyimg);
  monkey.scale = 0.1;

  stoneGroup = new Group();
bananaGroup = new Group();  

}


function draw(){
 background(255); 
textSize(30);
fill("white"); 

buton = createButton('replay');
buton.position(10,480);

if(gameState ===play){
  score = 0;
  
  score = Math.round(frameCount/4);
  spawnbanana();
  spawnStone();
  if(monkey.isTouching(bananaGroup)){
 bananaGroup.destroyEach();
  count = count+1;
} 
  if(keyDown("space")&&monkey.y>320){
  monkey.velocityY = -17 ;
  }
    if(jungle.x<100){
 jungle.x = jungle.width/2 ;
 }
if(stoneGroup.isTouching(monkey)){
   monkey.scale = 0.1;
   gameState =0;

}   

if(jungle.x<100){
 jungle.x = jungle.width/2 ;
  
} 

//add gravity  
  monkey.velocityY = monkey.velocityY+0.8;  
  
}
 if(gameState ===0){
   score = 0;
   count = 0;
   monkey.visible = false;
   jungle.velocityX = 0;
   stoneGroup.velocityX =0;
   bananaGroup.velocityX = 0;
   buton.mousePressed(()=>{
    
     gameState = play;
     jungle.velocityX = -6;
     monkey.visible = true;
   })
 } 
  

    

monkey.collide(ground);  
 
  drawSprites();
text("banana eat  ="+count,100,50);  
text("score:"+score,100,20);
}



function spawnStone(){
if(frameCount%150 === 0){
    stone = createSprite(640,380,10,10);  
   stone.addImage(stoneimg); 
stone.velocityX = -8;   
stone.scale = 0.2;
 stone.lifetime = 100; 
  stoneGroup.add(stone);
}
}
function spawnbanana(){
if(frameCount%100 === 0){
   banana = createSprite(640,200,10,10);  
 banana.addImage(bananaimg);
  banana.scale = 0.1;
 banana.velocityX = -8; 
  banana.lifetime = 100;
 bananaGroup.add(banana);
}
  
  
  
} 









