const myArray = [10, 20, 30]
console.log(myArray)
myArray[2] = 99
console.log(myArray)

function getLastValue(array) {
    return array[array.length - 1]
}

function arraySwap(array) {
    // get last index
    const lastIndex = array.length - 1

    // get last value of the index
    const lastValue = array[lastIndex]
    // get first value
    const firstValue = array[0];

    // assign first index to last value
    array[0] = lastValue
    // assign last index to first value
    array[lastIndex] = firstValue

    return array
}

const arrayNums = [10, 20, 45, 8, 9]
console.log(getLastValue(arrayNums))
console.log(arraySwap(arrayNums))

const stringValues = ['hello', 'world', 'hi', 'wow'];
console.log(getLastValue(stringValues))
console.log(arraySwap(stringValues))

const myValue = 10
for (let i = 0; i <= myValue; i += 2) {
    console.log('increment 2', i)
}

for (let i = 5; i >= 0; i--) {
    console.log('decrease from five', i)
}

let i = 0
while (i < 10) {
    i += 2
    console.log('while increase', i)
}

let decreaseI = 5
while (decreaseI > 0) {
    decreaseI--
    console.log('decrease while', decreaseI)
}

// const arrayOfNumbers = [1, 2, 3]
// const result = []
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     result.push(arrayOfNumbers[i] + 1)
// }
// console.log(result)


function addOne(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1)
    }
    return result
}

console.log(addOne([8, 9, 10]))
console.log(addOne([-1, 99, -2, 0]))

function addNum(array, num) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + num)
    }
    return result
}

console.log(addNum([8, 9, 10], 8))

function addArrays(array1, array2) {
    const result = []
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i])
    }
    return result
}

console.log(addArrays([1, 2, 3], [4, 5, 6]))

function countPositive(nums) {
    let result = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result++
        }
    }
    return result
}

console.log(countPositive([-4, -5, 8, 1, 9, -5]))

function minMax(arrayNums) {
    result = {
        min: null,
        max: null,
    }

    for (let i = 0; i < arrayNums.length; i++) {
        const value = arrayNums[i]

        if (result.min === null || value < result.min) {
            result.min = value
        }

        if (result.max === null || value > result.max) {
            result.max = value
        }

    }
    return result
}

console.log(minMax([3]))

function countWords(words) {
    let result = {}
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (!result[word]) {
            result[word] = 1
        } else {
            result[word]++
        }
    }

    return result
}

console.log(countWords(['apple', 'banana', 'apple', 'apple']))

const stringArray = ['hello', 'world', 'search', 'good', 'search']
let index = -1

for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === 'search') {
        index = i;
        break
    }
}
console.log(index)

const wordsArray = ['not', 'found']
let indexWords = -1

for (let i = 0; i < wordsArray.length; i++) {
    if (stringArray[i] === 'search') {
        indexWords = i
    }

}
console.log(indexWords)

function findIndex(array, word) {
    let index = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            index = i;
        }
    }
    return index;
}

console.log('Function',findIndex(['red', 'green', 'blue', 'yellow', 'red'], 'yellow'))


