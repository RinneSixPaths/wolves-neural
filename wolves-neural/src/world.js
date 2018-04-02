const imgs = ['./pig.png', './chameleon.png', './rabbit.png', './fox.png', './reindeer.png', './bear.png', './sheep.png'];
const demons = ['./demon.png', './medium_demon.png', './big_demon.png'];
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const FPS = 60;
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

const getRandom = (min, max) => Math.random() * (max - min) + min;

const eatingSound = src => {
    const music = new Audio();
    music.autoplay = false;
    music.src = src;
    music.play();
}

const render = _ => {
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
            animal.yPos -= animal.yVelocity;
            
            if (
                animal.xPos >= canvas.width + animal.scale 
                || animal.yPos >= canvas.height + animal.scale
                || animal.yPos < -(animal.scale)
            ) {
                resetPic(animal);
            } else {
                draw(animal.pic, animal.xPos, animal.yPos, animal.scale);
            }
        });
    }, 1000/FPS);
}

const draw = (pic, xPos, yPos, scale) => {
    ctx.drawImage(pic, xPos, yPos, 190 + scale * 10, 190 + scale * 10);
}

const resetPic = animal => {
  const random = getRandom(0, 1);

  if (random > .5) {
    animal.xPos = 0;
    animal.yPos = getRandom(0, canvas.height);
  } else {
    animal.xPos = getRandom(0, canvas.width);
    animal.yPos = canvas.height;   
  }
  draw(animal.pic, animal.xPos, animal.yPos, animal.scale);
}

const checkCollision = (victim, wolf, index) => {
    const line = Math.sqrt(Math.pow((wolf.xPos - victim.xPos), 2) + Math.pow((wolf.yPos - victim.yPos), 2));
    if (line <= (190 + wolf.scale * 10)/2 + (190 + victim.scale * 10)/2) {
        const decision = wolf.activate([
            victim.carnivores,
            victim.scale,
            victim.toxicity,
            victim.predisposition,
            wolf.scale,
            wolf.starvation
        ]);
        if (Math.round(decision[0])) {
            console.log(wolf.name + ' would eat ' + victim.animal);
            victims.splice(index, 1);
            clearInterval(animaInterval);
            animals = victims.concat(wolves);
            animateAnimals(animals);
            eatingSound('./eating.mp3');
            wolf.resetStarvation();
            wolf.resetVelocity();
        } else {
            console.log(wolf.name + ' would NOT eat ' + victim.animal);
        }
    } else {
        //STARVE :(
    }
}

const evolveWolves = wolves => {
    wolves.forEach(wolf => {
        const foodTrainer = new Trainer(wolf);
        wolf
            .evolve(foodTrainer, trainingSet, options)
            .then(_ => {
                console.log('evolved');
                const hungerTimer = setInterval(_ => {
                    wolf.increaseStarvation();
                }, 1000);
                return new Victim('lizard', .5, .2, .8, .1, 1, './chameleon.png');
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
                    console.log(wolf.name + ' would eat ' + victim.animal);
                } else {
                    console.log(wolf.name + ' would NOT eat ' + victim.animal);
                }
                return new Victim('rabbit', .1, .3, .05, .9, 1, './rabbit.png');
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
                    console.log(wolf.name + ' would eat ' + victim.animal);
                } else {
                    console.log(wolf.name + ' would NOT eat ' + victim.animal);
                }
            })
            .catch(err => {
                console.log(err);
                console.error('Not evolved');
            });
        console.log('evolving');
    });
}

const wouldEat = (victim, wolf) => {
    const decision = wolf.activate([
        victim.carnivores,
        victim.scale,
        victim.toxicity,
        victim.predisposition,
        wolf.scale,
        wolf.starvation
    ]);
    if (Math.round(decision[0])) {
        return true;
    } else {
        return false;
    }
}

render();
victims.push(new Victim('chameleon', .5, .3, .8, .1, 1, './chameleon.png'));
victims.push(new Victim('fox', .8, .6, .1, .1, 1, './fox.png'));
victims.push(new Victim('pig', .3, .6, .2, .7, 1, './pig.png'));
victims.push(new Victim('pig', .3, .6, .2, .7, 1, './pig.png'));
victims.push(new Victim('rabbit', .1, .4, .05, .9, 1, './rabbit.png'));
victims.push(new Victim('reindeer', .2, .8, .1, .7, 1, './reindeer.png'));
victims.push(new Victim('bear', .8, .8, .1, .2, 1, './bear.png'));
victims.push(new Victim('sheep', .1, .5, .08, .7, 1, './sheep.png'));
/*Blank victim adds a demon*/
//victims.push(new Victim());

wolves.push(new Wolf('Breedy', .5, .1));
//wolves.push(new Wolf('Hungryd', 0, .9));
evolveWolves(wolves);
animals = victims.concat(wolves);
animateAnimals(animals);

const check = setInterval(victims => {
    wolves.forEach(wolf => {
        victims.forEach((victim, index) => {
            checkCollision(victim, wolf, index);
        });
    });
}, 100, victims);

const hunt = setInterval(victims => {
    wolves.forEach(wolf => {
        wolf.foodPreferences = victims.filter(victim => wouldEat(victim, wolf));
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
            wolf.hunting(wolf.foodPreferences[minIndex]);
        }
    });
}, 1000, victims);