import Planet from '../src/js/planetAge.js';

describe('Planet', () => {
    const myPlanet = new Planet ();
    const earthAge = 26;

    test('should correctly calculate age on Mercury', () => {
        const expectedAge = earthAge / 0.241;
        expect(myPlanet.calculateAge(earthAge,"Mercury")).toBeCloseTo(expectedAge);
    });
    
    test('should correctly calculate age on Venus', () => {
        const expectedAge = earthAge / 0.615;
        expect(myPlanet.calculateAge(earthAge,"Venus")).toBeCloseTo(expectedAge);
    });

    test('should correctly calculate age on Earth', () => {
        expect(myPlanet.calculateAge(earthAge, "Earth")).toBe(earthAge);
    });

    test('should correctly calculate age on Mars', () => {
        const expectedAge = earthAge / 1.881;
        expect(myPlanet.calculateAge(earthAge,"Mars")).toBeCloseTo(expectedAge);
    });

    test('should correctly calculate age on Jupiter', () => {
        const expectedAge = earthAge / 11.86;
        expect(myPlanet.calculateAge(earthAge,"Jupiter")).toBeCloseTo(expectedAge);
    });

    test('should correctly calculate age on Saturn', () => {
        const expectedAge = earthAge / 29.46;
        expect(myPlanet.calculateAge(earthAge,"Saturn")).toBeCloseTo(expectedAge);
    });

    test('should correctly calculate age on Uranus', () => {
        const expectedAge = earthAge / 84.07;
        expect(myPlanet.calculateAge(earthAge,"Uranus")).toBeCloseTo(expectedAge);
    });
})