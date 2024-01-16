/* Given a rectangular matrix of characters, add a border of asterisks(*) to it. */

function addBorder(picture) {
    picture = picture.map(f=>'*'.concat(f,'*'))
    var l = picture[0].length;
    picture.unshift(Array(l).fill('*').join(''));
    picture.push(Array(l).fill('*').join(''))
    return picture;
}