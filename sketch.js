var spaceCraft_img;
var background_img;
var alienShip_img;
var asteroid1_img, asteroid2_img;
var bullet_img, gun_img, repairTool_img, shield_img; 

let engine;
let world;

function preload(){
  spaceCraft_img = loadImage("Images/SpaceCraft.png");
  background_img = createImg("./Images/Background1.gif");
  alienShip_img = loadImage("Images/Alien_ship.png");
  asteroid1_img = loadImage("Images/Asteroid_1.png");
  asteroid2_img = loadImage("Images/Asteroid_2.png");
  bullet_img = loadImage("Images/Bullet.png");
  gun_img = loadImage("Images/Gun.png");
  repairTool_img = loadImage("Images/Repair_tool.png");
  shield_img = loadImage("Images/Shield.png");
}

function setup() 
{
  createCanvas(1200, 600);
  bg = createSprite(1000, 600);
  bg.addImage(background_img);
  bg.scale = 5;

}

function draw() 
{
  background(0);
  //image(background_img, 0, 0, width, height);
  drawSprites();
}




