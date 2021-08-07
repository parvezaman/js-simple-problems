function animalCount(miles){
    const animalsPerFirst10miles = 10;
    const animalsPerSecond10miles = 50;
    const animalsPerRest1mile = 100;

    if(miles <= 10){
        const count = miles * animalsPerFirst10miles;
        return count;
    }
    else if(miles <= 20){
        const first10MilesAnimals = 10 * animalsPerFirst10miles;
        const restMiles = miles-10;
        const second10MilesAnimals = animalsPerSecond10miles * restMiles;
        return first10MilesAnimals + second10MilesAnimals;
    }
    else if(miles>20){
        const first10MilesAnimals = 10 * animalsPerFirst10miles;
        const second10MilesAnimals = 10 *animalsPerSecond10miles;
        const restMiles = miles -20;
        const restMilesAnimals = restMiles * animalsPerRest1mile;
        return first10MilesAnimals + second10MilesAnimals + restMilesAnimals;
    }
}

const animals = animalCount(20);
console.log(animals);