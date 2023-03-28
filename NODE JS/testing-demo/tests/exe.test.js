const exe = require("../exercise1");

describe("fizzBuzz", () => {
  it("Input Should be a Number", () => {
    let values = [undefined, false, null, NaN, ""];

    values.forEach((value) => {
      expect(() => lib.registerUser(value)).toThrow();
    });
  });

  it("Number should be devisile by 3 and 5", () => {
    const result = exe.fizzBuzz(150);
    expect(result).toBe("FizzBuzz");
  });
  it("Number should be devisile by only 3", () => {
    const result = exe.fizzBuzz(6);
    expect(result).toBe("Fizz");
  });
  it("Number should be devisile by only 5", () => {
    const result = exe.fizzBuzz(10);
    expect(result).toBe("Buzz");
  });
});
