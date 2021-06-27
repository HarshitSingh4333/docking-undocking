var Spacecraftleft , Spacecraftright , Spacecraftup;
var standingspacecraft;
var mainspaceCraft;
var spacebackground;
var hasDocked = false;




function preload() {
  Spacecraftleft = loadImage("docking-undocking/spacecraft3.png");
  Spacecraftright = loadImage("docking-undocking/spacecraft4.png");
  Spacecraftup = loadImage("docking-undocking/spacecraft2.png");
  standingspacecraft = loadImage("docking-undocking/spacecraft1.png");
  mainspaceCraft = loadImage("docking-undocking/iss.png");
  spacebackground = loadImage("docking-undocking/spacebg.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 var iss = createSprite(570,180,10,10);
 iss.addImage(mainspaceCraft)

 var Standingspacecraft = createSprite(400,370,10,10)
 Standingspacecraft.addImage(standingspacecraft)


}

function draw() {
  background(spacebackground); 
  
  if(!hasDocked){
    standingspacecraft.positionX = 500
    standingspacecraft.positionY = 330
  }

  if(keyDown("UP_ARROW")) {
    Standingspacecraft.velocityY = -2;
    standingspacecraft.addImage(spacecraftup)
  }
  if(keyDown("DOWN_ARROW")) {
    Standingspacecraft.velocityY = 3;
  standingspacecraft.addImage(spacecraftright)
  }
  if(keyDown("LEFT_ARROW")) {
    Standingspacecraft.velocityX = -2
    standingspacecraft.addImage(spacecraftleft)
  }
  if(keyDown("RIGHT_ARROW")) {
    Standingspacecraft.velocityX = 3;
    Standingspacecraft.addImage(spacecraftright)
  }


  if(standingspacecraft.isTouching(iss)) {
    hasDocked = true
    text("DOCKING SUCCESSFUL!")
  }


  drawSprites();
}