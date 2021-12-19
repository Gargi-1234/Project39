/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;

var jungle2Img, jungle2 , bear, bearImg
var elephant1, elephant2, elephant3, elephant4, elephant5
var elephant1Img ,elephant2Img ,elephant3Img ,elephantImage
var tropicalParrot, tropicalParrotImg, macaw, macawImg
var blueJay, blueJayImg, bird1, bird2, bird3, koala, koalaImg
var flower1Img , flower1 , flower2Img , flower2 , flower3Img
var flower3 , flower4Img , flower4
var vine1, vine1Img, vine2, vine2Img, vine3, vineI3mg, vine4
var trophy, trophyImg, redBird, redBirdImg, redBirdImage
var reindeer, reindeerImg, deerImg, blueCherry
var cheetah, cheetahImg, cheetahImage
var redCherry, redCherryImg, blueCherryImg
var redCherryGrp, blueCherryGrp
var obstaclesGroup, obstacle1;

var score=0;

var gameOver, restart;

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
  jungle2Img = loadImage("assets/bg copy.png");
  bearImg = loadAnimation("assets/bear1.png","assets/bear2.png","assets/bear3.png","assets/bear4.png");
  elephant1Img = loadAnimation("assets/elephant1.png","assets/elephant2.png","assets/elephant3.png");
  elephant2Img = loadAnimation("assets/elephant2.png","assets/elephant3.png","assets/elephant1.png");
  elephant3Img = loadAnimation("assets/elephant3.png","assets/elephant1.png","assets/elephant2.png");
  elephantImage = loadAnimation("assets/elephant1.png");
  tropicalParrotImg = loadAnimation("assets/redMacaw1.png","assets/redMacaw2.png","assets/redMacaw3.png","assets/redMacaw4.png");
  macawImg = loadAnimation("assets/yellowMacaw1.png","assets/yellowMacaw2.png","assets/yellowMacaw3.png","assets/yellowMacaw4.png");
  blueJayImg = loadAnimation("assets/blueJay1.png","assets/blueJay2.png","assets/blueJay3.png","assets/blueJay4.png","assets/blueJay5.png");
  bird1 = loadAnimation("assets/yellowMacaw1.png");
  bird2 = loadAnimation("assets/redMacaw1.png");
  bird3 = loadAnimation("assets/blueJay1.png");
  vine1Img = loadImage("assets/vine.png");
  vine2Img = loadImage("assets/vine1.png");
  vine3Img = loadImage("assets/vine3.png");
  trophyImg = loadImage("assets/trophy.png");
  reindeerImg = loadAnimation("assets/reindeer1.png", "assets/reindeer2.png", "assets/reindeer3.png");
  deerImg = loadAnimation("assets/reindeer3.png");
  cheetahImg = loadAnimation("assets/cheetah1.png","assets/cheetah2.png","assets/cheetah3.png","assets/cheetah4.png")
  cheetahImage = loadAnimation("assets/cheetah1.png")
  koalaImg = loadImage("assets/koala.png")
  blueCherryImg = loadImage("assets/blueBerry.png")
  redCherryImg = loadImage("assets/redBerry.png")
  flower1Img = loadImage("assets/flower_3.png")
  flower2Img = loadImage("assets/flower_4.png")
  flower3Img = loadImage("assets/flower_1.png")
  flower4Img = loadImage("assets/flower_2.png")
}

