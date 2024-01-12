/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input
 * string.
 * Input strings will always be well-formed with matching ()s.
 */

function solution(inputString) {
    const stack = [];
    let result = "";

    for (const char of inputString) {
        if (char === '(') {
            // Push the current result and reset for the characters inside parentheses
            stack.push(result);
            result = "";
        } else if (char === ')') {
            // Reverse the characters inside parentheses and append to the previous result
            result = stack.pop() + result.split('').reverse().join('');
        } else {
            // Append non-parentheses characters to the result
            result += char;
        }
    }
    return result;
}
