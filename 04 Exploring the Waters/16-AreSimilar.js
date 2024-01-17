/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of 
 * elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 */

function areSimilar(a, b) {
    var sw = 0;
    var t;
    var ar;
    var br;
    var ret = true;
    for (var i = 0; i < a.length; i++) {
        if(a[i] === b[i])
            continue;
        if(sw === 0){
            sw++;
            ar = a[i];
            br = b[i];
            ret = false;
        }
        else {
            if (ar !== b[i] || br !== a[i])
                sw++;
            else {
                ret = true;
                sw++;
            }
        }
    }
    
    return ret && (sw === 0 || sw === 2);       
}