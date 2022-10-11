import { expect, it, describe } from "vitest";

describe("initialize test", () => {
  let arg1 = 5;
  let arg2 = 5;

  it("should be return 10", () => {
    const expected = arg1 + arg2;
    expect(expected).to.be.equal(10);
  });
});
