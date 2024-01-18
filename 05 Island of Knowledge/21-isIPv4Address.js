/**
 * An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a 
 * computer network that uses the Internet Protocol for communication. 
 * There are two versions of the Internet protocol, and thus two versions of addresses. 
 * One of them is the IPv4 address.
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 */

function solution(inputString) {
    var arr = inputString.split('.');
    return arr.length === 4 && arr.reduce((acc,el) => acc && /^\d{1,3}$/.test(el) && Number(el) < 256 ,true);
}
