var spaceCraft, iss, hasDocked;

function preload(){
  spaceCraftImg1 = loadImage("spacecraft1.png");
  spaceCraftImg2 = loadImage("spacecraft2.png");
  spaceCraftImg3 = loadImage("spacecraft3.png");
  spaceCraftImg4 = loadImage("spacecraft4.png");

  issImg = loadImage("iss.png");
  backGImg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.5

  spaceCraft = createSprite(200, 300, 50, 50);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(backGImg); 
  hasDocked = false; 

  if(!hasDocked){
   spaceCraft.x = spaceCraft.x + random(-1, 1);

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x = spaceCraft.x + 5;
    spaceCraft.addImage(spaceCraftImg4);
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.x = spaceCraft.x - 5;
    spaceCraft.addImage(spaceCraftImg3);
  }

  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y - 5;
    spaceCraft.addImage(spaceCraftImg2);
  }

  if(keyDown("DOWN_ARROW")){
    //spaceCraft.y = spaceCraft.y + 5;
    spaceCraft.addImage(spaceCraftImg2);
  }

  }

  if(spaceCraft.y <= (iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL", 250, 380);
  }
  drawSprites();
}

