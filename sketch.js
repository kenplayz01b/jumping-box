var canvas;
var music;
var m1 , m2 , m3 , m4;
var b1 ;
var edges;

function preload(){
    music = loadSound("music.mp3");
    


}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    m1 = createSprite(0, 580, 360, 30);
    m1.shapeColor="blue"

    m2= createSprite(295 , 580 , 200 ,30);
    m2.shapeColor ="red"

    m3 = createSprite(515,580,200,30);
    m3.shapeColor ="orange"

    m4 = createSprite(740 , 580 , 220 ,30);
    m4.shapeColor ="pink"



    //create box sprite and give velocity
    b1= createSprite(random(20,750), 100 , 40 ,40);
    b1.velocityX=5;
    b1.velocityY=5;
    b1.shapeColor ="white"

    /*b2= createSprite(700, 300 , 20 ,20);
    b2.velocityY=1;
    b2.shapeColor ="white"

    b3= createSprite(800, 300 , 20 ,20);
    b3.velocityY=1;
    b3.shapeColor ="white"

    b4= createSprite(100, 300 , 20 ,20);
    b4.velocityY=1;
    b4.shapeColor ="white"
*/

}

function draw() {
    background("black")
    //background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    b1.bounceOff(edges);

    

    //add condition to check if box touching surface and make it box

if(m1.isTouching(b1) && b1.bounceOff(m1)){
    b1.shapeColor = "blue"
    music.play();
}
if(m2.isTouching(b1) && b1.bounceOff(m2)){
    b1.shapeColor = "red"
    music.stop();
}
if(m3.isTouching(b1) && b1.bounceOff(m3)){
    b1.shapeColor = "orange"
    
}
if(m4.isTouching(b1) && b1.bounceOff(m4)){
    b1.shapeColor = "pink"
  
}



    drawSprites();
}
