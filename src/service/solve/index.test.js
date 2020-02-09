const service = require('./');

test('Test with many numbers - Sum can reach result desired', () => {
    const numberList = [1, 2, 3]
    const resultDesired = 5

    const functionResult = service.solve(numberList, resultDesired)

    expect(functionResult).toBe(true);
});

test('Test with many numbers - Sum cannot reach result desired', () => {
    const numberList = [1, 2]
    const resultDesired = 5

    const functionResult = service.solve(numberList, resultDesired)
    
    expect(functionResult).toBe(false);
});

test('Test with one number - Sum cannot reach result desired', () => {
    const numberList = [1]
    const resultDesired = 5

    const functionResult = service.solve(numberList, resultDesired)
    
    expect(functionResult).toBe(false);
});

test('Test with no numbers - Sum cannot reach result desired', () => {
    const numberList = [0]
    const resultDesired = 5

    const functionResult = service.solve(numberList, resultDesired)
    
    expect(functionResult).toBe(false);
});