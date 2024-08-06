function isValidPassword(password) {
    const isLongEnough = password.length > 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    return isLongEnough && hasLowerCase && hasUpperCase && hasDigit;
}
const password = "MyPassword123!";
const isValid = isValidPassword(password);
console.log(isValid);