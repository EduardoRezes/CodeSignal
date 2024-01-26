/**
 * Given two cells on the standard chess board, determine whether they have the same color or not.
 * Example
 * For cell1 = "A1" and cell2 = "C3", the output should be solution(cell1, cell2) = true.
 * For cell1 = "A1" and cell2 = "H3", the output should be solution(cell1, cell2) = false.
 */

function solution(cell1, cell2) {
    const isEven = (cell) => (cell.charCodeAt(0) - 'A'.charCodeAt(0) + parseInt(cell[1])) % 2 === 0;

    return isEven(cell1) === isEven(cell2);
}