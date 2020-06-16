class Paper{
Constructor(x,y,radius,height){
    var options = {
        isStatic :  false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.ellipse(x,y,radius,height,options);
      this.radius = 3;
      this.height = 2;
      World.add(world, this.body);
}
display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.height);
    }
}