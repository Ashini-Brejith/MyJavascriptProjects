// Reverse an array using while loop
let words = ['away', 'doctor', 'the', 'keeps', 'day', 'a',
    'apple', 'an'];
let reversedWords = [];
function reversewords(arr) {
    let i = arr.length - 1;
    while (i >= 0) {
        reversedWords.push(arr[i]);
        i--;
    }
    return reversedWords;
}
console.log(reversewords(words));
