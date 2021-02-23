var jungle,jungleImage

function preload(){
    jungleImage=loadImage("images/background.jpg")
}

function setup(){
    createCanvas(600,400)

    jungle=createSprite(300,200)
    jungle.addImage(jungleImage)
    jungle.scale=0.5
    

    
}
function draw(){

    drawSprites();

}