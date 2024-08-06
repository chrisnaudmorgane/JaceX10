function findLongestWord(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    return arr.reduce((longest, word) => {
        return word.length > longest.length? word : longest;
    });
}
const wordArray = ["cat", "elephant", "dog", "giraffe", "zebra"];
console.log(findLongestWord(wordArray));