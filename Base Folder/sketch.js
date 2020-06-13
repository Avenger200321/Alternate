var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;

function setup(){
canvas=createCanvas(500,400);
sun=createSprite(0,200,50,50);
mercury=createSprite(50,200,50,50);
venus=createSprite(100,200,50,50);
earth=createSprite(150,200,50,50);
mars=createSprite(200,200,50,50);

}

function display(){
    background("black");
    destroy();
    drawSprites();

}

function sunEnlarge(){
    if(World.frameCount%10===0){
        sun.width=sun.width+5;
        sun.height=sun.height+5;

    }
}
function destroy(){
    if(sun.isTouching(mercury)){
        mercury.destroy();
    }
    if(sun.isTouching(venus)){
        venus.destroy();
    }
    if(sun.isTouching(earth)){
        earth.destroy();
    }
    if(sun.isTouching(mars)){
        mars.destroy();
    }
    
}