/**
 * Удаляет из массива все отрицательные значения
 * @param {Array<unknown>} arr 
 * @returns {Array<unknown>}
 */

function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element) {
            result.push(element);
        }
    }
    return result;
}

console.log(compact([0, 1, false, 2, '', 3]));
console.log(compact([0, 1, false, 2, '', {}, "123455", 3]));