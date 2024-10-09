// function to reverse an array


//let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let array2 = [];

function reversearray(arr){
    for(let i = arr.length-1; i>=0; i--){
        array2.push(arr[i]);
}   ``
    return (array2);
}
let reversed = reversearray( ['a', 'b', 'c', 'd', 'e', 'f', 'g']);
console.log(reversed);
