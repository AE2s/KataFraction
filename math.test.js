const add = (a, b) => a + b;
test("Add 1 + 1 should be 2", () => {
  const one = 1;
  const addition = add(1, 1);
  expect(addition).toBe(2);
});
