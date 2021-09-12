const anagramChecker = require("./anagrams");

it("listen & silent", () => {
    expect(anagramChecker("listen", "silent")).toBe(true);
})

it("rail safety & fairy tales", () => {
    expect(anagramChecker("rail safety", "fairy tales")).toBe(true);
})

it("dormitory & dirty room", () => {
    expect(anagramChecker("dormitory", "dirty room")).toBe(true);
})

it("the eyes & they see", () => {
    expect(anagramChecker("the eyes", "they see")).toBe(true);
})

it("frog & toad", () => {
    expect(anagramChecker("frog", "toad")).toBe(false);
})

it("cat & mouse", () => {
    expect(anagramChecker("cat", "mouse")).toBe(false);
})