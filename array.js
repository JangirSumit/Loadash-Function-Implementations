//https://lodash.com/docs/#chunk


// 1: _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(arr, size = 1) {
    let result = [];
    let step = 0;

    while (arr.length > step) {
        result.push(arr.slice(step, step + size));
        step += size;
    }

    return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]

//////////////////////////////////////////////////////////////////////////////////////

// 2: _.compact(array)
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr) {
    return arr.filter((ele) => !!ele);
}

console.log(compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////

// 3: _.concat(array, [values])
// Creates a new array concatenating array with any additional arrays and/or values.

function concat(arr, ...values) {
    return arr.concat(...values);
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);
console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

/////////////////////////////////////////////////////////////////////////////////////

// 4: _.difference(array, [values])
// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.

function difference(arr1, arr2) {
    return arr1.filter((ele) => arr2.indexOf(ele) == -1);
}

console.log(difference([2, 1], [2, 3]));
// => [1]

/////////////////////////////////////////////////////////////////////////////////////

// 5. _.drop(array, [n=1])
// Creates a slice of array with n elements dropped from the beginning.

function drop(arr, n = 1) {
    return arr.slice(n);
}

console.log(drop([1, 2, 3]));
// => [2, 3]

console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////

// 6: _.dropRight(array, [n = 1])
// Creates a slice of array with n elements dropped from the end.

function dropRight(arr, n = 1) {
    return arr.slice(0, -n);
}

console.log(drop([1, 2, 3]));
// => [1, 2]

console.log(drop([1, 2, 3], 2));
// => [1]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => []