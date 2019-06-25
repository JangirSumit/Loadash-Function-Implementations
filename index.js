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

console.log(chunk(['a', 'b', 'c', 'd'], 2)) // [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)) // [['a', 'b', 'c'], ['d']]

//////////////////////////////////////////////////////////////////////////////////////

// 2: _.compact(array)
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr) {
    return arr.filter((ele) => !!ele);
}

console.log(compact([0, 1, false, 2, '', 3]));