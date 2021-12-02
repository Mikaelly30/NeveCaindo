class Neve{
    constructor(x,y,r){
        var options = {
            restitution: 0.5,
          friction: 0
        }
   
        this.loadImage = loadImage("neve.png")
        this.r = 250;
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        World.add(world, this.body);
    }

    display(){
        
        
    var pos = this.body.position;
    
       
        push();
        noStroke();
        translate(pos.x,pos.y);
        image(this.loadImage,0,0,this.r,this.r);
        pop();
        
        
}

}
