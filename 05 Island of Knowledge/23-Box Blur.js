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
    var im2 = image.slice().map(l=>l.slice());
    for (var i = 1; i < image.length - 1; i++) {
        for (var j = 1; j < image[0].length - 1; j++) {
            var sum = image.slice(i-1,i+2).reduce((acc,l)=>acc + l.slice(j-1,j+2).reduce((a,b)=>a+b),0);
            im2[i][j] = Math.floor(sum/9);
        }
    }
    im2.pop();
    im2.shift();
    im2.forEach(l=>{l.pop(); l.shift()})
    return im2;
}
