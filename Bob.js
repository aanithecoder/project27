class Bob {
	constructor(x, y, r) {
		var options={
			isStatic:false,	
            restitution:1,
            friction:0,
            density: 0.8
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("circle.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
 		World.add(world, this.body);

	}
	display() {
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			// rectMode(CENTER)
			//strokeWeight(4);
			fill(50, 168, 82);
			imageMode(CENTER);
			//rect(0,0,this.w, this.h);
			image(this.image, 0, 0, this.r, this.r);
			pop()
			
	}

}