class stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:0.2,
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.image=loadImage("stone.png")
        
        this.radius=this.radius
       
        
         
        World.add(world,this.body)
    }
    display(){
        
     fill("green")
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
       ellipse( 0,0, this.radius);
        pop();
        

    }
}