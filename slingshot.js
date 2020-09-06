//making the constraint

class SlingShot{
        constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
                
        this.pointB = pointB
        this.sling = constraint.create(options);
        World.add(world, this.sling);
    } 

    fly(){
        this.sling.bodyA = null;
    }

    attach(body1){
        this.sling.bodyA = body1
    }

    display(){
            
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5)
            stroke(130,65,35);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
                 
        }
    }
 }