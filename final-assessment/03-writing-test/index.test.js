import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("adds -1 + 1 to equal 0", () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test("adds 0 + 0 to equal 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("adds 2.5 + 2.5 to equal 5", () => {
  assert.strictEqual(sum(2.5, 2.5), 5);
});

test("adds -2 + -2 to equal -4", () => {
  assert.strictEqual(sum(-2, -2), -4);
});