function setup() {
  createCanvas(800, 400);

  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;

  bear = createSprite(1000,220)
  bear.addAnimation("brownBear",bearImg)
  bear.velocityX = -4

  elephant1 = createSprite(100,200)
  elephant1.addAnimation("trumpet",elephant1Img)
  elephant1.scale = 2.5
  elephant1.velocityX = -3.5

  elephant2 = createSprite(650,200)
  elephant2.addAnimation("huge",elephant2Img)
  elephant2.scale = 2.5
  elephant2.velocityX = -3.5

  elephant3 = createSprite(405,225)
  elephant3.addAnimation("greyElephant",elephant3Img)
  elephant3.scale = 2
  elephant3.velocityX = -3.5

  elephant4 = createSprite(250,250)
  elephant4.addAnimation("trumpet",elephant1Img)
  elephant4.scale = 1.5
  elephant4.velocityX = -3.5

  elephant5 = createSprite(550,250)
  elephant5.addAnimation("huge",elephant2Img)
  elephant5.scale = 1.5
  elephant5.velocityX = -3.5

  blueJay = createSprite(900,100)
  blueJay.addAnimation("blueBird",blueJayImg)
  blueJay.scale = 0.8

  cheetah = createSprite(500-1100,230)
  cheetah.addAnimation("hunting",cheetahImg)
 
  reindeer = createSprite(700-800,230)
	reindeer.addAnimation("jumping",reindeerImg)
	reindeer.scale = 0.6

  tropicalParrot = createSprite(-500,100)
  tropicalParrot.addAnimation("redMacaw",tropicalParrotImg)
  tropicalParrot.scale = 0.8
  tropicalParrot.velocityX = 3

  macaw = createSprite(1000,100)
  macaw.addAnimation("yellowMacaw",macawImg)
  macaw.scale = 0.5
  macaw.velocityX = -7

  jungle2 = createSprite(400,100,400,20);
  jungle2.addImage("forest",jungle2Img);
  jungle2.scale=0.3
  jungle2.x = width /2;

  koala = createSprite(153,30);
  koala.addImage(koalaImg);
  koala.velocityX = -3
  koala.scale = 0.3;
 

  kangaroo = createSprite(50,200,20,50);
  kangaroo.addAnimation("running", kangaroo_running);
  kangaroo.addAnimation("collided", kangaroo_collided);
  kangaroo.scale = 0.15;
  kangaroo.setCollider("circle",0,0,300)
  
  vine1 = createSprite(100,60)
  vine1.addAnimation("leaves",vine1Img)
  vine1.scale = 1
  vine1.velocityX = -3

  vine2 = createSprite(300,60)
  vine2.addAnimation("purple",vine2Img)
  vine2.scale = 1
  vine2.velocityX = -3

  vine3 = createSprite(500,60)
  vine3.addAnimation("yellow",vine3Img)
  vine3.scale = 1
  vine3.velocityX = -3

  vine4 = createSprite(700,60)
  vine4.addAnimation("leaf",vine1Img)
  vine4.scale = 1
  vine4.velocityX = -3
 
  invisibleGround = createSprite(400,350,1600,10);
  invisibleGround.visible = false;

  gameOver = createSprite(400,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(550,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.1;

  gameOver.visible = false;
  restart.visible = false;
  
  trophy = createSprite(400,120);
  trophy.addImage(trophyImg);
  trophy.scale = 0.5;
  trophy.visible = false;

  flower1 = createSprite(100,100)
  flower1.addImage(flower1Img)
  flower1.scale = 0.4
  flower1.visible = false
  
  flower2 = createSprite(700,100)
  flower2.addImage(flower2Img)
  flower2.scale = 0.4
  flower2.visible = false

  flower3 = createSprite(100,300)
  flower3.addImage(flower3Img)
  flower3.scale = 0.4
  flower3.visible = false

  flower4 = createSprite(700,300)
  flower4.addImage(flower4Img)
  flower4.scale = 0.4
  flower4.visible = false

  shrubsGroup = new Group();
  obstaclesGroup = new Group();
  redCherryGrp = new Group();
  blueCherryGrp = new Group();
  
  score = 0;

}

function draw() {
  background(255);
  
  kangaroo.x=camera.position.x-270;
   
  if (gameState===PLAY){

    jungle.velocityX=-3
    jungle2.velocityX=-3

    if(vine1.x < -800){
      vine1.x = 1000
      vine2.x = 1200
      vine3.x = 1400
      vine4.x = 1600
    }

    if(elephant4.x < 50){
      bear.scale = bear.scale - 0.005
      bear.y = bear.y + 0.5
      }

    if(tropicalParrot.x > 800){
        blueJay.velocityX = -6
    }

    if(blueJay.x < 500){
      cheetah.velocityX = 4
      reindeer.velocityX = 3
    
    }

    if(jungle.x<100){
       jungle.x=400
       jungle2.x=400
    }
   console.log(kangaroo.y)
    if(keyDown("space")&& kangaroo.y>270) {
      jumpSound.play();
      kangaroo.velocityY = -16;
    }
  
    kangaroo.velocityY = kangaroo.velocityY + 0.8
    spawnShrubs();
    spawnObstacles();
    spawnBlueCherry();
    spawnRedCherry();

    kangaroo.collide(invisibleGround);
    
    if(obstaclesGroup.isTouching(kangaroo)){
      collidedSound.play();
      gameState = END;
    }
    if(shrubsGroup.isTouching(kangaroo)){
      score = score + 1;
      shrubsGroup.destroyEach();
    }
    if(blueCherryGrp.isTouching(kangaroo)){
      score = score - 2;
      blueCherryGrp.destroyEach();
    }
    if(redCherryGrp.isTouching(kangaroo)){
      score = score + 2;
      redCherryGrp.destroyEach();
    }
  }
  else if (gameState === END) {
    gameOver.x=camera.position.x;
    restart.x=camera.position.x;
    gameOver.visible = true;
    restart.visible = true;
    kangaroo.velocityY = 0;
    jungle.velocityX = 0;
    jungle2.velocityX = 0;
    macaw.velocityX = 0
    tropicalParrot.velocityX = 0
    blueJay.velocityX = 0
    elephant1.velocityX = 0
    elephant2.velocityX = 0
    elephant3.velocityX = 0
    elephant4.velocityX = 0
    elephant5.velocityX = 0
    vine1.velocityX = 0
    vine2.velocityX = 0
    vine3.velocityX = 0
    vine4.velocityX = 0
    reindeer.velocityX = 0
    cheetah.velocityX = 0
    cheetah.addAnimation("carnivore",cheetahImage)
    cheetah.changeAnimation("carnivore",cheetahImage)
    reindeer.addAnimation("caribou",deerImg)
    reindeer.changeAnimation("caribou",deerImg)
    blueJay.addAnimation("wildBird",bird3)
    blueJay.changeAnimation("wildBird",bird3)
    tropicalParrot.addAnimation("tropicalbird",bird2)
    tropicalParrot.changeAnimation("tropicalbird",bird2)
    elephant1.addAnimation("wildElephant",elephantImage)
    elephant1.changeAnimation("wildElephant",elephantImage)
    elephant2.addAnimation("wildElephant",elephantImage)
    elephant2.changeAnimation("wildElephant",elephantImage)
    elephant3.addAnimation("wildElephant",elephantImage)
    elephant3.changeAnimation("wildElephant",elephantImage)
    elephant4.addAnimation("wildElephant",elephantImage)
    elephant4.changeAnimation("wildElephant",elephantImage)
    elephant5.addAnimation("wildElephant",elephantImage)
    elephant5.changeAnimation("wildElephant",elephantImage)

    obstaclesGroup.setVelocityXEach(0);
    shrubsGroup.setVelocityXEach(0);
    blueCherryGrp.setVelocityXEach(0);
    redCherryGrp.setVelocityXEach(0);

    kangaroo.changeAnimation("collided",kangaroo_collided);
    
    obstaclesGroup.setLifetimeEach(-1);
    shrubsGroup.setLifetimeEach(-1);
    blueCherryGrp.setLifetimeEach(-1);
    redCherryGrp.setLifetimeEach(-1);

    if(mousePressedOver(restart)) {
        reset();
    }
  }

  else if (gameState === WIN) {
    jungle.velocityX = 0;
    kangaroo.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    shrubsGroup.setVelocityXEach(0);
    blueCherryGrp.setVelocityXEach(0);
    redCherryGrp.setVelocityXEach(0);

    kangaroo.changeAnimation("collided",kangaroo_collided);

    jungle2.velocityX = 0;
    macaw.velocityX = 0
    tropicalParrot.velocityX = 0
    blueJay.velocityX = 0
    elephant1.velocityX = 0
    elephant2.velocityX = 0
    elephant3.velocityX = 0
    elephant4.velocityX = 0
    elephant5.velocityX = 0
    vine1.velocityX = 0
    vine2.velocityX = 0
    vine3.velocityX = 0
    vine4.velocityX = 0
    reindeer.velocityX = 0
    cheetah.velocityX = 0
    cheetah.addAnimation("carnivore",cheetahImage)
    cheetah.changeAnimation("carnivore",cheetahImage)
    reindeer.addAnimation("caribou",deerImg)
    reindeer.changeAnimation("caribou",deerImg)
    blueJay.addAnimation("wildBird",bird3)
    blueJay.changeAnimation("wildBird",bird3)
    tropicalParrot.addAnimation("tropicalbird",bird2)
    tropicalParrot.changeAnimation("tropicalbird",bird2)
    elephant1.addAnimation("wildElephant",elephantImage)
    elephant1.changeAnimation("wildElephant",elephantImage)
    elephant2.addAnimation("wildElephant",elephantImage)
    elephant2.changeAnimation("wildElephant",elephantImage)
    elephant3.addAnimation("wildElephant",elephantImage)
    elephant3.changeAnimation("wildElephant",elephantImage)
    elephant4.addAnimation("wildElephant",elephantImage)
    elephant4.changeAnimation("wildElephant",elephantImage)
    elephant5.addAnimation("wildElephant",elephantImage)
    elephant5.changeAnimation("wildElephant",elephantImage)
    trophy.visible = true;
    flower1.visible = true
    flower2.visible = true
    flower3.visible = true
    flower4.visible = true

    obstaclesGroup.setLifetimeEach(-1);
    shrubsGroup.setLifetimeEach(-1);
    blueCherryGrp.setLifetimeEach(-1);
    redCherryGrp.setLifetimeEach(-1);
  }
  
  
  drawSprites();

  textSize(20);
  stroke(3);
  fill("black")
  text("Score: "+ score, camera.position.x,50);
  
  if(score >= 8){
    kangaroo.visible = false;
    textSize(30);
    stroke(3);
    fill("black");
    text("Congragulations!! You win the game!! ", 130,250);
    gameState = WIN;
  }
}

function spawnShrubs() {
 
  if (frameCount % 150 === 0) {

    var shrub = createSprite(camera.position.x+500,330,40,10);

    shrub.velocityX = -(6 + 3*score/100)
    shrub.scale = 0.6;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: shrub.addImage(shrub1);
              break;
      case 2: shrub.addImage(shrub2);
              break;
      case 3: shrub.addImage(shrub3);
              break;
      default: break;
    }
       
    shrub.scale = 0.05;
    shrub.lifetime = 400;
    
    shrub.setCollider("rectangle",0,0,shrub.width/2,shrub.height/2)
    shrubsGroup.add(shrub);
    
  }
  
}

function spawnObstacles() {
  if(frameCount % 120 === 0) {

    var obstacle = createSprite(camera.position.x+400,330,40,40);
    obstacle.setCollider("rectangle",0,0,200,200)
    obstacle.addImage(obstacle1);
    obstacle.velocityX = -(6 + 3*score/100)
    obstacle.scale = 0.15;      

    obstacle.lifetime = 400;
    obstaclesGroup.add(obstacle);
    
  }
}


function spawnBlueCherry() {
  if(frameCount % 130 === 0) {

    blueCherry = createSprite(camera.position.x+400,200,40,40);
    blueCherry.setCollider("rectangle",0,0,200,200)
    blueCherry.addImage(blueCherryImg);
    blueCherry.velocityX = -(6 + 3*score/100)
    blueCherry.scale = 0.5;      

    blueCherry.lifetime = 400;
    blueCherryGrp.add(blueCherry);
    
  }
}


function spawnRedCherry() {
  if(frameCount % 170 === 0) {

    redCherry = createSprite(camera.position.x+400,200,40,40);
    redCherry.setCollider("rectangle",0,0,200,200)
    redCherry.addImage(redCherryImg);
    redCherry.velocityX = -(6 + 3*score/100)
    redCherry.scale = 0.5;      

    redCherry.lifetime = 400;
    redCherryGrp.add(redCherry);
    
  }
}

/*function reset(){
  gameState = PLAY;
  gameOver.visible = true;
  restart.visible = true;
  kangaroo.visible = true;
  kangaroo.changeAnimation("running",
                kangaroo_running);
  obstaclesGroup.Each();
  shrubsGroup.destroyEach();
  score = 0;
}*/

/*function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  kangaroo.visible = true;
  kangaroo.changeAnimation("running",
               kangaroo_running);
  obstaclesGroup.destroyEach();
  shrubsGroup.destroyEach();

}*/

/*function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  kangaroo.visible = false;
  kangaroo.changeAnimation("running",
               kangaroo_running);
  obstaclesGroup.destroyeach();
  shrubsGroup.destroyeach();
  score = 0;
}*/

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  kangaroo.visible = true;
  kangaroo.changeAnimation("running",
               kangaroo_running);
  obstaclesGroup.destroyEach();
  shrubsGroup.destroyEach();
  redCherryGrp.destroyEach();
  blueCherryGrp.destroyEach();

  score = 0;

  vine1.x = 100
  vine1.y = 60
  vine1.velocityX = -3

  vine2.x = 300
  vine2.y = 60
  vine2.velocityX = -3

  vine3.x = 500
  vine3.y = 60
  vine3.velocityX = -3

  vine4.x = 700
  vine4.y = 60
  vine4.velocityX = -3

  bear.x = 1000
  bear.y = 220
  bear.scale = 1
  bear.velocityX = -4

  elephant1.x = 100
  elephant1.y = 200
  elephant1.velocityX = -3.5
  elephant1.changeAnimation("trumpet",elephant1Img)

  elephant2.x = 650
  elephant2.y = 200
  elephant2.velocityX = -3.5
  elephant2.changeAnimation("huge",elephant2Img)
  
  elephant3.x = 405
  elephant3.y = 225
  elephant3.velocityX = -3.5
  elephant3.changeAnimation("greyElephant",elephant3Img)

  elephant4.x = 250
  elephant4.y = 250
  elephant4.velocityX = -3.5
  elephant4.changeAnimation("trumpet",elephant1Img)

  elephant5.x = 550
  elephant5.y = 250
  elephant5.velocityX = -3.5
  elephant5.changeAnimation("huge",elephant2Img)

  blueJay.x = 900
  blueJay.y = 100
  blueJay.changeAnimation("blueBird",blueJayImg)

  tropicalParrot.x = -500
  tropicalParrot.y = 100
  tropicalParrot.changeAnimation("redMacaw",tropicalParrotImg)
  tropicalParrot.velocityX = 3

  macaw.x = 1000
  macaw.y = 100
  macaw.changeAnimation("yellowMacaw",macawImg)
  macaw.velocityX = -7

  cheetah.x = 500-1100
  cheetah.y = 230
  cheetah.changeAnimation("hunting",cheetahImg)

  reindeer.x = 700-800
  reindeer.y = 230
  reindeer.changeAnimation("jumping",reindeerImg)

}