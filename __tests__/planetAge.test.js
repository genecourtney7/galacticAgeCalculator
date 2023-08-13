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

    test('should correctly calculate age on Neptune', () => {
        const expectedAge = earthAge / 164.8;
        expect(myPlanet.calculateAge(earthAge,"Neptune")).toBeCloseTo(expectedAge);
    });

    test('should throw an error for an invalid planet name', () => {
        expect(() => myPlanet.calculateAge(earthAge, 'InvalidPlanet')).toThrowError('Invalid planet name: InvalidPlanet');
    });

    test('should return the number of years since a past date on Mercury', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Mercury')).toBeGreaterThan(95);
    });

    test('should return the number of years since a past date on Venus', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Venus')).toBeGreaterThan(37);
    });

    test('should return the number of years since a past date on Earth', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Earth')).toBeGreaterThan(21);
    });
    
    test('should return the number of years since a past date on Mars', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Mars')).toBeGreaterThan(11);
    });

    test('should return the number of years since a past date on Jupiter', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Jupiter')).toBeGreaterThan(1);
    });

    test('should return the number of years since a past date on Saturn', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Saturn')).toBeLessThan(1);
    });

    test('should return the number of years since a past date on Uranus', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Uranus')).toBeLessThan(1);
    });

    test('should return the number of years since a past date on Neptune', () => {
        const pastDate = new Date('2000-01-01');
        expect(myPlanet.yearsSince(pastDate, 'Neptune')).toBeLessThan(1);
    });

    test('should throw an error for an invalid planet name', () => {
        const pastDate = new Date('2000-01-01');
        expect(() => myPlanet.yearsSince(pastDate, 'InvalidPlanet')).toThrowError('Invalid planet name: InvalidPlanet');
    });

    test('should return the number of years until a future date on Mercury', () => {
        const futureDate = new Date('2050-01-01');
        expect(myPlanet.yearsUntil(futureDate, 'Mercury')).toBeGreaterThan(107);
    });

    test('should return the number of years until a future date on Venus', () => {
        const futureDate = new Date('2050-01-01');
        expect(myPlanet.yearsUntil(futureDate, 'Venus')).toBeGreaterThan(41);
    });

    test('should return the number of years until a future date on Earth', () => {
        const futureDate = new Date('2050-01-01');
        expect(myPlanet.yearsUntil(futureDate, 'Earth')).toBeGreaterThan(26);
    });

    test('should return the number of years until a future date on Mars', () => {
        const futureDate = new Date('2050-01-01');
        expect(myPlanet.yearsUntil(futureDate, 'Mars')).toBeGreaterThan(14);
    });

    test('should return the number of years until a future date on Jupiter', () => {
        const futureDate = new Date('2050-01-01');
        expect(myPlanet.yearsUntil(futureDate, 'Jupiter')).toBeGreaterThan(1);
    });
})

