
var sea
var ship1
var ship2
var seaimage
var shipimg
function preload(){
seaimage = loadImage("sea.png")
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");

}

function setup(){
    createCanvas(400,400);
    sea = createSprite(400,200);
    sea.addImage(seaimage);
    sea.scale = 0.5;

    ship1 = createSprite(200,190,20,20);
    ship1.addAnimation("movingship",shipimg);
    ship1.velocityX = 1;
    ship1.scale = 0.25;

}

function draw() {
  background("blue");

  sea.velocityX = -3

 if(sea.x < 0){
   sea.x = sea.width/8;
 }

 drawSprites();
 
}
