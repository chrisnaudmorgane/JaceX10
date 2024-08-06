function displayProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`);
    } else {
        console.log(`Property '${prop}' does not exist in the object.`);
    }
}
module.exports = {
    displayProperty
}
// Exemple d'utilisation
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer"
};

displayProperty(person, "name");
displayProperty(person, "age");
displayProperty(person, "occupation");
displayProperty(person, "address");
