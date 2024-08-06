function isPalindrome(str) {
    let lowerCase = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = lowerCase.length - 1;
    while (i < j) {
        if (lowerCase[i]!== lowerCase[j])
            return false;
        i++;
        j--;
    }
    return true;
}
module.exports = {
    isPalindrome
};