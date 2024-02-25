const shuffle = require("../src/shuffle");

let arr = [1, 2, 3, 4]

const sameItemsCheck = (arr1, arr2) => {
  if(arr1.length != arr2.length) return false
  return arr1.every(v => arr2.includes(v));
}
describe("shuffle should...", () => {
  test("return an array", () => {
    expect(Array.isArray(shuffle(arr))).toBeTruthy()
  })
  test("return an array with same length", () => {
    expect(shuffle(arr)).toHaveLength(arr.length)
  })
  test("return an array with all the same items are in it", () => {
    expect(sameItemsCheck(arr, shuffle(arr))).toBeTruthy()
  })
});
