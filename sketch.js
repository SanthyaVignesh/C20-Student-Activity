var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(500,150,100,150);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("orange");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  //console.log()

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}