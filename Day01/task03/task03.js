function findLargestElement(arr) {
    if (arr.length == 0)
        return null;
    let number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > number)
            number = arr[i];
    }
    return number;
}
module.exports = {
    findLargestElement
}
