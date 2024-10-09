// Count the number of vowels in a string

const words = 'An apple a day keeps the doctor away';

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(str){

   let count = 0;
   for(let i = 0; i<str.length; i++ ){
    if(vowels.includes(words[i])){
        count +=1;
    }
   }       
    return count;
}

console.log(countVowels(words));