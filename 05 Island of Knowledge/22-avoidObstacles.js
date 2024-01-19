/**
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right. 
 * You are allowed only to make jumps of the same length represented by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 */

function solution(inputArray) {
    var max =Math.max(...inputArray);
    for (var i = 1; i< max; i++) {
        var divs = inputArray.some(x=>x%i==0)
        if(!divs) return i;
    }
    return max +1;
}