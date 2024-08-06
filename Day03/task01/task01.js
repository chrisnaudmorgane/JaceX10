function generateRandomPassword(n) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?"
    var pass = ""
    for (var i = 0; i < n; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
        if  (pass[i] === charAt && pass[i] )
    }
    return pass;
}
const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);