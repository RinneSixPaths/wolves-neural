const Network = synaptic.Network;
const Layer = synaptic.Layer;
const Trainer = synaptic.Trainer;

class Wolf extends Network {
	constructor(
		name = 'Wolf', 
		hunger = 1, 
		scale = 1,
        speed = 1
	) {
		super();
		
		this.name = name;
		this.starvation = hunger;
		this.scale = scale;

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

	evolve(trainer = {}, trainingSet = [], options = {}) {
		/*2^6*/
		this.createBrain(6, 6, 1);
		return new Promise((resolve, reject) => {
			if (trainingSet.length) {
				trainer.train(trainingSet, options);
				resolve();
			} else {
				reject();
			}
		});
	}

	increaseStarvation() {
        if (this.starvation === 1) {
            return;
        }
		this.starvation += 0.1;
	}

	resetStarvation() {
		this.starvation = 0;
	}
}
