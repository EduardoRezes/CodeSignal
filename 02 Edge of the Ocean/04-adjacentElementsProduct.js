/*Given an array of integers, find the pair of adjacent elements that has the largest product and 
return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.*/

function solution(inputArray) {
    if (inputArray.length < 2){
        console.log("The array must be 2 elements");
        return;
    }

    let produtoMaximo = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const produtoAtual = inputArray[i] * inputArray[i + 1];
        if (produtoAtual > produtoMaximo) {
            produtoMaximo = produtoAtual;
        }
    }

    return produtoMaximo;
}