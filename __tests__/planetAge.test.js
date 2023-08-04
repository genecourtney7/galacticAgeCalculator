import Planet from '../src/js/planetAge'

describe('Planet', () => {
    
    test('It should correctly calculate age on Earth', () => {
        const earth = new Planet ("Earth", 1);
        const earthAge = 25;
        
        expect(earth.calculateAge(earthAge)).toBe(earthAge);
    });
});