class Stone{
    constructor(x,y){
        var options = {
            density : 1,
            frictionAir : 0.005
        }
        this.body = Bodies.circle(x,y,80,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        fill("black")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,80);
    }
}