const Network = synaptic.Network;
const Layer = synaptic.Layer;
const Trainer = synaptic.Trainer;

class Wolf extends Network {
	constructor(name = 'Wolf', hunger = 1, scale = 1) {
		super();
		
		this.name = name;
		this.starvation = hunger;
		this.scale = scale;
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
		return new Promise((resolve, reject) => {
			if (trainingSet.length) {
				foodTrainer.train(trainingSet, options);
				resolve();
			} else {
				reject();
			}
		});
	}

	increaseSatrvation() {
		this.starvation += 0.1;
	}

	resetStarvation() {
		this.starvation = 0;
	}
}

class Victim {
	constructor(animal = 'rabbit', carnivores = 1, scale = 1, toxicity = 1, predisposition = 1) {
		this.animal = animal;
		this.carnivores = carnivores;
		this.scale= scale;
		this.toxicity = toxicity;
		this.predisposition = predisposition;
	}
}

const breedyEater = new Wolf('Breedy', 1, 0);
breedyEater.createBrain(6, 6, 1);
const foodTrainer = new Trainer(breedyEater);

const options = {
	rate: .3,
	iterations: 1000000,
	error: .005,
	shuffle: true,
	log: 1000,
	cost: Trainer.cost.CROSS_ENTROPY
}

const trainingSet = [
  {
    input: [0, 0, 0, 0, 0, 0],
    output: [0]
  },
  {
    input: [0, 0, 0, 0, 0, 1],
    output: [1]
  },
  {
    input: [0, 0, 0, 0, 1, 0],
    output: [0]
	},
	{
    input: [0, 0, 0, 0, 1, 1],
    output: [1]
	},
	{
    input: [0, 0, 0, 1, 0, 0],
    output: [1]
	},
	{
    input: [0, 0, 0, 1, 0, 1],
    output: [1]
	},
	{
    input: [0, 0, 0, 1, 1, 0],
    output: [1]
	},
	{
    input: [0, 0, 0, 1, 1, 1],
    output: [1]
	},
	{
    input: [0, 0, 1, 0, 0, 0],
    output: [0]
	},
	{
    input: [0, 0, 1, 0, 0, 1],
    output: [0]
	},
	{
    input: [0, 0, 1, 0, 1, 0],
    output: [0]
	},
	{
    input: [0, 0, 1, 0, 1, 1],
    output: [0]
	},
	{
    input: [0, 0, 1, 1, 0, 0],
    output: [0]
	},
	{
    input: [0, 0, 1, 1, 0, 1],
    output: [1]
	},
	{
    input: [0, 0, 1, 1, 1, 0],
    output: [0]
	},
	{
    input: [0, 0, 1, 1, 1, 1],
    output: [1]
	},
	{
    input: [0, 1, 0, 0, 0, 0],
    output: [0]
	},
	{
    input: [0, 1, 0, 0, 0, 1],
    output: [1]
	},
	{
    input: [0, 1, 0, 0, 1, 0],
    output: [1]
	},
	{
    input: [0, 1, 0, 0, 1, 1],
    output: [1]
	},
	{
    input: [0, 1, 0, 1, 0, 0],
    output: [0]
	},
	{
    input: [0, 1, 0, 1, 0, 1],
    output: [1]
	},
	{
    input: [0, 1, 0, 1, 1, 0],
    output: [0]
	},
	{
    input: [0, 1, 0, 1, 1, 1],
    output: [1]
	},
	{
    input: [0, 1, 1, 0, 0, 0],
    output: [0]
	},
	{
    input: [0, 1, 1, 0, 0, 1],
    output: [0]
	},
	{
    input: [0, 1, 1, 0, 1, 0],
    output: [0]
	},
	{
    input: [0, 1, 1, 0, 1, 1],
    output: [0]
	},
	{
    input: [0, 1, 1, 1, 0, 0],
    output: [0]
	},
	{
    input: [0, 1, 1, 1, 0, 1],
    output: [0]
	},
	{
    input: [0, 1, 1, 1, 1, 0],
    output: [0]
	},
	{
    input: [0, 1, 1, 1, 1, 1],
    output: [1]
  },
	////////////////////////////////////////////////////////
	{
    input: [1, 0, 0, 0, 0, 0],
    output: [0]
	},
	{
    input: [1, 0, 0, 0, 0, 1],
    output: [1]
	},
	{
    input: [1, 0, 0, 0, 1, 0],
    output: [0]
	},
	{
    input: [1, 0, 0, 0, 1, 1],
    output: [1]
	},
	{
    input: [1, 0, 0, 1, 0, 0],
    output: [0]
	},
	{
    input: [1, 0, 0, 1, 0, 1],
    output: [1]
	},
	{
    input: [1, 0, 0, 1, 1, 0],
    output: [0]
	},
	{
    input: [1, 0, 0, 1, 1, 1],
    output: [1]
	},
	{
    input: [1, 0, 1, 0, 0, 0],
    output: [0]
	},
	{
    input: [1, 0, 1, 0, 0, 1],
    output: [0]
	},
	{
    input: [1, 0, 1, 0, 1, 0],
    output: [0]
	},
	{
    input: [1, 0, 1, 0, 1, 1],
    output: [0]
	},
	{
    input: [1, 0, 1, 1, 0, 0],
    output: [0]
	},
	{
    input: [1, 0, 1, 1, 0, 1],
    output: [0]
	},
	{
    input: [1, 0, 1, 1, 1, 0],
    output: [0]
	},
	{
    input: [1, 0, 1, 1, 1, 1],
    output: [0]
	},
	{
    input: [1, 1, 0, 0, 0, 0],
    output: [0]
	},
	{
    input: [1, 1, 0, 0, 0, 1],
    output: [0]
	},
	{
    input: [1, 1, 0, 0, 1, 0],
    output: [0]
	},
	{
    input: [1, 1, 0, 0, 1, 1],
    output: [1]
	},
	{
    input: [1, 1, 0, 1, 0, 0],
    output: [0]
	},
	{
    input: [1, 1, 0, 1, 0, 1],
    output: [1]
	},
	{
    input: [1, 1, 0, 1, 1, 0],
    output: [0]
	},
	{
    input: [1, 1, 0, 1, 1, 1],
    output: [1]
	},
	{
    input: [1, 1, 1, 0, 0, 0],
    output: [0]
	},
	{
    input: [1, 1, 1, 0, 0, 1],
    output: [0]
	},
	{
    input: [1, 1, 1, 0, 1, 0],
    output: [0]
	},
	{
    input: [1, 1, 1, 0, 1, 1],
    output: [0]
	},
	{
    input: [1, 1, 1, 1, 0, 0],
    output: [0]
	},
	{
    input: [1, 1, 1, 1, 0, 1],
    output: [0]
	},
	{
    input: [1, 1, 1, 1, 1, 0],
    output: [0]
	},
	{
    input: [1, 1, 1, 1, 1, 1],
    output: [0]
	},
	
];

