// Check if a string is palindrome or not

const word = 'level';

function checkPalindrome(str){
    let palindrome = false;
    let reversedstr = '';
    for(let i=str.length-1; i>=0; i--){
        reversedstr += str[i];
    }
    if(reversedstr==str){
        palindrome = true;
    }
    return palindrome;
}  

console.log(checkPalindrome(word));

        