const add = (a, b, c, d) => a + c;
test("0 + 0 equal to 0", () => {
  expect(add(0, 1, 0, 1)).toBe(0);
});

test("0 + 5 equal to 5", () => {
  expect(add(0, 1, 5, 1)).toBe(5);
});

test("6 + 5 equal to 11", () => {
  expect(add(6, 1, 5, 1)).toBe(11);
});

test("2/1 + 4/1 equal to 6", () => {
  expect(add(2, 1, 4, 1)).toBe(6);
});
