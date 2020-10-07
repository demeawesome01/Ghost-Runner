var tower,towerImage;  
var door,doorImage,doorGroup
var climber,climberImage,climberGroup
var ghost,ghostImage 
var block,blockGroup 
var gameState = "PLAY"
function preload(){ 
towerImage = loadImage("tower.png") 
doorImage = loadImage("door.png") 
climberImage = loadImage("climber.png") 
ghostImage = loadImage("ghost-standing.png")
}
function setup(){ 
createCanvas(600,500)
tower = createSprite(300,250,200,500)
tower.addImage(towerImage)
tower.velocityY = 3; 

doorGroup = new Group();  
climberGroup = new Group();  
blockGroup = new Group(); 


ghost = createSprite(300,250,20,20) 
ghost.addImage(ghostImage); 
ghost.scale = 0.45;
} 
function draw(){ 
background("black") 
if (gameState === "PLAY"){ 

if (tower.y > 500){ 
tower.y = 200
}   
if (keyDown("LEFT_ARROW")){ 
ghost.x = ghost.x -3;

}
if (keyDown("RIGHT_ARROW")){ 
ghost.x = ghost.x +3;
}

if(keyDown("SPACE")){ 
 ghost.velocityY = -3;
 }
 
  ghost.velocityY = ghost.velocityY+1;
  
  if (climberGroup.isTouching(ghost)){ 
  ghost.velocityY = 0; 
  } 
  if (blockGroup.isTouching(ghost)||ghost.y>500){ 
  ghost.destroy(); 
  gameState = "END"
  }
balcony(); 



drawSprites(); 
} 
if (gameState === "END"){  
fill("orange");
textSize(30); 
textFont("New Romans")
text("Game Over",250,200) 


}
}

function balcony(){ 
if(frameCount%200 === 0){
door = createSprite(200,-10,20,20) 
door.addImage(doorImage); 
door.velocityY = 2; 
door.x = Math.round(random(100,450))
door.lifetime = 150; 
doorGroup.add(door);  

ghost.depth = door.depth; 
ghost.depth = ghost.depth+1

climber = createSprite(door.x,40,10,10) 
climber.addImage(climberImage); 
climber.velocityY = 2;  
climber.lifetime = 150; 
climberGroup.add(climber);
 
block = createSprite(climber.x,50,80,5) 
blockGroup.add(block); 
block.velocityY = 2; 
block.lifetime = 150; 
block.visible = false; 

     
} 

}

