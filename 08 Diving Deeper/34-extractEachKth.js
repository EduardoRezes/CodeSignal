/**
 * Given array of integers, remove each kth element from it. 
 * Example
 * For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
 * solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
 */

function solution(inputArray, k) {
    /**
     * usamos _ como um espaço reservado para o parâmetro que não estamos usando, indicando que estamos 
     * cientes do valor, mas não o usaremos. Isso é uma convenção em JavaScript quando você não precisa do 
     * valor de um parâmetro em uma função de retorno de chamada.
     */
    return inputArray.filter((_, i) => (i + 1) % k !== 0);
}
