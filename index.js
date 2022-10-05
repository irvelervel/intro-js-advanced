let greetings = 'Hello!'
console.log(greetings)

// greetings = 100 // THIS IS SUPER WRONG!
greetings = 'Hello again!' //
// console.log(parseInt(greetings)) <-- this gives us NaN

const thisIsOneHundred = 100 // the value of of this special "variable" (technically a constant) cannot change after initial declaration
// thisIsOneHundred = 101 // this line breaks the code!

let aVerySpecialNumber = 42

let myBoolean = true

let numberAsAString = '456.12'
console.log('trying to parse 456 as a string:', parseInt(numberAsAString))
console.log(
  'trying to parse float 456 as a string:',
  parseFloat(numberAsAString)
)

console.log(
  'this will probably just concatenate the result:',
  45 + numberAsAString
)
console.log(
  'this should instead convert numberAsAString into a number and add it up to 45: ',
  45 + parseInt(numberAsAString)
)
