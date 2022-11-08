//Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

let allEvens = function (numArray) {
    return numArray.every(element => {
        return element % 2 === 0;
    });
};