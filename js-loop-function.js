/////////////////
let iteration = 1

do {
  console.log(iteration)
  iteration += 5
} while (iteration < 100)

///////
for (let index = 0; index <= 100; index += 10) {
  console.log(index)
}

///////
const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  console.log(element)
}

//Challenge
////Factorial
function factorial(num) {
  let temp = num

  for (i = num - 1; i > 0 ; i --) {
  temp *= i
  }

  return temp

}

console.log(factorial(4))
console.log(factorial(8))

//Reverse
function reverse(word) {
  let str = ""

  for (i = word.length - 1; i >= 0; i --) {
    str += word[i]
  }

  return str

}
console.log(reverse("haekal"))
console.log(reverse("yourName"))