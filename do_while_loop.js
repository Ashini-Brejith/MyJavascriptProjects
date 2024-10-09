// filtering negative numbers in an array
var numberarray = [-12, -56, -76, 98, -45, 1, 2, 4];
var positiveIntegers = [];
function removeNegativeNumbers(arr) {
    //let positiveIntegers: number[] = [];
    var num = 0;
    do {
        if (arr[num] >= 0) {
            positiveIntegers.push(arr[num]);
        }
        num++;
    } while (num < arr.length);
    return positiveIntegers;
}
console.log(removeNegativeNumbers(numberarray));
