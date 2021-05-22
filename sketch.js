var fixedRect, movingRect; fixedRect1,fixedRect2,fixedRect3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1= createSprite(450, 420, 50, 50);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(500, 400, 70, 90);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(400, 200, 50, 100);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(istouching(movingRect,fixedRect3)){
  movingRect.shapeColor = "red";
  fixedRect3.shapeColor = "red";

}
 else {
  movingRect.shapeColor = "green";
  fixedRect3.shapeColor = "green";
 } 

  drawSprites();
}

function istouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
return true
}
else {
  return false
}

}