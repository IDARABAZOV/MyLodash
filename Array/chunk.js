/**
 * @param {number[]} arr - Массив элементов
 * @param {number} [size=1] - Размер чанка
 * @returns {number[][]|[]} - Массив чанков
 */
function chunk(arr, size = 1) {
    let result = [];
    if (!size) return result;

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;

}

const testArr = [1,2,3,4];
const testArr2 = [1,2,3,4,5,6];
const testArr3 = [1,2,3,4,5];
console.log(chunk(testArr, 0))
console.log(chunk(testArr, 2))
console.log(chunk(testArr, 3))
console.log(chunk(testArr2, 1))
console.log(chunk(testArr3, 2))