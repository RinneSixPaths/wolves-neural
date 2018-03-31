const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const FPS = 60;

class Victim {
	constructor(
        animal = 'rabbit',
        carnivores = .1, 
        scale = .2,
        toxicity = .1,
        predisposition = .9,
        speed = 1,
        picSrc = './rabbit.png'
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
        this.pic.onload = () => this.draw();
	}
    
    draw() {
        ctx.drawImage(this.pic, this.xPos, this.yPos, this.scale * 200, this.scale * 200);
    }
    
    resetParticle(animal) {
      const random = getRandom(0, 1);

      if (random > .5) {
        animal.xPos = -animal.scale * 200;
        animal.yPos = getRandom(0, canvas.height);
      } else {
        animal.xPos = getRandom(0, canvas.width);
        animal.yPos = canvas.height + animal.scale;   
      }
      this.draw();
    }
}