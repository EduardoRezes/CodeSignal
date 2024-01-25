/**
 * Check if all digits of the given integer are even.
 * Example
 * For n = 248622, the output should be solution(n) = true;
 * For n = 642386, the output should be solution(n) = false.
 */

function solution(n) {
    return String(n).split('').every(d=>d%2==0);
}
