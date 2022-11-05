//Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:
//capitalize('eggplant') // "Eggplant"

function capitalize(str){
    let string=str.slice(1); //copy a portion of array from index 1 to the end;
     return str.charAt(0).toUpperCase()+string;
}