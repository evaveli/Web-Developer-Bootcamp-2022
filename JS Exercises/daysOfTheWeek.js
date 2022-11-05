//Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

const weekDAY = new Array();
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';
weekDAY[7] = 'Sunday';

function returnDay(x) {
    if (x < 1 || x > 7) {
        return null;
    }
    else {
        return weekDAY[x];
    }
}
