/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. 
 * Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
 * People can be very tall!
 * 
 * Example
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], 
 * the output should be solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */

function solution(a) {
    const heights = a.filter(height => height !== -1).sort((a, b) => a - b);

    // Mapeia os valores ordenados de volta para o array original
    let j = 0;
    return a.map(value => (value === -1 ? value : heights[j++]));
}
