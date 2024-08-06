function findIntersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findIntersection(array1, array2);
console.log(result);