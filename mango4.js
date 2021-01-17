class Mmango4{
    constructor(x,y,width,height){
        var options={
           isStatic:false,
           friction:5,
           mass:10
         }
          this.body=Bodies.rectangle(x,y,width,height,options)
          this.width=width
          this.height=height
           World.add(world,this.body)
   
    }
     display(){

         fill("grey")
         var pos=this.body.position
         rectMode(CENTER)
         rect(pos.x,pos.y,this.width,this.height)

       
   }
}