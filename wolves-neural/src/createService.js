function createWolf() {
    const name = document.getElementById("wolf-name").value;
    if (!name) {
        return;
    }
    const scale = Number(document.getElementById("wolf-scale").value);
    const starvation = Number(document.getElementById("starvation").value);
    const speed = Number(document.getElementById("wolf-speed").value);
    const newWolf = new Wolf(name, starvation, scale, speed);
    evolveWolves([newWolf]);
    wolves.push(newWolf);
    resetAnimals();
    clearNameFields();
    toggleHide(null, 'create-wolf-container');
}

function createAnimal() {
    const animal = document.getElementById("animal-type").value;
    if (!animal) {
        return;
    }
    const scale = Number(document.getElementById("animal-scale").value);
    const carnivores = Number(document.getElementById("carnivores").value);
    const toxicity = Number(document.getElementById("toxicity").value);
    const predisposition = Number(document.getElementById("predisposition").value);
    const speed = Number(document.getElementById("animal-speed").value);
    victims.push(new Victim(animal, carnivores, scale, toxicity, predisposition, speed));
    resetAnimals();
    clearNameFields();
    toggleHide(null, 'create-animal-container');
}

const addAnimalsWrapperSelector = '.main-wrapper';

const toggleHide = (e, id) => {
    let element;
    if (!id) {
        element = e.target;
    } else {
        element = document.getElementById(id);
    }
    element.classList.toggle("hide");
}

const clearNameFields = _ => {
    document.getElementById("wolf-name").value = '';
    document.getElementById("animal-type").value = '';
}

const showVal = () => {
    document.getElementById("wolf-scale-val").innerHTML = document.getElementById("wolf-scale").value;
    document.getElementById("starvation-val").innerHTML = document.getElementById("starvation").value;
    document.getElementById("wolf-speed-val").innerHTML = document.getElementById("wolf-speed").value;

    document.getElementById("animal-scale-val").innerHTML = document.getElementById("animal-scale").value;
    document.getElementById("carnivores-val").innerHTML = document.getElementById("carnivores").value;
    document.getElementById("toxicity-val").innerHTML = document.getElementById("toxicity").value;
    document.getElementById("predisposition-val").innerHTML = document.getElementById("predisposition").value;
    document.getElementById("animal-speed-val").innerHTML = document.getElementById("animal-speed").value;
}

$(document).ready(_ => {
    showVal();
    $(addAnimalsWrapperSelector).height($(window).height());
});
