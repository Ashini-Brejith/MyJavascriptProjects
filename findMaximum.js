// find the maximum number in an array

const numbers = [1,2,300,4,7,6,5,89];
 
function GetMaximumNumber(num){
    let maximumNumber = num[0];
    for(let i=1; i < num.length; i++){
        if(num[i]>maximumNumber){
            maximumNumber = num[i];
        }    
    }
    return maximumNumber;
}

console.log(GetMaximumNumber(numbers));