/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
    sen_arr = sen.split(" ");
    for (i=0; i < sen_arr.length; i++) {
        sen_arr[i] = sen_arr[i].replace(/\W/g, '');
    }
    arr_arr = sen_arr.sort((a,b) => b.length - a.length);
    return arr_arr[0];
}

module.exports = longestWord;
