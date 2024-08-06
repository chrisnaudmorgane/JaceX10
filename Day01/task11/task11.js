function sortByProperty(arr, prop) {
    return arr.slice().sort((a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    });
}
module.exports = {
    sortByProperty
}
// Exemple d'utilisation
const persons = [
    { name: "John", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Bob", age: 18 },
];
const sortedPersons = sortByProperty(persons, "age");
console.log("Sorted persons:", sortedPersons);
