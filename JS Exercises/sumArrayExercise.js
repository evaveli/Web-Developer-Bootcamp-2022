//Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}