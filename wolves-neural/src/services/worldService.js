export const getRandom = (min, max) => Math.random() * (max - min) + min;

export const eatingSound = src => {
    const music = new Audio();
    music.autoplay = false;
    music.src = src;
    music.play();
}
