// Reverse an array using while loop
var words = ['away', 'doctor', 'the', 'keeps', 'day', 'a',
    'apple', 'an'];
var reversedWords = [];
function reversewords(arr) {
    var i = arr.length - 1;
    while (i >= 0) {
        reversedWords.push(arr[i]);
        i--;
    }
    return reversedWords;
}
console.log(reversewords(words));
