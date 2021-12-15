var fondo;
var fondoSticker;

var shark;
var sharkSticker;

var peces;

var P1;
var P2;
var P3;
var P4;

function preload(){

    sharkSticker = loadImage ("tirrubon.png");
    
    P1 = loadImage ("fish1.png");
    P2 = loadImage ("fish2.png");
    P3 = loadImage ("fish3.png");
    P4 = loadImage ("fish4.png");
}

function setup() {
createCanvas(400,400);

    fondo = createSprite (200,200,400,400);
    shark = createSprite (200,360,20,20);

    //esta imagén es provisional jeje
    shark.addImage(sharkSticker);
    shark.scale=0.05;
    
}

function draw() {
    
    drawSprites();

    if(keyDown("space")){
        shark.velocityY = -5;
      }

    if(keyDown("down_arrow")){
        shark.velocityY = 5;
    }

    if (keyDown("left_arrow")){
        shark.velocityX= -5;
    }

    if (keyDown("right_arrow")){
        shark.velocityX= 5;
    }

    peces();
}

function peces(){

    if(frameCount%30 === 0){
    peces= createSprite (400+400*0.1,400/2-10,20,40);
    peces.scale=0.5;

    peces.velocityY=-3-frameCount/200;
    peces.lifetime= peces.y/peces.velocityY;

    switch( Math.round(random(1,6))){
        case 1: peces.addImage("P1",P1);
        break;
        case 2: peces.addImage("P2",P2);
        break;
        case 3: peces.addImage("P3",P3);
        break;
        case 4: peces.addImage("P4",P4);
        break;
        default: break;
    }
}

    peces.add(peces);

}