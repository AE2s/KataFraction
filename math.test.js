import { add } from "./math";
test("Add 1 + 1 should be 2", () => {
  const addition = add(1, 1);
  expect(addition).toBe(2);
});
