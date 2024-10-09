// filtering negative numbers in an array

const numbers = [-5, -4, -9, 5, 3, 9, -8];

let positiveNumbers = [];

function removeNegativeNumbers(arr){
    for(let num = 0; num < arr.length; num++){
        if ( arr[num]>=0){
    
            positiveNumbers.push(arr[num]);
    
        }
    }
    return positiveNumbers;
}
console.log(removeNegativeNumbers(numbers));