breedyEater
	.evolve(foodTrainer, trainingSet, options)
	.then(_ => {
		console.log('evolved');
		return new Victim('lizard', .5, .2, .8, .1);
	})
	.then(victim => {
		const decision = breedyEater.activate([
			victim.carnivores,
			victim.scale,
			victim.toxicity,
			victim.predisposition,
			breedyEater.scale,
			breedyEater.starvation
		]);
		if (Math.round(decision[0])) {
			alert(breedyEater.name + ' would eat ' + victim.animal);
		} else {
			alert(breedyEater.name + ' would NOT eat ' + victim.animal);
		}
		return new Victim('rabbit', .1, .3, .05, .9);
	})
	.then(victim => {
		const decision = breedyEater.activate([
			victim.carnivores,
			victim.scale,
			victim.toxicity,
			victim.predisposition,
			breedyEater.scale,
			breedyEater.starvation
		]);
		if (Math.round(decision[0])) {
			alert(breedyEater.name + ' would eat ' + victim.animal);
		} else {
			alert(breedyEater.name + ' would NOT eat ' + victim.animal);
		}
	})
	.catch(_ => (
		console.error('Not evolved')
	));

	console.log('evolving');
	//const lizard = new Victim('lizard', .5, .2, .8, .1);

/*
breedyEater.activate([0, 0, 0])
breedyEater.activate([0, 0, 1])
breedyEater.activate([0, 1, 0])
breedyEater.activate([0, 1, 1])
breedyEater.activate([1, 0, 0])
breedyEater.activate([1, 0, 1])
breedyEater.activate([1, 1, 0])
breedyEater.activate([1, 1, 1])
*/
