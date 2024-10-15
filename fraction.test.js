import Fraction from "./fraction";

test("0 + 0 equal to 0", () => {
  const fractionZero = new Fraction(0, 1);
  const addition = fractionZero.add(fractionZero);
  expect(addition.nominator).toBe(0);
});

test("0 + 5 equal to 5", () => {
  const fractionZero = new Fraction(0, 1);
  const secondFraction = new Fraction(5, 1);
  const addition = fractionZero.add(secondFraction);
  expect(addition.nominator).toBe(5);
});

test("6 + 5 equal to 11", () => {
  const firstFraction = new Fraction(6, 1);
  const secondFraction = new Fraction(5, 1);
  const addition = firstFraction.add(secondFraction);
  expect(addition.nominator).toBe(11);
});

test("2/1 + 4/1 equal to 6", () => {
  const firstFraction = new Fraction(2, 1);
  const secondFraction = new Fraction(4, 1);
  const addition = firstFraction.add(secondFraction);
  expect(addition.nominator).toBe(6);
});

test("5/0 + 4/1 should return null", () => {
  const firstFraction = new Fraction(5, 0);
  const secondFraction = new Fraction(4, 1);
  const addition = firstFraction.add(secondFraction);
  expect(addition).toBe(null);
});

test("4/1 + 5/0 should return null", () => {
  const firstFraction = new Fraction(5, 0);
  const secondFraction = new Fraction(4, 1);
  const addition = secondFraction.add(firstFraction);
  expect(addition).toBe(null);
});

test("1/2 + 1/2 equal to 2/2", () => {
  const firstFraction = new Fraction(1, 2);
  const secondFraction = new Fraction(1, 2);
  const addition = firstFraction.add(secondFraction);
  const expected = new Fraction(4, 2);
  expect(addition.nominator).toBe(expected.nominator);
  expect(addition.denominator).toBe(expected.denominator);
});

test("1/3 + 1/2 equal to 5/6", () => {
    const firstFraction = new Fraction(1, 3);
    const secondFraction = new Fraction(1, 2);
    const addition = firstFraction.add(secondFraction);
    const expected = new Fraction(5, 6);
    expect(addition.nominator).toBe(expected.nominator);
    expect(addition.denominator).toBe(expected.denominator);
  });
