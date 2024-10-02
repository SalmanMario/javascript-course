const todoList = [{
    name: 'ceva',
    dueDate: '2024-12-20'
}];

renderToDoList()

function renderToDoList() {
    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name
        // const date = todoObject.dueDate
        const {name, dueDate} = todoObject
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        
        <button class="delete-todo-button" onclick="{
	    todoList.splice(${i}, 1)
		renderToDoList()
        }">Delete</button>
       
        `
        todoListHTML += html
    }

    document.querySelector('.js-display-array').innerHTML = todoListHTML
}

function addTodo() {
    const inputElement = document.querySelector('.js-todo-name')
    const name = inputElement.value

    const dateElement = document.querySelector('.js-date')
    const dueDate = dateElement.value

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name, dueDate
    })
    console.log(todoList)

    inputElement.value = ''

    renderToDoList()
}

/*
let i = 1
while (i <= 5) {
    console.log(i)
    i++
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let randomNumber = 0;

while(randomNumber < 0.9){
    randomNumber = Math.random()
    console.log(randomNumber)
 */

/*
const todoList = ['make dinner', 'wash dishes', 'watch youtube'];

for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
   console.log(value);
}
 */

// const nums = [1, 1, 3]
// let total = 0
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     total += num
// }
// console.log(total)
//
// const numsDoubled = []
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     numsDoubled.push(num * 2)
//     console.log(numsDoubled)
// }

const array1 = [1, 2, 3]
const array2 = array1.slice()
array2.push(4)
console.log(array1)
console.log(array2)

const array3 = [1, 2, 3]
const [firstValue, secondValue, thirdValue] = [1, 2, 3]
console.log(firstValue, secondValue, thirdValue)

const myObject = {
    name: 'Mario',
    age: 22,
    info: 'test'
}

for (let i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        continue
    }
    if (i === 8) {
        break
    }
    console.log(i)
}

let i = 1

while (i <= 10) {
    if (i % 3 === 0) {
        i++
        continue
    }
    console.log(i)
    i++
}

// Destructure
const {name, age} = myObject
console.log(name, age)

function doubleArray(nums) {
    const numsDoubled = []
    for (let i = 0; i < nums.length; i++) {
        if (nums === 0) {
            return numsDoubled
        }
        const num = nums[i]
        numsDoubled.push(num * 2)
    }
    return numsDoubled
}

console.log(doubleArray([1, 1, 3]))
console.log(doubleArray([2, 2, 5]))

