//variable declaration space
var bullet, wall;
var speed, weight;
var damage;
var thickness


function setup() {
  createCanvas(1600,400);

//sets the speed, weight, and thickness to random values
  speed = random(223, 321);
  
  weight = random(30, 52);
  
  thickness = random(22, 83);

//creates the bullet and wall sprites and adds their properties
  bullet = createSprite(50, 200, 50, 10);
    bullet.velocityX = speed;
    bullet.shapeColor = rgb(255, 255, 255);
  
  wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = rgb(80, 80, 80);
  

}

function draw() {
  background(0, 0, 0);  
  
  //calculates damage done to the wall
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  //changes colour of wall based on damage
  if (collided(wall, bullet) === true){
    wall.shapeColor = rgb(0, 255, 0);
  } else { 
    wall.shapeColor = rgb(255, 0, 0);
  }
  
  drawSprites();
}