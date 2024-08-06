function getRandomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number')
        throw new Error('The arguments must be a numbers');
    return Math.random() * (max - min) + min
}
module.exports = {
    getRandomNumber
}
try {
    const randomNumber = getRandomNumber(1, 10);
    console.log(`Random number between 1 and 10: ${randomNumber}`);
} catch (e) {
    console.log(e.name, ':', e.message);
}