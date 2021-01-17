 var BoyImage,Treeimage,mangoImage,stoneimage
 const Engine = Matter.Engine;
  const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint=Matter.Constraint

  function preload()
 {

 }

  function setup() { 
   createCanvas(1000, 1200);
   alert("made by Madhur")
   engine = Engine.create();
	 world = engine.world;
   alert("CAN YOU STRIKE THE UPPER MOST?")

  

   //Create the Bodies Here.
   ground=new Ground(500,350,400,10)
   ground2=new Ground(800,150,200,10)
   Stone=new stone(155,390,40)
   
 
    stoneinhand=new SlingShot(Stone.body,{x:65,y:360})
    
   
    Mango1=new mango1(390,310,40,60)
    mango2=new mango1(430,310,40,60)
    mango3=new mango1(470,310,40,60)
    mango4=new mango1(510,310,40,60)
    mango5=new mango1(550,310,40,60)
    mango6=new mango1(590,310,40,60)
    mango7=new mango1(630,310,40,60)
    mango8=new Mango2(430,270,40,60)
    mango9=new Mango2(470,270,40,60)
    mango10=new Mango2(510,270,40,60)
    mango11=new Mango2(550,270,40,60)
    mango12=new Mango2(590,270,40,60)
    mango13=new Mango3(470,230,40,60)
    mango14=new Mango3(510,230,40,60)
    mango15=new Mango3(550,230,40,60)
    mango16=new Mmango4(510,190,40,60)
    Mango17=new mango1(740,110,40,60)
    Mango18=new mango1(780,110,40,60)
    Mango19=new mango1(820,110,40,60)
    Mango20=new Mmango4(780,70,20,30)
    

  Engine.run(engine);
  
}


function draw() {
  
  
 
  


  collision=Matter.SAT.collides(Mango1.body,Stone.body)
  collis=Matter.SAT.collides(mango2.body,Stone.body)
  collision3=Matter.SAT.collides(mango3.body,Stone.body)
  collision4=Matter.SAT.collides(mango4.body,Stone.body)
  rectMode(CENTER);
  background(200);
  
 
  
  mango8.display()
  Mango1.display()
  mango9.display()
  mango2.display()
  mango10.display()
  mango3.display()
  mango11.display()
  mango12.display()

  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  
  mango13.display()
  mango14.display()
  mango15.display()
  mango16.display()
  Mango17.display()
  Mango18.display()
  Mango19.display()
  Mango20.display()
  Stone.display()
  stoneinhand.display()
  ground.display()
  ground2.display()
  


 
 
  }
   

  
  
  function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stoneinhand.fly();
}

function iff(){
  if(Stone.body.position.y>600){
    var alertt =alert("Oh! you missed the striker , press SPACE to continue ")
  }
}

function keyPressed(){
  if(keyCode===32){
    stoneinhand.attach(Stone.body)
    alertt.returnValue=false
  }

}







