var monkey , monkey_running, banana,obs;
var bananaGroup , obsGroup, ground;
var score = 0;
var bananaImg, obsImg;



function preload(){
monkey_running = loadAnimation ("monkey_0.png","monkey_1.png",
"monkey_2.png","monkey_3.png","monkey_4.png" , "monkey_5.png",
"monkey_6.png","monkey_7.png" , "monkey_8.png");
  
 bananaImg = loadImage ("banana.png") 
 obsImg = loadImage ("obstacle.png") 
}

function setup(){
  createCanvas (500,500)
  
  monkey = createSprite (50,375,10,10) 
  monkey.addAnimation ("running",monkey_running)
  monkey.scale = 0.15
  
  ground = createSprite (250,400,500,10)
  ground.x = ground.width / 2
  ground.velocityX = -5
  
  bananaGroup = createGroup();
  obsGroup = createGroup();
}


function draw(){
  background ("white")
  
  if (ground.x < 250){
      
    ground.x = ground.width/2
      }
  
  if(keyDown("space") && monkey.y >= 120){
     monkey.velocityY = -12
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
 // console.log(monkey.depth)
  
createBanana ();
createObs();
  
  
  drawSprites();
  
  textSize(20)
  fill("black")
  score = Math.ceil (frameCount / frameRate())
  text ( "Survival Time :" + score,150,50)
}

function createBanana (){
  
  if(World.frameCount%80 === 0){
     banana = createSprite(500,100,10,10)
     banana.y = Math.round(random(120,200))
     banana.velocityX = -3
     banana.addImage (bananaImg)
     banana.scale = 0.1
     monkey.depth = banana.depth 
     monkey.depth = monkey.depth + 0.5
     banana.lifetime = 250
     bananaGroup.add (banana)
     }
  
}

function createObs(){
  if (World.frameCount%300 === 0 ) {
     obs = createSprite (500,370,10,10)
     obs.velocityX = -3
     obs.addImage (obsImg)
     obs.scale = 0.15
  }
                
  
  
}



