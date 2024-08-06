function containsOnlyNumbers(str) {
    var number = parseFloat(str);
    if (number.toString() === str)
        return true;
    return false;
}
const str1 = "12345";
console.log(containsOnlyNumbers(str1));
const str2 = "12A45";
console.log(containsOnlyNumbers(str2));