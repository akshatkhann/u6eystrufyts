class Slingshot{

    constructor(bodya,pointb){
    
    var option={
    bodyA:bodya,
    pointB:pointb,
    stiffness:0.04,
    length:100
    
    
    
    }
       
    this.pointb=pointb
    this.sling=Constraint.create(option)
    World.add(world,this.sling)
   
    
    
    
    }
    
    display(){
   strokeWeight(4)
   if(this.sling.bodyA){
   line(this.pointb.x,this.pointb.y,this.sling.bodyA.position.x,this.sling.bodyA.position.y)
    
    
   }
    
    
    
   
    }
       
  
     
    
    
    fly(){
    
    this.sling.bodyA=null
    
   
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    }
    
    
    
    