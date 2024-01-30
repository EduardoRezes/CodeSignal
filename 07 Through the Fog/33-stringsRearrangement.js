/**
 * Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of 
 * the elements in such a way that each consecutive pair of strings differ by exactly one character. 
 * Return true if it's possible, and false if not.
 * Note: You're only rearranging the order of the strings, not the order of the letters within the strings!
 */

function solution(inputArray) {
    function isAdjacent(str1, str2) {
        let diffCount = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                diffCount++;
            }
            if (diffCount > 1) {
                return false; // Mais de uma diferença encontrada, não é adjacente
            }
        }
        return diffCount === 1;
    }

    function permute(array, currentIndex) {
        if (currentIndex === array.length - 1) {
            for (let i = 0; i < array.length - 1; i++) {
                if (!isAdjacent(array[i], array[i + 1])) {
                    return false; // As strings não são adjacentes, a permutação não serve
                }
            }
            return true; // Todas as strings adjacentes, a permutação serve
        }

        for (let i = currentIndex; i < array.length; i++) {
            [array[currentIndex], array[i]] = [array[i], array[currentIndex]];
            if (permute(array.slice(), currentIndex + 1)) {
                return true; // Encontrou uma permutação válida
            }
            [array[currentIndex], array[i]] = [array[i], array[currentIndex]]; // Desfaz a troca
        }

        return false; // Nenhuma permutação válida encontrada
    }

    return permute(inputArray, 0);
}
