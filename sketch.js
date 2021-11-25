var cat1, cat2, cat3, cat4;
var cat1Image, cat2Image, cat3Image, cat4Image;
var catAnimation;
var garden, gardenImage;
var mouse1, mouse4;
var mouse3, mouse2;
var mouse1Image, mouse4Image;
var mouseAnimation;

function preload() {
    //load the images here
    cat1Image = loadImage("images/cat1.png");
    gardenImage = loadImage("images/garden.png");
    catAnimation = loadAnimation("images/cat2.png","images/cat3.png");
    cat4Image = loadImage("images/cat4.png");
    mouse1Image = loadImage("images/mouse1.png");
    mouse4Image = loadAnimation("images/mouse4.png");
    mouseAnimation = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(800, 600);
    cat1.addImage(cat1Image);
    cat1.scale = 0.2;

    mouse1 = createSprite(100, 600);
    mouse1.addImage(mouse1Image);
    mouse1.scale = 0.2;

   

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

    if (cat1.x - mouse1.x< (cat1.width - mouse1.width)/2){
        cat1.velocityX = 0;
        cat1.addImage("catrun", cat4Image);
        cat1.changeImage("catrun");
        cat1.scale = 0.2;
        cat1.x = 200;

        mouse1.addAnimation("mouses", mouse4Image);
        mouse1.changeAnimation("mouses");
        mouse1.scale = 0.2;
        
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){
    mouse1.addAnimation("mousedance", mouseAnimation);
   // mouseAnimation.scale = 0.2;
   mouse1.changeAnimation("mousedance");
   mouse1.frameDelay = 25;
   cat1.addAnimation("catrun", catAnimation);
    //catAnimation.scale = 0.2;
    cat1.velocityX = -5;
    cat1.changeAnimation("catrun");

}
}
