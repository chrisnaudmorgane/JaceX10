function calculateFactorialSum(n) {
    if (!Number.isInteger(n) || n < 1)
        return -1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += calculateFactorial(i);
    }
    return sum;
}

function calculateFactorial(num) {
    if (num === 0)
        return 1;
    let factorial = 1;
    for (let i = 1; i <= num; i++)
        factorial *= i;
    return factorial;
}
console.log(calculateFactorialSum(5));