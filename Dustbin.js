class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic :  true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
          this.height = height;
          this.width = width;
          World.add(world, this.body);
    }
    display(){
          var pos = this.body.position;
          push();
          rectMode(CENTER);
          stroke(20);
          translate(pos.x,pos.y)
          fill("red");
          rect(0, 0, this.width,this.height);
         pop();
        }
    }