//Check if the number is divisible by 10

const number = 450;

function checkIFDivisibleByTen(num){
    num = Number(num);
    if(num%10 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkIFDivisibleByTen(number));