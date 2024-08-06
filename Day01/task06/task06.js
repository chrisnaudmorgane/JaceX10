function removeDuplicates(arr) {
    let newarr = new Set(arr);
    let uniqueArray = Array.from(newarr);
    return uniqueArray;
}
module.exports = {
    removeDuplicates
};