class Drop {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,5,options)

      this.width = width;
      this.height = height;
      World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        fill("blue")
     ellipse(pos.x, pos.y, this.width, this.height);

    }
    update(){
      if(this.body.position.y>800){
        
        Matter.Body.setPosition (this.body, {x: random(0,400), y: random(0,-10)})
      }

    }
}