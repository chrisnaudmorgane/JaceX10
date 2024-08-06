function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    let a = n * factorial(n - 1);
    return a;
}
module.exports = {
    factorial
}
