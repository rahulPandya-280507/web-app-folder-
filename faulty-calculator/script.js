let num1 = Number(prompt("Enter the first number: "))
let num2 = Number(prompt("Enter the second number: ")) 
// let operation = prompt("Enter the operation: ")
let randomNumber = Math.random()

if(randomNumber > 0 && randomNumber <= 0.1) {
    console.log(`${num1} + ${num2} = ${num1 - num2}`)
    console.log(`${num1} * ${num2} = ${num1 + num2}`)
    console.log(`${num1} - ${num2} = ${num1 / num2}`)
    console.log(`${num1} / ${num2} = ${num1 ** num2}`)
} else {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}