function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}
const num1 = 16;
console.log(isPerfectSquare(num1));  // true

const num2 = 25;
console.log(isPerfectSquare(num2));  // true

const num3 = 10;
console.log(isPerfectSquare(num3));  // false