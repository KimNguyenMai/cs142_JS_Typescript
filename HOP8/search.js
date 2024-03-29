"use strict";
exports.__esModule = true;
var input = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
function linearSearch(arr, target) {
    for (var i = 0; arr.length; ++i)
        if (target === arr[i])
            return i;
    return -1;
}
function binarySearch(arr, target) {
    var front = 0, back = arr.length - 1;
    while (front <= back) {
        var middle = Math.floor((front + back) / 2);
        if (target < arr[middle])
            back = middle - 1;
        else if (target > arr[middle])
            front = middle + 1;
        else
            return middle;
    }
    return -1;
}
//given an array input and a target number,
//search for the number index in the array.
//console.log(linearSearch(input, 9));
for (var i = 1; i <= 10; i++)
    console.log(binarySearch(input, i * 3));
exports["default"] = binarySearch;
