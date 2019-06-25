// 1: _.chunk(array, [size=1])

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