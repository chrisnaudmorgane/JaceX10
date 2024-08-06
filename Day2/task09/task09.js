function calculateAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);