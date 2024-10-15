import Fraction from "./fraction";

test("0 + 0 equal to 0", () => {
  const fractionZero = new Fraction(0, 1);
  const addition = fractionZero.add(fractionZero);
  expect(addition).toBe(0);
});

test("0 + 5 equal to 5", () => {
  const fractionZero = new Fraction(0, 1);
  const secondFraction = new Fraction(5, 1);
  const addition = fractionZero.add(secondFraction);
  expect(addition).toBe(5);
});

test("6 + 5 equal to 11", () => {
  const firstFraction = new Fraction(6, 1);
  const secondFraction = new Fraction(5, 1);
  const addition = firstFraction.add(secondFraction);
  expect(addition).toBe(11);
});

test("2/1 + 4/1 equal to 6", () => {
  const firstFraction = new Fraction(2, 1);
  const secondFraction = new Fraction(4, 1);
  const addition = firstFraction.add(secondFraction);
  expect(addition).toBe(6);
});

test("5/0 + 4/1 should return null", () => {
    const firstFraction = new Fraction(5, 0);
    const secondFraction = new Fraction(4, 1);
    const addition = firstFraction.add(secondFraction);
    expect(addition).toBe(null);
  });
