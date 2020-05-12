var fixedRect, movingRect,gameobj1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityX= -5;
  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor = "green";
  gameobj1.velocityX = 5;
  
}

function draw() {
  background(0,0,0);  

  bounceoff(gameobj1,fixedRect);
  drawSprites();
}
