/**
 * You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
 * Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
 */

function solution(inputArray) {
    var max = inputArray[0];
    var moves = 0;
    for(var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= max) {
            moves += max - inputArray[i] + 1;
            inputArray[i] = max + 1;
        }
        max = inputArray[i]
    }
    return moves
}