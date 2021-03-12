var astronaut, astronautAnimation;
var backgroundImage, goldCoinImage;
var lavaImage, lavaGroup;
var asteroidImage, holeImage, lives = 3;
var holeGroup, asteroidGroup, gameState = "start start";
var silverCoinGroup, silverCoin = 0, resetButton;
var resetButtonImage, alienImage;
var alienGroup, silverCoinImage, bulletImage;
var bulletCount = 0, bullet, bulletGroup;
var goldCoin = 0 /*, story, instruction*/;
var storyImage, instructionImage, titleImage;
var showStoryImage = true, playButtonImage;
var amountAliensKilled = 0, score = 0;
var invisibleGround, stoneImage, stoneGroup;
var level = 1, dummyScore = 0, portalImage;
var spawnObstacles = true, background2;
var background2Image, portalGroup, baseImage;
var background3, background3Image, background4;
var background4Image, background5, background5Image;
var baseGroup, goldCoinGroup, level1Image, level1;
var level2Image, level2, level3Image, level3;
var level4Image, level4, level5Image, level5;
var obstacleSpeed = -6, shootingImage, shootSound;
var gameOverSound, astronautJump, stoneImage2;
var lifeLostSound;

//add sounds in the game

function preload(){
  astronautAnimation = loadAnimation("astronaut1.png", "astronaut2.png");
  backgroundImage = loadImage("background.jpg");
  goldCoinImage = loadImage("coin.jpg");
  //lavaImage = loadImage("lava.jpg");
  asteroidImage = loadImage("asteroid.png");
  //holeImage = loadImage("hole.png");
  resetButtonImage = loadImage("reset.png");
  alienImage = loadImage("alien.jpg");
  silverCoinImage = loadImage("silverCoin.png");
  bulletImage = loadImage("bullet.png");
  storyImage = loadImage("Story.png");
  instructionImage = loadImage("instructions.png");
  titleImage = loadImage("text.png");
  playButtonImage = loadImage("playButton.png");
  stoneImage = loadImage("stone.jpg");
  portalImage = loadImage("portal.jpg");
  background2Image = loadImage("background2.jpg");
  background3Image = loadImage("background4.jpg");
  background4Image = loadImage("background3.jpg");
  background5Image = loadImage("background5.jpg");
  baseImage = loadImage("base.jpg");
  level1Image = loadImage("level 1.png");
  level2Image = loadImage("level 2.png");
  level3Image = loadImage("level 3.png");
  level4Image = loadImage("level 4.png");
  level5Image = loadImage("level 5.png");
  shootingImage = loadAnimation("shooting.jpg");
  shootSound = loadSound("shot.mp3");
  gameOverSound = loadSound("gameOver.mp3");
  astronautJump = loadAnimation("astronaut jump.jpg");
  stoneImage2 = loadImage("stone2.jpg");
  lifeLostSound = loadSound("lifeLost.mp3");
}

function setup(){
  createCanvas(800, 400);
  Background = createSprite(400, 200, 800, 400);
  background2 = createSprite(400, 200, 800, 400);
  background3 = createSprite(400, 200, 800, 400);
  background4 = createSprite(400, 200, 800, 400);
  background5 = createSprite(400, 200, 800, 400);
  level1 = createSprite(400, 70);
  level2 = createSprite(400, 70);
  level3 = createSprite(400, 70);
  level4 = createSprite(400, 70);
  level5 = createSprite(400, 70);
  astronaut = createSprite(200, 350, 50, 50);
  bullet = createSprite(276, -100);
  title = createSprite(400, 150);
  playButton = createSprite(400, 300);
  invisibleGround = createSprite(400, 395, 800, 10);
  //story = createSprite(400, 200, 800, 400);
  //coin = createSprite(350, 200);
  //lava = createSprite(450, 100);
  //asteroid = createSprite(600, 300);
  //hole = createSprite(700, 100);
  level1.addImage(level1Image);
  level2.addImage(level2Image);
  level3.addImage(level3Image);
  level4.addImage(level4Image);
  level5.addImage(level5Image);
  Background.addImage(backgroundImage);
  background2.addImage(background2Image);
  background3.addImage(background3Image);
  background4.addImage(background4Image);
  background5.addImage(background5Image);
  title.addImage(titleImage);
  //story.addImage(storyImage);
  astronaut.addAnimation("running", astronautAnimation);
  astronaut.addAnimation("shooting", shootingImage);
  astronaut.addAnimation("jumping", astronautJump);
  playButton.addImage(playButtonImage);
  
  //coin.addImage(coinImage);
  //lava.addImage(lavaImage);
  //asteroid.addImage(asteroidImage);
  //hole.addImage(holeImage);
  Background.scale = 2.6;
  level1.scale = 0.7;
  level2.scale = 0.7;
  level3.scale = 0.7;
  level4.scale = 0.7;
  level5.scale = 0.7;
  background3.scale = 2.5;
  background4.scale = 2.6
  background5.scale = 2.5;
  astronaut.scale = 0.3;
  title.scale = 0.5;
  playButton.scale = 0.2;
  background2.scale = 2.6;
  //story.scale = 0.7;
  //coin.scale = 0.2;
  //lava.scale = 0.2;
  //asteroid.scale = 0.09;
  //hole.scale = 0.2;
  //resetButton.visible = true;
  level2.visible = false;
  level1.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  //resetButton.visible = false;
  astronaut.visible = false;
  invisibleGround.visible = false;
  background2.visible = false;
  background3.visible = false;
  background4.visible = false;
  background5.visible = false;
  //resetButton.debug = true;

  //lavaGroup = new Group();
  //holeGroup = new Group();
  asteroidGroup = new Group();
  silverCoinGroup = new Group();
  alienGroup = new Group();
  bulletGroup = new Group();
  stoneGroup = new Group();
  portalGroup = new Group();
  baseGroup = new Group();
  goldCoinGroup = new Group();
}

