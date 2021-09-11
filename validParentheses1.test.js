const validParenthesis = require("./validParentheses1");

it("Example 1", () => {
    expect(validParenthesis("()")).toBe(true);
})

it("Example 2", () => {
    expect(validParenthesis("()[]{}")).toBe(true);
})

it("Example 3", () => {
    expect(validParenthesis("(]")).toBe(false);
})

it("Example 4", () => {
    expect(validParenthesis("([)]")).toBe(false);
})

it("Example 5", () => {
    expect(validParenthesis("{[]}")).toBe(true);
})