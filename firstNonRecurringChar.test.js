/*
The Prompt
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return "_”.

Examples:
For s = "abacabad", the output should be
firstNonRepeatingCharacter(s) = "c”.

There are 2 non-repeating characters in the string: "c” and "d”. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNonRepeatingCharacter(s) = "_”.

There are no characters in this string that do not repeat.
*/

const findFirst = require("./firstNonRecurringChar");

it("abafabad", () => {
    expect(findFirst("abafabad")).toBe("f");
})

it("abacabaabacaba", () => {
    expect(findFirst("abacabaabacaba")).toBe(null);
})

it("f8rjtj5lhoh4btkhf", () => {
    expect(findFirst("f8rjtj5lhoh4btkhf")).toBe("8");
})

it("george", () => {
    expect(findFirst("george")).toBe("o");
})

it("", () => {
    expect(findFirst("")).toBe(null);
})