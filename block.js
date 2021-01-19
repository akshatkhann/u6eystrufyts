class Block{
    
    constructor(x, y, width, height) {
     
      var options = {
         friction:1.0,
        density:0.04, 
      restitution:0.8 
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
      }
      display(){
        
          push()
        
          translate(this.body.position.x,this.body.position.y)
     
          rotate(this.body.angle)
     fill("blue")
          rectMode(CENTER);
          rect( 0,0, this.width, this.height);
          pop()
          
          
    







        }
      
      
      }