function draw(){
  //background(backgroundImage);
  drawSprites();

  if(gameState === "start start"){
    if(mousePressedOver(playButton)){
      gameState = "start";
    }
  }

  if(gameState === "start"){
    if(showStoryImage === true){
      background(storyImage);
    }
    if(keyCode === 32){
      showStoryImage = false;
      background(instructionImage);
    }
    if(keyWentDown('a')){
      gameState = "play";
    }
  }


  if(gameState === "play"){
    level1.visible = true;
    astronaut.visible = true;
    title.visible = false;
    playButton.visible = false;
    spawnSilverCoin();
    spawnStones();
    //spawnLava();
    //spawnHole();
    spawnAsteroids();
    spawnAliens();

    textSize(15);
    fill("white");
    textAlign(CENTER);
    text("Silver coins: " + silverCoin, 50, 40);
    text("Gold coins: " + goldCoin, 50, 20);
    text("Score: " + score, 700, 20);
    text("Lives left: " + lives, 400, 20);

    Background.velocityX = -4;
    astronaut.collide(invisibleGround);

    if(asteroidGroup.isTouching(astronaut) || alienGroup.isTouching(astronaut) || stoneGroup.isTouching(astronaut)){
      lives -= 1;
      if(lives > 0){
        lifeLostSound.play();
      }
      alienGroup.destroyEach();
      asteroidGroup.destroyEach();
      stoneGroup.destroyEach();
      if(lives < 1){
        gameState = "end";
      }
    }

    if(silverCoinGroup.isTouching(astronaut)){
      silverCoinGroup.destroyEach();
      silverCoin += 1;
      score += 1;
    }

    if(goldCoinGroup.isTouching(astronaut)){
      goldCoinGroup.destroyEach();
      goldCoin += 1;
      score += 5;
    }

    if(keyWentDown("s")){
      astronaut.scale = 0.3;
      astronaut.changeAnimation("shooting", shootingImage);
      shoot();
      shootSound.play();
    }

    if(astronaut.y >= 348 && bullet.x > 275){
      astronaut.scale = 0.3;
      astronaut.changeAnimation("running", astronautAnimation);
    }

    if(bulletGroup.isTouching(alienGroup)){
      amountAliensKilled += 1;
      score += 1;
      dummyScore += 1;
      alienGroup.destroyEach();
      bullet.x = 276;
      bullet.y = -100;
      bullet.velocityX = 0;
    }

    astronaut.velocityY = astronaut.velocityY + 0.8;

    if(amountAliensKilled === 5){
      spawnGoldCoin();
      amountAliensKilled = 0;
    }

    //astronaut.debug = true;
    astronaut.setCollider("rectangle", 0, 0, 180, 280);

    if(Background.x < 0){
      Background.x = Background.width/2;
    }

    if(keyDown(UP_ARROW) && astronaut.y > 200){
      astronaut.velocityY = -12;
      astronaut.scale = 0.2;
      astronaut.changeAnimation("jumping", astronautJump);
    }

    if(dummyScore >= 2){
      dummyScore = 0;
      spawnObstacles = false;
      alienGroup.destroyEach();
      asteroidGroup.destroyEach();
      stoneGroup.destroyEach();
      if(level != 5){
        spawnPortal();
      } else if(level === 5){
        spawnMainBase();
      }
    }

    if(portalGroup.isTouching(astronaut)){
      portalGroup.destroyEach();
      level += 1;
    }

    if(baseGroup.isTouching(astronaut)){
      baseGroup.destroyEach();
      gameState = "win";
    }

    if(level === 2){
      obstacleSpeed = -8;
      level1.visible = false;
      level2.visible = true;
      spawnObstacles = true;
      background2.visible = true;
      background2.velocityX = -4;
      if(background2.x < 0){
        background2.x = background2.width/2;
      }
    }

    if(level === 3){
      obstacleSpeed = -10;
      level1.visible = false;
      level2.visible = false;
      level3.visible = true;
      spawnObstacles = true;
      background3.visible = true;
      background3.velocityX = -4;
      if(background3.x < 0){
        background3.x = background3.width/2;
      }
    }

    if(level === 4){
      obstacleSpeed = -12;
      level1.visible = false;
      level2.visible = false;
      level3.visible = false;
      level4.visible = true;
      spawnObstacles = true;
      background4.visible = true;
      background4.velocityX = -4;
      if(background4.x < 0){
        background4.x = background4.width/2;
      }
    }

    if(level === 5){
      obstacleSpeed = -14;
      level1.visible = false;
      level2.visible = false;
      level3.visible = false;
      level4.visible = false;
      level5.visible = true;
      spawnObstacles = true;
      background5.visible = true;
      background5.velocityX = -4;
      if(background5.x < 0){
        background5.x = background5.width/2;
      }
    }
  }

  if(gameState === "end"){
    gameOverSound.play();
    background("black");
    textSize(50);
    fill("red");
    textAlign(CENTER);
    text("You lose!", 400, 200);
    //resetButton.visible = true;
  }

  if(gameState === "win"){
    background("black");
    textSize(50);
    fill("Green");
    textAlign(CENTER);
    text("You win!", 400, 200);
  }
}

