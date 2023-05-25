class Box{
    constructor(x,y){
        var options = {
            friction : 1,
            restitution : 0.8,
            density : 0.05
        }

        this.body = Bodies.rectangle(x,y,70,70, options);
        World.add(world, this.body);        
    }

     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
           push();
           translate(pos.x,pos.y);
           rotate(angle);
           rectMode(CENTER);
           rect(0,0,70,70);
           pop()
        }
}