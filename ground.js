class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x, y, 800, 50, options);
      this.width = 800;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };