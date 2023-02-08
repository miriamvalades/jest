const { sum } = require('./app.js');
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
let total = sum(14, 9);
expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("Three euro should be 127.9 yen", function(){
expect(fromDollarToYen(3)).toBe(383.7);
});

test("Three euro should be 0.8 pound", function(){
expect(fromYenToPound(3)).toBe(2.4);
});