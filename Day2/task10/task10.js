function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
const array = [0, 1, false, true, "", "hello", null, undefined, NaN];
const filteredArray = removeFalsyValues(array);
console.log(filteredArray);