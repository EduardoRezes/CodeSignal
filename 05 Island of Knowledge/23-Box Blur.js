/**
 * Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! 
 * You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its 
 * content.
 * The pixels in the input image are represented as integers. 
 * The algorithm distorts the input image in the following way: 
 * Every pixel x in the output image has a value equal to the average value of the pixel 
 * values from the 3 × 3 square that has its center at x, including x itself. 
 * All the pixels on the border of x are then removed.
 * Return the blurred image as an integer, with the fractions rounded down. 
 * */

function solution(image) {
    const result = [];

    for (let i = 1; i < image.length - 1; i++) {
        const row = [];

        for (let j = 1; j < image[0].length - 1; j++) {
            let sum = 0;

            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    sum += image[k][l];
                }
            }
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }
    return result;
}
/**Refactored the code, removing unnecessary copies, removing excessive splice usage and avoiding the use of multiple reduce calls. */