/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of 
 * elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 */

function areSimilar(a, b) {
    let swapCount = 0;
    let swapIndices = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            swapCount++;

            if (swapCount > 2) {
                return false;
            }

            swapIndices.push(i);
        }
    }

    return swapCount === 0 || (swapCount === 2 && a[swapIndices[0]] === b[swapIndices[1]] && a[swapIndices[1]] === b[swapIndices[0]]);
}