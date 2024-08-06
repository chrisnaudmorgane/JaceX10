function calculateDigitSum(n) {
    const numStr = n.toString();
    const digits = numStr.split('').map(Number);
    return digits.reduce((sum, digit) => sum + digit, 0);
}
const number = 12345;
const digitSum = calculateDigitSum(number);
console.log(digitSum);