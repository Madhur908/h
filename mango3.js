 class Mango3{
     constructor(x,y,width,height){
         var options={
            isStatic:false
        }
           this.body=Bodies.rectangle(x,y,width,height,options)
           this.width=width
           this.height=height
         
            World.add(world,this.body)
    
     }
      display(){

          fill(rgb(40,251,237))
          var pos=this.body.position
          rectMode(CENTER)
          rect(pos.x,pos.y,this.width,this.height)

        
    }
}