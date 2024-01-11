/*Given an array of strings, return another array containing all of its longest strings.*/

function solution(inputArray) {
    //calculates the maximum length of strings in the array.
    const maxLength = Math.max(...inputArray.map(str => str.length));
    //filters strings that have a length equal to the maximum length.
    return inputArray.filter(str => str.length === maxLength);
}
