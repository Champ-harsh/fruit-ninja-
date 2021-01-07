var play = 1;
var end = 0;

var gameState = play;

var score;

var fruitsGroup,enemyGroup;

var knife,knifeImage,fruit1,fruitImage1,enemy,enemyImage,cloudImage;
var fruit2,fruitImage2,fruit3,fruitImage3,fruit4,fruitImage4;

var cloud1,cloud2;

function preload(){

knifeImage = loadImage("sword.png");

fruitImage1 = loadImage("fruit1.png"); 
  
fruitImage2 = loadImage("fruit2.png"); 
  
fruitImage3 = loadImage("fruit3.png"); 
  
fruitImage4 = loadImage("fruit4.png"); 
  
enemyImage1 = loadImage("alien1.png") ; 
  
enemyImage2 = loadImage("alien2.png") ;
  
gameoverImage = loadImage("gameover.png") ;
  
cloudImage = loadImage("2-cloud.png") ; 
  
}

function setup() {
  
createCanvas(600, 500);
  
knife = createSprite(400,200,10,10);
knife.addImage(knifeImage);
knife.visible = true;
knife.scale = 0.9 ; 
  
fruitsGroup = createGroup(); 
  
enemyGroup = createGroup();   
  
gameover = createSprite(750,300,10,10) 
gameover.addImage(gameoverImage);  
  
cloud1 = createSprite(500,40,10,10)  
cloud1.addImage(cloudImage);
  
cloud2 = createSprite(100,60,10,10)  
cloud2.addImage(cloudImage);  
  
score = 0;  
  
}

function draw() {
  
background("lightblue");
  
if(gameState ===play) {
  
knife.x = World.mouseX;  
knife.y = World.mouseY;
  
knife.setCollider("rectangle",0,0,80,80);
//knife.debug = true;
  
if(fruitsGroup.isTouching(knife)){ 
score = score + 1;    
fruitsGroup.destroyEach();
}  
fruits(); 
  
Enemy();    
  
if(enemyGroup.isTouching(knife)){
  
gameState = end;
  

   
}    
} 

else if(gameState === end) {
   
knife.destroy();
   
gameover.x = knife.x;
gameover.y = knife.y;
 
fruitsGroup.destroyEach();
enemyGroup.destroyEach();

     
fruitsGroup.setVelocityXEach(0);
enemyGroup.setVelocityXEach(0);
  
 }

 textSize(25);
text ("score = "+score,450,120)   
  

  
drawSprites();
  
  
  
textFont("ALGERIAN");
fill("black");  
textSize(25); 
text("FRUIT NINJA",225,75);

}

function fruits(){
  
if (World.frameCount % 80===0){
   fruit = createSprite(600,200,20,20);
   fruit.scale = 0.2;
   r = Math.round(random(1,4));
if(r == 1){
    fruit.addImage(fruitImage1);
}else if (r == 2) {
    fruit.addImage(fruitImage2); 
} else if (r == 3) {
    fruit.addImage(fruitImage3);
} else if (r == 4) {
    fruit.addImage(fruitImage4);
}
        
fruitsGroup.add(fruit);  
  
fruit.y = Math.round(random(50,340))    
        
fruit.velocityX=-7;
fruit.setLifetime=100;
}    
}     
function Enemy(){

if(World.frameCount % 170 ===0){
  enemy = createSprite(620,300,10,10)  
  
e = Math.round(random(1,2))
if(e == 1) {
  enemy.addImage (enemyImage1);
} else if(e == 2) {
  enemy.addImage (enemyImage2);
} 
enemy.y = Math.round(random(50,340)) 
  
enemyGroup.add(enemy);  
        
enemy.velocityX=-7;
enemy.setLifetime=100;
}  
 
}           
      








 
  
  
  
  
  
 
  
