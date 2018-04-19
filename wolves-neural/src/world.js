const imgs = [
    './img/pig.png', 
    './img/chameleon.png', 
    './img/rabbit.png', 
    './img/fox.png', 
    './img/reindeer.png', 
    './img/bear.png', 
    './img/sheep.png'
];
const demons = [
    './img/demon.png', 
    './img/medium_demon.png', 
    './img/big_demon.png'
];
const canvasId = 'canvas';
const canvas = document.getElementById(canvasId);
const ctx = canvas.getContext('2d');
const FPS = 60;
const multiplier = 100;
const additionalValue = 80;
const Trainer = synaptic.Trainer;
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
const victims = [];
const wolves = [];

let animaInterval = null;
let animals = [];

const clearCanvas = _ => ctx.clearRect(0, 0, canvas.width, canvas.height);

const clearTimeouts = timers => {
    timers.forEach(timer => clearTimeout(timer));
}

const eatingSound = src => {
    const music = new Audio();
    music.autoplay = false;
    music.src = src;
    music.play();
}

const render = canvas => {
    const wHeight = $(window).height();
    const wWidth = $(window).width();

    canvas.width = wWidth;
    canvas.height = wHeight;

    $(window).on('resize', render);
}

const animateAnimals = animals => {
    animaInterval = setInterval(_ => {
        clearCanvas();
    
        animals.forEach((animal) => {
            animal.xPos += animal.xVelocity;
            animal.yPos += animal.yVelocity;

            if (animal.xPos >= canvas.width - (additionalValue + animal.scale * multiplier)/5) {
                animal.xPos = 0 - (additionalValue + animal.scale * multiplier) + (additionalValue + animal.scale * multiplier)/5;
                animal.yPos = getRandom(0, canvas.height);
            } else if (animal.yPos >= canvas.height - (additionalValue + animal.scale * multiplier)/5) {
                animal.xPos = getRandom(0, canvas.width);
                animal.yPos = 0 - (additionalValue + animal.scale * multiplier) + (additionalValue + animal.scale * multiplier)/5;
            }
            else if (animal.yPos < 0 - (additionalValue + animal.scale * multiplier)) {
                animal.xPos = getRandom(0, canvas.width);
                animal.yPos = canvas.height - (additionalValue + animal.scale * multiplier) + (additionalValue + animal.scale * multiplier)/4;
            }
            else if (animal.xPos < 0 - (additionalValue + animal.scale * multiplier)) {
                animal.xPos = canvas.width - (additionalValue + animal.scale * multiplier) + (additionalValue + animal.scale * multiplier)/4;
                animal.yPos = getRandom(0, canvas.height);
            }
            draw(animal);
        });
    }, 1000/FPS);
}

const draw = ({ pic, xPos, yPos, scale }) => {
    ctx.drawImage(pic, xPos, yPos, additionalValue + scale * multiplier, additionalValue + scale * multiplier);
}

const resetAnimals = _ => {
    clearInterval(animaInterval);
    animals = victims.concat(wolves);
    animateAnimals(animals);
}

const checkCollision = (victim, wolf, index) => {
    const line = Math.sqrt(Math.pow((wolf.xPos - victim.xPos), 2) + Math.pow((wolf.yPos - victim.yPos), 2));
    if (line <= (additionalValue + wolf.scale * multiplier)/2 + (additionalValue + victim.scale * multiplier)/2) {
        const decision = wolf.activate([
            victim.carnivores,
            victim.scale,
            victim.toxicity,
            victim.predisposition,
            wolf.scale,
            wolf.starvation
        ]);
        if (Math.round(decision[0])) {
            console.log(`${wolf.name} would eat ${victim.animal}`);
            victims.splice(index, 1);
            resetAnimals();
            eatingSound('./sounds/eating.mp3');
            wolf.resetStarvation();
            wolf.resetVelocity();
        } else {
            console.log(`${wolf.name} would NOT eat ${victim.animal}`);
        }
    } else {
        //STARVE :(
    }
}

