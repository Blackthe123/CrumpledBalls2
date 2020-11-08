class DustBin {  
    constructor( ){
        var options = {
            isStatic : true
        }
     
        this.bodyb = Bodies.rectangle(650, 665, 120, 20, options);
	    World.add(world, this.bodyb);
	    this.bodyl= Bodies.rectangle(580, 605, 20, 140,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle(720, 605, 20, 140,options);
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height 
        this.image = loadImage("images/dustbingreen.png");
   }
   display(){
       fill("white");
       rectMode(CENTER);
       rect(650, 665, 120, 20);
       rect(580, 605, 20, 140);
       rect(720, 605, 20, 140);

   }
}