var sea;
var seaimage;
var boat;
var boatimage;

function preload(){
  seaimage = loadImage ("sea.png")
  boatimage = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png" );

}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200,400,400);
  sea.addImage (seaimage);
  sea.scale = 0.5;
  boat = createSprite(200,200);
  boat.addAnimation("boatanimation", boatimage);
  boat.scale = 0.3;
}

function draw() {
  background("blue");
 
  drawSprites();
}