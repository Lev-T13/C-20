
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ground;

var ball2, wall;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(00,380,400,10, ground_options);
  World.add(world,ground)

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
  ball = Bodies.circle(100,20,20, ball_options);
  World.add(world, ball);


 var wall_options = {
   isStatic: true
 }

 wall = Bodies.rectangle(300, 200, 200, 10, wall_options);

 World.add(world, wall);

 var ball2_options = {
   restitution: 0.5,
   frictionAir: 0.01
 }

 ball2 = Bodies.circle(300, 10, 15, ball2_options);

 World.add(world, ball2);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20,20);

  rect(ground.position.x, ground.position.y, 400,10);

  rect(wall.position.x, wall.position.y, 200, 10);

  ellipse(ball2.position.x, ball2.position.y, 15, 15);
 
}

