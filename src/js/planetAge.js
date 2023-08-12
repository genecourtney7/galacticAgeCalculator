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

    yearsSince(date, planetName) {
        if (this.planets.hasOwnProperty(planetName)) {
            const now = new Date();
            const timeDiff = now.getTime() - date.getTime();
            const earthYears = timeDiff / (1000 * 3600 * 24 * 365.25);
            return earthYears / this.planets[planetName];
        } else {
            throw new Error(`Invalid planet name: ${planetName}`);
        }
    }

    yearsUntil(date, planetName) {
        if (this.planets.hasOwnProperty(planetName)) {
            const now = new Date();
            const timeDiff = date.getTime() - now.getTime();
            const earthYears = timeDiff / (1000 * 3600 * 24 * 365.25);
            return earthYears / this.planets[planetName];
        } else {
            throw new Error(`Invalid planet name: ${planetName}`);
        }
    }
}
