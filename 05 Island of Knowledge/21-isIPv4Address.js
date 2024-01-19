/**
 * An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a 
 * computer network that uses the Internet Protocol for communication. 
 * There are two versions of the Internet protocol, and thus two versions of addresses. 
 * One of them is the IPv4 address.
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 */

function solution(inputString) {
    return inputString.split('.').length === 4 &&
       inputString.split('.').every(segment => /^(0|[1-9]\d{0,2})$/.test(segment) && Number(segment) < 256);
}
