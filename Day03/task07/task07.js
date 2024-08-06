function findMissingNumber(arr) {
    const arrSum = arr.reduce((sum, num) => sum + num, 0);
    const nSum = (arr.length + 1) * (arr.length + 2) / 2;
    return nSum - arrSum;
}
const array = [1, 2, 4, 5, 6];
console.log(findMissingNumber(array));