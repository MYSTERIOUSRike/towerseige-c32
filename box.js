//making the boxes 
class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          isStatic:false,
          'friction':0.3,
          'density':1.26
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.visibility=255; // for vanishing/tinting 
      
      World.add(world, this.body);

    }

    display(){
    
      var angle= this.body.angle;
      
      if(this.body.speed < 3){
        //console.log("inside if");
    
          push();
          translate(this.body.position.x,this.body.position.y)
          rotate(angle)
          rectMode(CENTER);
          fill(0,this.visibility,0);
          rect(0, 0, this.width, this.height);
          pop(); 
        
       } else{
        //console.log("inside else");

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER);

        this.visibility=this.visibility-30  // for vanishing/tinting 
        fill(0,this.visibility,0);
        rect(0, 0, this.width, this.height);

        //for removing boxes
        if(this.visibility===0 || this.visibility===255){
          //console.log("inside vis");
          World.remove(world, this.body);
        }
        pop();
        }
      }

      score (){
        if(this.visibility<0 && this.visibility>-105){
        score++;
        }
      }
  };
  