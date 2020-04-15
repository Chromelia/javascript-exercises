//@ts-check

/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    var aTest = stringA.toLowerCase();
    var bTest = stringB.toLowerCase();
    aTest = aTest.replace(/[^A-z]/g, "");
    bTest = bTest.replace(/[^A-z]/g, "");
    if (aTest.length != bTest.length){
        return false;
    }
    else{
        var char = "";
        for (char in aTest){
            if (!bTest.includes(aTest.charAt(char))){
                return false;
            }
        }
        return true;
    }
}

module.exports = anagrams;
