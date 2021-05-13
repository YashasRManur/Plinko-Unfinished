var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,800);
  Ground = new Base(800, 240, width, 20)
}

function draw() {
  background(25,255,255);
  Ground.display();
  drawSprites();
}