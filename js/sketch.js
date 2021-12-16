var engine, world;
var Play=1;
var END=0;
var gameState=1;
var gardenImage;
var garden;
var boy;
var gameOverSound;
var boyImage;
var stoneImage, trophy;
var coinImage;
var stoneGroup, coinGroup, birdGroup;
var treasure;
var gameoverImage;
var birdImage;
var treasure =0;
var pathImg;
var level =1;
var scene2;
var garden2;
var track;
var scene1;
var invisibleground;
var gameState = "play";
var backgroundScene0, backgroundScene1, scene1, scene2;
var level = 1;
var score = 0;
var l = "level0";
var boy, boyColliderLine;
var object1Group;
var gameOverImage;
var confetti;
var gameOver;
var gameWinImage;
var confettiImage;
var coinSound, trophyImg;
var gameWinSound;
var rectangleHImage, circleImage,rectangleVImage,rhombusImage;
var restart, restartImg;
var youwonImg;
function preload(){
//pathImg = loadImage("track.png"); 
//scene1 = loadAnimation("Garden.png");
boyImage = loadAnimation("./boys/boy1.png","./boys/boy2.png");
stoneImage = loadImage("./assets/stone.png");
coinImage = loadImage("./assets/coin.png");
//gameoverImage = loadImage("GameOver.png");
gameOverSound = loadSound("./sound/gameOver.mp3");
//birdImage = loadImage("BirdBlue.png");
//birdImage = loadAnimation("redbird1.png","redbird2.png","redbird3.png","redbird4.png","redbird5.png","redbird6.png","redbird7.png","redbird8.png");
//scene2 = loadAnimation("garden4.jpg");
birdImage = loadAnimation("./bird/redBirdReal1.png","./bird/redBirdReal2.png","./bird/redBirdReal3.png","./bird/redBirdReal4.png","./bird/redBirdReal5.png","./bird/redBirdReal6.png","./bird/redBirdReal7.png","./bird/redBirdReal8.png");
gameOverImage = loadImage("./assets/gameOverBlue.png");
scene0 = loadImage("./background/s2.jpg");
scene2 = loadImage("./background/scene2.png");
scene1 = loadImage("./background/s1.png");
//confetti = loadAnimation("confettiforgame1.png","confettiforgame2.png","confettiforgame3.png","confettiforgame4.png","confettiforgame5.png");
gameWinImage = loadImage("./assets/Final.jpg");
gameWinSound = loadSound("./sound/gameWin.mp3");
//confettiImage = loadImage("confetti.gif");
coinSound = loadSound("./sound/coinSound.wav");
restartImg = loadImage("./assets/reset.png");
//trophyImg = loadImage("./assets/Trophy1.png");
youwonImg = loadImage("./assets/youwon0.jpg");
rectangleHImage = loadAnimation("./rectangleH/RectH1.png","./rectangleH/RectH2.png","./rectangleH/RectH3.png","./rectangleH/RectH4.png",
"./rectangleH/RectH5.png","./rectangleH/RectH6.png","./rectangleH/RectH7.png","./rectangleH/RectH8.png","./rectangleH/RectH9.png",
"./rectangleH/RectH10.png","./rectangleH/RectH11.png","./rectangleH/RectH12.png","./rectangleH/RectH13.png","./rectangleH/RectH14.png","./rectangleH/RectH15.png",
"./rectangleH/RectH16.png","./rectangleH/RectH17.png","./rectangleH/RectH18.png","./rectangleH/RectH19.png","./rectangleH/RectH20.png");
circleImage = loadAnimation("./circle/circleH1.png","./circle/circleH2.png","./circle/circleH3.png","./circle/circleH4.png","./circle/circleH5.png",
"./circle/circleH6.png","./circle/circleH7.png","./circle/circleH8.png","./circle/circleH9.png","./circle/circleH10.png","./circle/circleH11.png","./circle/circleH12.png",
"./circle/circleH13.png","./circle/circleH14.png","./circle/circleH15.png","./circle/circleH16.png");
rectangleVImage = loadAnimation("./rectangleV/RectV1.png","./rectangleV/RectV2.png","./rectangleV/RectV3.png","./rectangleV/RectV4.png",
"./rectangleV/RectV5.png","./rectangleV/RectV6.png","./rectangleV/RectV7.png","./rectangleV/RectV8.png","./rectangleV/RectV9.png",
"./rectangleV/RectV10.png","./rectangleV/RectV11.png","./rectangleV/RectV12.png","./rectangleV/RectV13.png","./rectangleV/RectV14.png","./rectangleV/RectV15.png",
"./rectangleV/RectV16.png","./rectangleV/RectV17.png","./rectangleV/RectV18.png","./rectangleV/RectV19.png","./rectangleV/RectV20.png");
/*rhombusImage = loadAnimation("./rhombus/RhomH1.png","./rhombus/RhomH2.png","./rhombus/RhomH3.png","./rhombus/RhomH4.png","./rhombus/RhomH5.png",
"./rhombus/RhomH6.png","./rhombus/RhomH7.png","./rhombus/RhomH8.png","./rhombus/RhomH9.png","./rhombus/RhomH10.png","./rhombus/RhomH11.png",
"./rhombus/RhomH12.png","./rhombus/RhomH13.png","./rhombus/RhomH14.png","./rhombus/RhomH15.png","./rhombus/RhomH16.png","./rhombus/RhomH17.png",
"./rhombus/RhomH18.png","./rhombus/RhomH19.png","./rhombus/RhomH20.png","./rhombus/RhomH21.png","./rhombus/RhomH22.png","./rhombus/RhomH23.png",
"./rhombus/RhomH24.png","./rhombus/RhomH25.png","./rhombus/RhomH26.png");*/
}
/*function setup() {
 
createCanvas(windowWidth, windowHeight);
garden = createSprite(width/2,height/2);
garden.addAnimation("level1",scene1);
//garden.addAnimation("level3",scene3);
garden.scale = 0.8;

garden2 = createSprite(width+width/2,height);
garden2.addAnimation("level2",scene2);
//garden2.addAnimation("level4",scene4);
//garden2.scale = 0.8;
garden2.visible = false;

track = new Track(80, height-200,50,45);

//garden.scale =2.5;

invisibleground = createSprite(70, height-130, 500, 10);

boy = createSprite(70,height-200,20,20);
boy.addAnimation("Joe Running", boyImage);
boy.scale=1.5;


 //path=createSprite(80,height-200, 500,100);
 //path.width = windowWidth;
 //path.height = windowHeight-100;
 //path.addImage(pathImg);
 //path.scale = 0.5;



stoneGroup = createGroup();
coinGroup = createGroup();
birdGroup = createGroup();
}

function draw() {
if(gameState == Play )
{

background(0);
if(garden.visible)
{
    garden.velocityX = -3;
    if(garden.x<width/2)
    {
        garden2.velocityX = -3;
        garden2.visible = true;
    }
}

if(level == 1)
{
    garden.changeAnimation("level1");
    garden.scale = 0.8;
    
}
else if(level == 2)
{
    garden.changeAnimation("level2");
    garden.scale = 2.5;
    boy.scale =2;
invisibleground.y = height-60;
}


var r = Math.round(random(1,3));
if (World.frameCount % 150 == 0)
{
if(r==1)
{
createStone();
}
else if(r==2)
{
createCoin();
}
else {
createBird();
}
}

//if(path.y > 400 ){
    //path.y = height/2;
 // }
if(coinGroup.isTouching(boy))
{
coinGroup.destroyEach();
treasure = treasure + 10;
}

if(keyDown== UP_ARROW && boy.y >= 100) {
    boy.velocityY = -10;
  }
boy.velocityY = boy.velocityY + 0.8;
boy.collide(invisibleground);


}
else{
    if(stoneGroup.isTouching(boy)){
        gameState = END;
        garden.changeAnimation("game over");
        coinGroup.destroyEach();
    }
    
}

imageMode(CENTER);

drawSprites();
textSize(20);
fill(260);
push();
fill("black");
text("Total Coins: "+ treasure ,150,30);
pop();
}
*/
var wonBg;
function setup()
{
  var canvas = createCanvas(windowWidth,windowHeight);
  
  scene0.resize(width,height-30);//30
  scene1.resize(width,height-60);//270
//scene2.resize(width,height+35);//100
scene2.resize(width,height-10);
  backgroundScene0 = createSprite(width/2, 30+height/2, width, height);
  backgroundScene0.shapeColor = "pink";
  backgroundScene0.addImage("level0", scene0);
  backgroundScene0.addImage("level1", scene1);
  backgroundScene0.addImage("level2", scene2);
  backgroundScene0.velocityX = -7;

  stoneGroup = createGroup();
  coinGroup = createGroup();
  birdGroup = createGroup();
  
  
  backgroundScene1 = createSprite(width+width/2, 30+height/2, width, height);
  backgroundScene1.shapeColor = "lightblue";
  backgroundScene1.addImage("level0", scene0);
  backgroundScene1.addImage("level1", scene1);
  backgroundScene1.addImage("level2", scene2);
  
  backgroundScene1.velocityX = -7;
  gameOver = createSprite(width/2,height/2);

  gameOver.addImage("Game Over",gameOverImage);
  gameOverImage.resize(width,height);
  gameOver.scale  = 1;
  gameOver.visible = false;
/**/ 
 // boy = createSprite(60, height-270, 20,60);
 boy = createSprite(60, height-200, 20,60);
  boy.addAnimation("Joe",boyImage);
  boy.scale = 1.5;
 boyColliderLine = createSprite(50,height-120,100,10);
 boyColliderLine.visible = false;
 //boyColliderLine = createSprite(80,height-110,200,10);
    imageMode(CENTER);
    restart = createSprite(width/2,height/2+295);
    restart.addImage(restartImg);
    restart.scale = 0.5;  
    restart.visible = false;

    trophy = createSprite(width/2, height/2,50,50);
    trophy.addImage(youwonImg);
    trophy.scale=7;
    trophy.visible= false;

    wonBg = createSprite(width/2, height/2, width, height);
    wonBg.shapeColor = "white";
    wonBg.visible = false;
}
function draw()
{
    background(0);
    textSize(30);
    fill(255);
    textAlign(CENTER);
    if(gameState == "play")
    {
        console.log(l);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(touches.length > 0 || keyDown("space") )
    {
            boy.velocityY = -15;
            touches = [];
    }

    if(backgroundScene0.x<=-width/2)
    {
         backgroundScene0.x = backgroundScene1.x+width;
    }
    if(backgroundScene1.x<=-width/2)
    {
         backgroundScene1.x = backgroundScene0.x+width;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // if(touches.length > 0 && boy.y  >= height-120) {
       
    //     boy.velocityY = -10;
    //      touches = [];
    //   }
      boy.velocityY = boy.velocityY + 0.8;
    var r = Math.round(random(1,4));
//var r=3;
   if(frameCount%50 == 0)
    {
    if(r==1)
    {
        
    }

    else if(r==2)
    {
      //createStone();
      createCoin();
    }
    else if(r==3){
        createCoin();
        //createStone();
    }
    else{
      // createBird();
      //createStone();
        createCoin();
    }
}
    /*if(frameCount%30 == 0)
    {
            createStone();
           
            createCoin();
    }
    if(frameCount%50 == 0)
    {
        createBird();
    }  */      
  if(score%5 == 0)  
  {
    if(l == "level0")
        {
                
        }
    else if(l == "level1")
        {
    boyColliderLine.y = height-60;
    backgroundScene0.y= height-400;
    backgroundScene1.y = height- 400;
   // backgroundScene1.y = height-400;

        }
        else if(l== "level2")
        {
    boyColliderLine.y = height-60;
    backgroundScene0.y= height-400;
    backgroundScene1.y = height- 400;
    
        }
    else
        {
     //l = "level2";
     gameState = "win";
         }
    
    l="level"+floor(score/5);
    backgroundScene0.changeImage(l);
    backgroundScene1.changeImage(l);
     } 

    boy.collide(boyColliderLine);
    //boy.isTouching(coinGroup, d)
 if(boy.isTouching(coinGroup))
 {
     coinSound.play();
 }
   boy.overlap(coinGroup,removeCoin);
    }
    if(boy.isTouching(stoneGroup)||(boy.isTouching(birdGroup)))
    {
        gameState = "end";
        gameOverSound.play();
        
     
    }

   if(score == 15)
   {
     gameState ="win";
     gameWinSound.play();
    score=16;
   }
  
   if(gameState == "win")
   {
 /*var gameWin = createSprite(width/2-20,height/2-50);
gameWinImage.resize(width,height);
imageMode(CENTER);
 gameWin.addImage("Game Win",gameWinImage);
 gameWin.scale = 1.25;*/
   // background("blue");
  //this.showRank();
  

  wonBg.visible = true;
  wonBg.depth = backgroundScene0.depth+1;
  wonBg.depth = backgroundScene1.depth+1;

  textSize(35);
  textFont("Georgia");
  fill("black");
  text("Congratulations",width/2-100,80);
  text("You won!!!",width/2-50,330);
  /* */
 // background("pink");
  var r = [circleImage, rectangleHImage, rectangleVImage];
trophy.visible = true;
trophy.scale = 0.4;
  
  if(World.frameCount%10 == 0){
    for(var i=0; i<=width; i=i+30){
      var shape = createSprite(i, -10, 5);
      //shape.setAnimation("rectangleHorizontal");
      //shape.setAnimation("rectangleVertical");
      //shape.setAnimation("circleVertical");
      //shape.setAnimation("rhombus");
      shape.addAnimation("shape",random(r));
      shape.scale=0.1;
      shape.velocityY=5;
      shape.velocityX=random(-5,5);
    }
  }
//  textSize(35);
//  textFont("Georgia");
//  text("Congratulations",width/2-100,80);
//  text("You won!!!",width/2-50,330);
}
    else if(gameState == "end")
{
   imageMode(CENTER);
   gameOver.visible = true;
   restart.visible = true;
    boy.velocityY = 0;
    boy.remove();
    stoneGroup.setVisibleEach(false);
    birdGroup.setVisibleEach(false);
    stoneGroup.setVelocityEach(0);
   coinGroup.setVisibleEach(false);
    //stoneGroup.destroy();
    birdGroup.setVelocityEach(0);
    
   
if(touches.length>0 || mousePressedOver(restart)) {      
    location.reload();
   // reset();
    touches = [];
  }
}
if(keyDown("space")&& boy.y>=120)
{
    boy.velocityY=-10;

}
boy.velocityY = boy.velocityY + 0.8;
drawSprites();
if(gameState != "win")
{
   text("Score : "+score,80,35);
}
}

/*function d(boy,object1)
{
    object1.destroy();
    score=score+1;
  
}*/


function removeCoin(boy, coin){
    score+=1;
    
    coin.remove();
    coin.destroy();
    }

function createStone()
{

 // var stone = createSprite(width+10,height/2+315, 10, 10);
 var stone = createSprite(width+10, height-300, 20,60);
  stone.addImage(stoneImage);
  stone.scale=0.5;
  stone.velocityX = -5;
  stone.lifetime =(width+100)/5;

  stoneGroup.add(stone);

    }
function createCoin()
{
    var coin;
   //var coin = createSprite(width,height-350, 10, 10);
   var r = Math.round(random(1,5));
   switch(r)
   {
        case 1:
            coin = createSprite(width,height-200, 10, 10);
            break;
        case 2: 
             coin = createSprite(width,height-250, 10, 10);
             break;

        case 3: 
             coin = createSprite(width,height-300, 10, 10);
             break;

        case 4: 
             coin = createSprite(width,height-350, 10, 10);
             break;
        
       case 5: 
             coin = createSprite(width,height-250, 10, 10);
             break;
   }
    coin.addImage(coinImage);
    coin.scale=0.12;
    coin.velocityX = -5;
    coin.lifetime = (width+100)/5;
    coinGroup.add(coin);
}

function createBird()
{
   // var bird = createSprite(width,height-500,10,10);
   var bird;
    //bird.addImage(birdImage);
   // bird.scale = 0.1;
   // bird.velocityX = -5;
   // bird.lifetime =(width+100)/5;
    var r = Math.round(random(1,5));
    switch(r)
    {
        case 1:
            bird = createSprite(width,height-350,10,10);
                break;

        case 2:  bird = createSprite(width,height-300,10,10);
                break;
        
        case 3:  bird = createSprite(width,height-250,10,10);
                break;

        case 4:  bird = createSprite(width,height-200,10,10);
                break;
        
        case 5:  bird = createSprite(width,height-400,10,10);
                break;

    }
   // bird.addImage(birdImage);
   bird.addAnimation("flying",birdImage);
    bird.scale = 0.7;
    bird.velocityX = -5;
    bird.lifetime =(width+100)/5;
    birdGroup.add(bird);
}

/*function reset(){
    gameState = play;
    gameOver.visible = false;
    restart.visible = false;
    l ="level0";
    coinGroup.destroyEach();
    stoneGroup.destroyEach();
    birdGroup.destroyEach(); 
    score = 0;
    
  }*/
  
/*showRank()
 {
    swal({
      title: `Awesome!`,
      text: "You won the game",
      //imageUrl:
        //"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    //  imageUrl: "https://dx5683gi1tv0w.cloudfront.net/dtrjyhj9q/image/upload/w_1080,h_1080,c_pad,b_auto/s3/img0be16e8d8",
  // imageUrl:" https://image.shutterstock.com/image-vector/trophy-cup-award-vector-illustration-260nw-603371879.jpg",
   imageUrl: "https://static.vecteezy.com/system/resources/previews/003/090/132/original/trophy-winning-cup-vector.jpg",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }
  */
/*  function gameOver() 
  {
    swal({
      title: `Game Over`,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
}*/


       
