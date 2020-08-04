var sprite;
var sprite2;


function setup() {
  createCanvas(800,400);
sprite = createSprite(200, 200, 50, 50);
sprite2 = createSprite(300,200,50,50);

sprite.shapeColor ="red";
sprite2.shapeColor ="red";
}

function draw() {
  background(0);
  


  sprite.x=mouseX;
  sprite.y=mouseY;
  
if(sprite.x-sprite2.x<=sprite.width/2+sprite2.width/2&&
  sprite2.x-sprite.x<=sprite2.width/2+sprite.width/2&&
  sprite.y-sprite2.y<=sprite.height/2+sprite2.height/2&&
  sprite2.y-sprite.y<=sprite2.height/2+sprite.height/2){

sprite.shapeColor ="green";
sprite2.shapeColor ="green";

  }
else{
  sprite.shapeColor ="red";
sprite2.shapeColor ="red";
}

  drawSprites();
}