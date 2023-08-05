import Planet from '../src/js/planetAge.js';

describe('Planet', () => {
    const myPlanet = new Planet ();
    const earthAge = 26;

    test('should correctly calculate age on Mercury', () => {
        const expectedAge =earthAge / 0.241;
        expect(myPlanet.calculateAge(earthAge,"Mercury")).toBeCloseTo(expectedAge);
    });
    
})