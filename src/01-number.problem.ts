// CODE
// npm run e-01 to test

import { expect, it } from "vitest";
import { z } from "zod";

const numberParser = z.number({
  invalid_type_error: "Expected number, received string",
})

export const toString = (num: unknown): string => {
  const parsedNumber = numberParser.parse(num);
  return String(parsedNumber);
};

// TESTS
it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string",
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
