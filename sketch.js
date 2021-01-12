 var wall,thickness
 var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);

  
  bullet.velocityX=5;

  speed=random(55,90);
  weight=random(400,1500);

  thickness=random(22,83);
  
  
}

function draw() {
   background("black"); 
  
 if(hascollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed/(thickness * thickness * thickness);
  
 if(damage>10)
{
  wall.shapeColor=color(255,0,0);//red
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);//green
}
 }

 
 

  drawSprites();

  hascollided(bullet,wall);
  }

  function hascollided(lbullet,lwall)
{

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}

