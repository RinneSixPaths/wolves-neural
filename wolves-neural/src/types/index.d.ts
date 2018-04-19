declare class Victim {
    constructor(
        animal: string,
        carnivores: number, 
        scale: number,
        toxicity: number,
        predisposition: number,
        speed: number,
        picSrc: string
    );
}

interface ITrainingBlob {
    input: number[];
    output: number[];
}

declare class Wolf {
    constructor(
		name: string, 
		hunger: number, 
		scale: number,
        speed: number
    );

    createBrain(
        input: number,
        hidden: number,
        output: number
    ): void;
    
    evolve<T>(
        trainer: any,
        trainingSet: ITrainingBlob[],
        options: any,
        callback: (victims: Victim[], wolves: Wolf[]) => T
    ): Promise<() => T>;

    increaseStarvation(callback: () => {}): void;

	resetStarvation(): void;

	hunting(): void;

	wouldEat(victim: Victim): boolean;

	resetVelocity(): void;
}

declare function getRandom(min: number, max: number): number;