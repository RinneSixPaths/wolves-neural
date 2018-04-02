class Victim {
	constructor(
        animal = 'demon',
        carnivores = .9, 
        scale = 1,
        toxicity = .5,
        predisposition = .1,
        speed = 1,
        picSrc = demons[Math.floor(getRandom(0, demons.length))]
    ) {
		this.animal = animal;
		this.carnivores = carnivores;
		this.scale = scale;
		this.toxicity = toxicity;
		this.predisposition = predisposition;
        
    /*ANIMATION PROPS*/
    this.maxSpeed = speed;
    this.xPos = getRandom(0, canvas.width);
    this.yPos = getRandom(0, canvas.height);
    this.xVelocity = getRandom(.1, this.maxSpeed);
    this.yVelocity = getRandom(.1, this.maxSpeed);
    this.pic = new Image();
    this.pic.src = picSrc;
	}
}