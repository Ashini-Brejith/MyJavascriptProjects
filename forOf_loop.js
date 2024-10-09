// Remove negative numbers from an array using for of loop
var mixedNumbers = [1, 2, 3, 4, 5, 0, -5, -4, -3, -2, -1];
//let positiveNumbers: number[] = [];
function filterNegativeNumbers(arr) {
    var positiveNumbers = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num >= 0) {
            positiveNumbers.push(num);
        }
    }
    return positiveNumbers;
}
console.log(filterNegativeNumbers(mixedNumbers));
