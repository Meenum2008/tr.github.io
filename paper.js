class Paper{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:15,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    
    }
    display(){

        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER); 
        strokeWeight(4);
        fill("brown");
      
        image(this.image,100,140,this.r,this.r);
        pop();
    }
}