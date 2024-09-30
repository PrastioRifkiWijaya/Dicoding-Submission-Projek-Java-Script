import { test, expect } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return 0 for non-numeric inputs", () => {
  assert.strictEqual(sum("a", 5), 0);
  assert.strictEqual(sum(5, "b"), 0);
  assert.strictEqual(sum("a", "b"), 0);
});

test("should return 0 for negative inputs", () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test("should return the sum for positive numbers", () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(5, 5), 10);
  assert.strictEqual(sum(100, 200), 300);
});

test("should return 0 if both inputs are missing", () => {
  assert.strictEqual(sum(), 0);
});

test("should return 0 if one input is missing", () => {
  assert.strictEqual(sum(5), 0);
  assert.strictEqual(sum(undefined, 5), 0);
});
