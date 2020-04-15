/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    var strArray = str.split(" ");
    var i;
    for (i in strArray){
        firstLetter = strArray[i][0];
        restOfWord = strArray[i].slice(1);
        firstLetter = firstLetter.toUpperCase();
        strArray[i] = firstLetter.concat("", restOfWord);
    }
    var strReturn = strArray.join(" ");
    return strReturn;
}

module.exports = capitalize;
