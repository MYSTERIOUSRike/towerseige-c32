//In the game design competition in your school, you are asked to make a game related to knocking down objects.
//Also, check the vanishing effect on the BOX 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

//making the variables
var score=0;
var ground1,box1,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground2,b1,b2,b3,b4,b5,b6,b7,b8,b9,polygon1,sling,ground3;
var backgroundImg;
var week_number;

function preload() {
  
  backgrounds();
}


function setup() {
  //creating canvas
	createCanvas(1200, 800);

	engine = Engine.create();
  world = engine.world;

  polygon1=new polygon(100,200,10)

  Engine.run(engine);
  //creating the GROUND
  ground1=new ground(660,400,300,10);
  ground2=new ground(960,200,300,10);
  ground3=new ground(600,790,1200,10)
  
  //lvl 1
  box1=new box(570,380,30,30);
  box2=new box(600,380,30,30);
  box3=new box(630,380,30,30);
  box4=new box(660,380,30,30);
  box5=new box(690,380,30,30);
  box6=new box(720,380,30,30);
  box7=new box(750,380,30,30);
  
  //lvl 2
   box8=new box(600,350,30,30);
   box9=new box(630,350,30,30);
   box10=new box(660,350,30,30);
   box11=new box(690,350,30,30);
   box13=new box(720,350,30,30);

  //lvl 3
   box14=new box(630,320,30,30);
   box12=new box(660,320,30,30);
   box15=new box(690,320,30,30);
  
  // lvl 4
	 box16=new box(660,290,30,30);
    
    //second pyramid
    //lvl 1
    b1=new box(850,180,40,40)
	  b2=new box(890,180,40,40)
	  b3=new box(930,180,40,40)
	  b4=new box(970,180,40,40)
    b5=new box(1010,180,40,40)
    
    //lvl 2
	  b6=new box(890,140,40,40)
	  b7=new box(930,140,40,40)
    b8=new box(970,140,40,40)
    
    //lvl 3
	  b9=new box(930,100,40,40)
	  
	  sling=new SlingShot(polygon1.body,{x:100,y:200})  
	  
}

function draw() {
  rectMode(CENTER);

  if(backgroundImg){
    background(backgroundImg);
    }

  //displaying everthing
  ground1.display();
  ground2.display(); 
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box1.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  polygon1.display();
  
  drawSprites();
  textSize(30);
  text("SCORE="+score,450,40)
  text("Week Number="+week_number,750,40)
 
}

//funtions to shoot and reload the polygon
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed () {
  if(keyCode === 32){
      sling.attach(polygon1.body);
  }
}
 
async function backgrounds(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var json = await response.json();
  var dt = json.datetime;
  
  week_number = json.week_number;
  console.log("Week Number="+week_number);
 
  var hour = dt.slice(11,13);
  
  if(hour>= 06 && hour<=19){
      bg="bg.png"
  }else {
      bg="bg2.jpg"

}
  backgroundImg = loadImage(bg);
}



