/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.
 */

function solution(inputString) {
    //using new Set to check the occurrence of each character, improving the efficiency of the algorithm.
    const charSet = new Set();
    let oddCount = 0;

    //use a for-of loop to iterate through string characters in a more readable way
    for (const char of inputString) {
        if (charSet.has(char)) {
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    }

    return charSet.size <= 1;
}
