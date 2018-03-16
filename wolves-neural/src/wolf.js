const Network = synaptic.Network;
const Layer = synaptic.Layer;
const Trainer = synaptic.Trainer;

class Wolf extends Network {
	constructor(input, hidden, output) {
		super();
		
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
}

const breedyEater = new Wolf(2, 3, 1);

const foodTrainer = new Trainer(breedyEater);

const options = {
	rate: .3,
	iterations: 20000,
	error: .005,
	shuffle: true,
	log: 1000,
	cost: Trainer.cost.CROSS_ENTROPY
}

const trainingSet = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  },
]

foodTrainer.train(trainingSet, options);