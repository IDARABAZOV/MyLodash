
/**
 * Создает новый массив, объединяющий array c любыми 
 * массивами или значениями
 * @param {Array<unknown>} array 
 * @param  {...any} values 
 * @returns {Array<unknown>}
 */
function concat(array, ...values) {
    let result = [...array];

    for (let i = 0; i < values.length; i++) {
        if (Array.isArray(values[i])) {
            result.push(...values[i]);
        } else {
            result.push(values[i]);
        }
    }
    return result;
}

console.log(concat([]));
console.log(concat([1], 2, [3], [ [ 4 ] ] ));
console.log(concat([1], 2, [3], [ [ 4 ] ], { name: 'igor' } ));