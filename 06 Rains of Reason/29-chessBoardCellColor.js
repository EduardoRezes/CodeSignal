/**
 * Given two cells on the standard chess board, determine whether they have the same color or not.
 * Example
 * For cell1 = "A1" and cell2 = "C3", the output should be solution(cell1, cell2) = true.
 * For cell1 = "A1" and cell2 = "H3", the output should be solution(cell1, cell2) = false.
 */

function solution(cell1, cell2) {
    return cell1.split('').reduce((a,b)=>Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b)%2)  === cell2.split('').reduce((a,b)=> 
    Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b)%2)
}