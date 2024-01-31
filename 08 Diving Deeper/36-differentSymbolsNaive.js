/**
 * Given a string, find the number of different characters in it.
 * Example
 * For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
 * There are 3 different characters a, b and c.
 */

function differentSymbolsNaive(s) {
    //Utilizando função Set para armazenar os caracteres únicos.
    return new Set(s).size;
}