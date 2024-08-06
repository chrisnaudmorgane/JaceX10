function isValidEmail(email) {
    const regex = new RegExp('@');
    const global = regex.test(email);
    return global;
}
const email1 = "example@example.com";
console.log(isValidEmail(email1));  // true

const email2 = "invalid_email.com";
console.log(isValidEmail(email2));  // false