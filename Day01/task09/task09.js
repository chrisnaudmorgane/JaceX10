function capitalizeWords(sentence) {
    const words = sentence.split(/[^a-zA-Z0-9]+/).filter(word => word !== '');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return capitalizedWords.join(' ');
}
module.exports = {
    capitalizeWords
}
