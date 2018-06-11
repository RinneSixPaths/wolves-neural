import { getRandom } from '../services/worldService';

const monsterIcons = [
  './img/monster1.png', 
  './img/monster2.png', 
  './img/monster3.png', 
  './img/monster4.png', 
  './img/monster5.png', 
  './img/monster6.png'
];

export default class Victim {
	constructor(
        animal = 'monster',
        carnivores = .9, 
        scale = 1,
        toxicity = .5,
        predisposition = .1,
        speed = 1,
        picSrc = monsterIcons[Math.floor(getRandom(0, monsterIcons.length))]
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