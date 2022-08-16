var background
var astronaut
var edges
function preload(){
  bath = loadAnimation('bath1.png','bath2.png')
  brush = loadImage('brush.png')
  drink = loadAnimation('drink1.png','drink2.png')
  eat = loadAnimation('eat1.png','eat2.png')
  gym = loadImage('gym12.png')
  iss = loadImage('iss.png')
  move = loadAnimation('move.png','move1png')
  sleep = loadImage('sleep.png')
}
function setup() {
  createCanvas(800,400);
  background = createSprite(400,200,800,400)
  background.addImage(iss)
  background.scale = 0.2
  astronaut = createSprite(400,200,50,50)
  astronaut.addImage(sleep)
  astronaut.scale = 0.1  
  astronaut.velocityX = 3
  astronaut.velocityY = 2
  edges = createEdgeSprites()

}


function draw() {
  drawSprites();
  textSize(50);
  text('Instructions:',60,50)
  textSize(30)
  text('Up Arrow = Brush',60,90)
  text('Down Arrow = Gymming',60,120)
  text('Left Arrow = Eating',60)
  text('Right Arrow = Bathing',60,180)
  text('M Key = Moving',60,210)
 

  if(keyDown("UP_ARROW")){
    astronaut.addImage(brush)
    astronaut.y = 200
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addImage(gym)
    astronaut.y = 200
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation(eat)
    astronaut.y = 200
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation(move)
    astronaut.y = 200
    astronaut.velocityX = 3
    astronaut.velocityY = 2
  }
  if(keyDown("M_KEY")){
    astronaut.changeAnimation(bath)
    astronaut.y = 200
    astronaut.velocityX = 3
    astronaut.velocityY = 2
  }
astronaut.bounceOff(topEdge)
astronaut.bounceOff(bottemEdge)
astronaut.bounceOff(leftEdge)
astronaut.bounceOff(rightEdge)
}
