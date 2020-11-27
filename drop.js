class Drop{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, radius/3, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        ellipseMode(CENTER);
        fill("lightBlue");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

        pop();
      }
}