/*function spawnLava(){
  //increase the rate the obstacles spawn as the game progresses.
  if(frameCount % 150 === 0){
    var lava = createSprite(800, random(100, 300), 50, 50);
    lava.velocityX = -2;
    lava.addImage(lavaImage);
    lava.scale = 0.1;
    lavaGroup.add(lava);
  }
}

function spawnHole(){
  if(frameCount % 250 === 0){
    var hole = createSprite(800, random(100, 300), 50, 50);
    hole.velocityX = -2;
    hole.setCollider("circle", 0, 0, 150);
    hole.addImage(holeImage);
    hole.scale = 0.1;
    holeGroup.add(hole);
  }
}*/

function spawnAsteroids(){
  if(spawnObstacles === true){
    if(frameCount % 350 === 0){
      var asteroid = createSprite(750, 350, 50, 50);
      asteroid.velocityX = obstacleSpeed;
      asteroid.setCollider("rectangle", 0, 0, 1400, 1400);
      asteroid.addImage(asteroidImage);
      asteroid.scale = 0.05;
      asteroidGroup.add(asteroid);
    }
  }
}

function spawnSilverCoin(){
  if(spawnObstacles == true){
    if(frameCount % 300 === 0){
      var silverCoin = createSprite(750, 350, 50, 50);
      silverCoin.velocityX = obstacleSpeed;
      silverCoin.setCollider("circle", 0, 0, 75);
      silverCoin.addImage(silverCoinImage);
      silverCoin.scale = 0.2;
      silverCoinGroup.add(silverCoin);
    }
  }
}

function spawnAliens(){
  if(spawnObstacles === true){
    if(frameCount % 250 === 0){
      var alien = createSprite(750,  350, 50, 50);
      alien.velocityX = obstacleSpeed;
      alien.addImage(alienImage);
      alien.scale = 0.2;
      alienGroup.add(alien);
    }
  }
}

function spawnStones(){
  if(spawnObstacles === true){
    if(frameCount % 400 === 0){
      var stone = createSprite(random(750, 450), 380, 50, 50);
      stone.velocityX = -8;
      rand = Math.round(random(1, 2));
      switch(rand){
        case 1: stone.addImage(stoneImage);
        break;
        case 2: stone.addImage(stoneImage2);
      }
      stone.scale = 0.1;
      stoneGroup.add(stone);
    }
  }
}

function spawnPortal(){
  var portal = createSprite(750, 350, 50, 50);
  portal.velocityX = -6;
  portal.addImage(portalImage);
  portal.scale = 0.5;
  portalGroup.add(portal);
}

function spawnMainBase(){
  var mainBase = createSprite(750, 350, 50, 50);
  mainBase.velocityX = -4;
  mainBase.addImage(baseImage);
  baseGroup.add(mainBase);
}

function spawnGoldCoin(){
  var goldCoin = createSprite(750, 350, 50, 50);
  goldCoin.velocityX = obstacleSpeed;
  goldCoin.addImage(goldCoinImage);
  goldCoin.scale = 0.2;
  goldCoinGroup.add(goldCoin);
}

function shoot(){
  bulletCount += 1;
  if(bulletCount === 1){
    bullet.addImage(bulletImage);
    bullet.scale = 0.2;
    bullet.x = astronaut.x + 30;
    bullet.y = astronaut.y - 30;
    bullet.velocityX = 5;
    bulletCount = 0;
    bulletGroup.add(bullet);
    if(bullet.x > 800){
      bullet.x = 276;
      bullet.y = -100;
    }
  }
}