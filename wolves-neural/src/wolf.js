const Network = synaptic.Network;
const Layer = synaptic.Layer;

class Wolf extends Network {
	constructor(
		name = 'Wolf', 
		hunger = 1, 
		scale = 1,
        speed = 2
	) {
		super();
		
		this.name = name;
		this.starvation = hunger;
		this.scale = scale;
		this.foodPreferences = [];
		this.huntTarget = null;
		this.starveTimer = null;
		this.hungerTimer = null;

		/*ANIMATION PROPS*/
		this.maxSpeed = speed;
		this.xPos = getRandom(0, canvas.width);
		this.yPos = getRandom(0, canvas.height);
		this.xVelocity = getRandom(.1, this.maxSpeed);
		this.yVelocity = getRandom(.1, this.maxSpeed);
		this.pic = new Image();
		this.pic.src = './wolf.png';
	}

	createBrain(input = [], hidden = [], output = []) {
		const inputLayer = new Layer(input);
		const hiddenLayer = new Layer(hidden);
		const outputLayer = new Layer(output);

		inputLayer.project(hiddenLayer);
		hiddenLayer.project(outputLayer);

		this.set({
			input: inputLayer,
			hidden: [hiddenLayer],
			output: outputLayer
		});
	}

	evolve(trainer = {}, trainingSet = [], options = {}, callback = _ => {}) {
		this.createBrain(6, 6, 1);
		return new Promise((resolve, reject) => {
			if (trainingSet.length) {
				trainer.train(trainingSet, options);
				resolve(callback);
			} else {
				reject();
			}
		});
	}

	increaseStarvation(callback = _ => {}) {
		if (this.starvation >= 1) {
			if (!this.starveTimer) {
				this.starveTimer = setTimeout(callback, 10000, this);
			}
			return;
		}
		if (this.starvation >= .5 && this.starvation < .6) {
			eatingSound('./not.mp3');
		}
		this.starvation += 0.1;
	}

	resetStarvation() {
		this.starvation = 0;
		
		if(this.starveTimer) {
			clearTimeout(this.starveTimer);
			this.starveTimer = null;
		}
	}

	hunting() {
		if (!this.huntTarget) {
			return;
		}

		const speedX = (this.xPos - this.huntTarget.xPos);
		const speedY = (this.yPos - this.huntTarget.yPos);
		let divider = 100;
		//SPEED BURST
		if (
			speedX < 200
			&& speedY < 200
			&& speedX > -200
			&& speedY > -200
		) {
			divider = 50;
		}

		this.xVelocity = -speedX/divider;
		this.yVelocity = -speedY/divider;
	}

	wouldEat(victim) {
		const decision = this.activate([
			victim.carnivores,
			victim.scale,
			victim.toxicity,
			victim.predisposition,
			this.scale,
			this.starvation
		]);
		if (Math.round(decision[0])) {
			return true;
		} else {
			return false;
		}
	}

	resetVelocity() {
		this.xVelocity = getRandom(.1, this.maxSpeed);
		this.yVelocity = getRandom(.1, this.maxSpeed);
	}
}
