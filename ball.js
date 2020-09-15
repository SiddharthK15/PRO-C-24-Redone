class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        /*this.width = width;
        this.height = height;*/
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        fill ("blue");
        var pos = this.body.position;
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius);
        
    }
}