
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

ball=new Ball(200,500,25)
block1=new Block(985,370,30,30)
block2=new Block(1016,370,30,30)
block3=new Block(1046,370,30,30)

block4=new Block(1077,370,30,30)
block5=new Block(955,370,30,30)
block6=new Block(1047,345,30,30)
block7=new Block(1015,345,30,30)
ground=new Ground(600,400,1200,2)
rope=new Slingshot(ball.body,{x:200,y:200})
block8=new Block(985,345,30,30)
block9=new Block(1015,315,30,30)
}

function draw() {
  background(255,255,255);  
  drawSprites();
Engine.update(engine)

block1.display()
ball.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block1.display()
block7.display()
block8.display()
block9.display()
ground.display()
rope.display()

}


function keyPressed(){
  if (keyCode===UP_ARROW){

   rope.fly()
   Matter.Body.applyForce(ball.body,ball.body.position,{x:105,y:-115})
  
  }




}






