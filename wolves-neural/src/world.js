const imgs = ['./pig.png', './chameleon.png', './rabbit.png', './fox.png', './reindeer.png', './bear.png', './sheep.png'];
const animals = [];

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    const wHeight = $(window).height();
    const wWidth = $(window).width();

    canvas.width = wWidth;
    canvas.height = wHeight;

    $(window).on('resize', render);
}

function animateAnimals(animals) {
    setInterval(function() { 
        clearCanvas();
    
        animals.forEach((animal) => {
            animal.xPos += animal.xVelocity;
            animal.yPos -= animal.yVelocity;
            
            if (animal.xPos > canvas.width + animal.scale || animal.yPos > canvas.height + animal.scale) {
                animal.resetParticle(animal);
            } else {
                animal.draw();
            }
        });
    }, 1000/FPS);
}

render();
animals.push(new Victim('chameleon', .5, .3, .8, .1, 1, './chameleon.png'));
animals.push(new Victim('fox', .8, .6, .1, .1, 1, './fox.png'));
animals.push(new Victim('pig', .3, .6, .2, .7, 1, './pig.png'));
animals.push(new Victim('pig', .3, .6, .2, .7, 1, './pig.png'));
animals.push(new Victim('rabbit', .1, .4, .05, .9, 1, './rabbit.png'));
animals.push(new Victim('reindeer', .2, .8, .1, .7, 1, './reindeer.png'));
animals.push(new Victim('bear', .8, .8, .1, .2, 1, './bear.png'));
animals.push(new Victim('sheep', .1, .5, .08, .7, 1, './sheep.png'));

animateAnimals(animals);