const hunt = (victims, wolves) => {
    wolves.forEach(wolf => {
        wolf.foodPreferences = victims.filter(victim => wolf.wouldEat(victim));
        if (wolf.foodPreferences[0]) {
            let minLine = Math.sqrt(Math.pow((wolf.xPos - wolf.foodPreferences[0].xPos), 2) + Math.pow((wolf.yPos - wolf.foodPreferences[0].yPos), 2));;
            let minIndex = 0;
            wolf.foodPreferences.forEach((victim, index) => {
                let newLine = Math.sqrt(Math.pow((wolf.xPos - victim.xPos), 2) + Math.pow((wolf.yPos - victim.yPos), 2));
                if (newLine < minLine) {
                    minLine = newLine;
                    minIndex = index;
                }
            });
            wolf.resetVelocity();
            wolf.huntTarget = wolf.foodPreferences[minIndex];
            wolf.hunting();
        }
    });
}

const evolveWolves = wolves => {
    wolves.forEach((wolf, index, wolves) => {
        const foodTrainer = new Trainer(wolf);
        wolf
            .evolve(foodTrainer, trainingSet, options, hunt)
            .then(hunt => {
                console.log('evolved');
                wolf.hungerTimer = setInterval(callback => {
                    wolf.increaseStarvation(wolfDeath);
                    callback(victims, wolves);
                }, 1000, hunt);
                return new Victim('lizard', .5, .2, .8, .1, 1, './img/chameleon.png');
            })
            .then(victim => {
                const decision = wolf.activate([
                    victim.carnivores,
                    victim.scale,
                    victim.toxicity,
                    victim.predisposition,
                    wolf.scale,
                    wolf.starvation
                ]);
                if (Math.round(decision[0])) {
                    console.log(`${wolf.name} would eat ${victim.animal}`);
                } else {
                    console.log(`${wolf.name} would NOT eat ${victim.animal}`);
                }
                return new Victim('rabbit', .1, .3, .05, .9, 1, './img/rabbit.png');
            })
            .then(victim => {
                const decision = wolf.activate([
                    victim.carnivores,
                    victim.scale,
                    victim.toxicity,
                    victim.predisposition,
                    wolf.scale,
                    wolf.starvation
                ]);
                if (Math.round(decision[0])) {
                    console.log(`${wolf.name} would eat ${victim.animal}`);
                } else {
                    console.log(`${wolf.name} would NOT eat ${victim.animal}`);
                }
            })
            .catch(err => {
                console.log(err);
                console.error('Not evolved');
            });
        console.log('evolving');
    });
}

const checkTimer = setInterval(victims => {
    wolves.forEach(wolf => {
        victims.forEach((victim, index) => {
            checkCollision(victim, wolf, index);
        });
    });
}, 100, victims);

const wolfDeath = wolf => {
    const wolfToRemove = wolves.findIndex(w => w === wolf);
    wolves.splice(wolfToRemove, 1);
    resetAnimals();
    clearTimeouts([wolf.hungerTimer, wolf.starveTimer]);
    eatingSound('./sounds/greetings.mp3');
    console.log(`${wolf.name} is dead`);
}

$(document).ready(_ => {
    render(canvas);
    victims.push(new Victim('chameleon', .5, .3, .8, .1, 2, './img/chameleon.png'));
    victims.push(new Victim('fox', .8, .6, .1, .1, 2, './img/fox.png'));
    victims.push(new Victim('pig', .3, .6, .2, .7, 2, './img/pig.png'));
    victims.push(new Victim('pig', .3, .6, .2, .7, 2, './img/pig.png'));
    victims.push(new Victim('rabbit', .1, .4, .05, .9, 2, './img/rabbit.png'));
    victims.push(new Victim('reindeer', .2, .8, .1, .7, 2, './img/reindeer.png'));
    victims.push(new Victim('bear', .8, .8, .1, .2, 2, './img/bear.png'));
    victims.push(new Victim('sheep', .1, .5, .08, .7, 3, './img/sheep.png'));

    wolves.push(new Wolf('Breedy', .5, .3, 4));
    evolveWolves(wolves);
    animals = victims.concat(wolves);
    animateAnimals(animals);
});