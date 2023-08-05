export default class Planet {
        constructor() {
            this.planets = {
                "Mercury": 0.241,
                "Venus": 0.615,
                "Earth": 1,
                "Mars": 1.881,
                "Jupiter": 11.86,
                "Saturn": 29.46,
                "Uranus": 84.07,
                "Neptune": 164.8,
            };
        }
    
        calculateAge(earthAge, planetName) {
            if (this.planets.hasOwnProperty(planetName)) {
                return earthAge / this.planets[planetName];
            } else {
                throw new Error(`Invalid planet name: ${planetName}`);
            }
        }
    }
    
    const age = 26;
    const myPlanet = new Planet();
    console.log(`Your age on Mercury is ${myPlanet.calculateAge(age, "Mercury")} years`);
    console.log(`Your age on Venus is ${myPlanet.calculateAge(age, "Venus")} years`);
    console.log(`Your age on Earth is ${myPlanet.calculateAge(age, "Earth")} years`);
    console.log(`Your age on Mars is ${myPlanet.calculateAge(age, "Mars")} years`);
    console.log(`Your age on Jupiter is ${myPlanet.calculateAge(age, "Jupiter")} years`);
    console.log(`Your age on Saturn is ${myPlanet.calculateAge(age, "Saturn")} years`);
    console.log(`Your age on Uranus is ${myPlanet.calculateAge(age, "Uranus")} years`);
    console.log(`Your age on Neptune is ${myPlanet.calculateAge(age, "Neptune")} years`);
    