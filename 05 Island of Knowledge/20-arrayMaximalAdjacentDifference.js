/**
 * Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
 */

function solution(inputArray) {
    //return Math.max(...inputArray.map((num, index) => Math.abs(num - (inputArray[index - 1] || num))));
    var max = Math.abs(inputArray[1] - inputArray[0]);
    for(var i=2; i < inputArray.length; i++) {
        if(Math.abs(inputArray[i] - inputArray[i-1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i-1]);
        }
    }
    return max
}
