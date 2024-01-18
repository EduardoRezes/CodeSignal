/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 */

function solution(inputArray) {
    return Math.max(...inputArray.map((num, index) => Math.abs(num - (inputArray[index - 1] || num))));
}
