const add = (a, b) => a + b;
test("0 + 0 equal to 0", () => {
  expect(add(0, 0)).toBe(0);
});

test("0 + 5 equal to 5", () => {
  expect(add(0, 5)).toBe(5);
});
