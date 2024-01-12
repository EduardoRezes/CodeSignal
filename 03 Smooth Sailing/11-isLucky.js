/**
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered
 * lucky if the sum of the first half of the digits is equal to the sum of the second half.
 * 
 * Given a ticket number n, determine if it's lucky or not.
 * 
 * Example
 * For n = 1230, the output should be solution(n) = true;
 * For n = 239017, the output should be solution(n) = false.
 */

function solution(n) {
    return String(n).split('').map(Number).reduce((a,b)=>a+b)/2 === String(n).split('').slice(0, String(n).length/2).map(Number).reduce((a,b)=>a+b);
}
