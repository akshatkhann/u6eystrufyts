class Ball{
    constructor(x, y, radius ) {
        var options = {
           
          frictionAir:0.005,
            'friction':0,
            'density':1.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
       
        
        World.add(world, this.body);
      }
      display(){
      
        push();
      
        ellipseMode(RADIUS);
        ellipse( this.body.position.x,this.body.position.y, this.radius);
        pop();
      }
}

















