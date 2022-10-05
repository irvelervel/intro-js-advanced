// EVALUATING CONDITIONS

let height = 180
let isTallerThan170 = height > 170

console.log('value of isTallerThan170:', isTallerThan170)

let age = 20
let areYouAbleToDrive = age > 17
console.log('value of areYouAbleToDrive:', areYouAbleToDrive)

let childsAge = 14
let isYourChildGoingToEatForFree = childsAge <= 12
console.log(
  'value of isYourChildGoingToEatForFree:',
  isYourChildGoingToEatForFree
)

let yourAge = 30
// special birthday is when you turn 30
let isYourSpecialBirthdayToday = yourAge === 30
// let isYourSpecialBirthdayToday = yourAge !== 30 // this instead check the inequality of the sentence
// the == checks the value but not the type
// the === checks the value AND the type
console.log('isYourSpecialBirthdayToday:', isYourSpecialBirthdayToday)

// AND
let myAge = 35
let amIOlderThan20 = myAge > 20
console.log('amIOlderThan20', amIOlderThan20)

let myHeight = 170
let amIHigherThan160 = myHeight > 160
console.log('amIHigherThan160', amIHigherThan160)

let oldEnoughAndHighEnough = amIOlderThan20 && amIHigherThan160 && true
// the && or AND operator results in TRUE just if ALL THE CONDITIONS ARE TRUE
console.log('oldEnoughAndHighEnough', oldEnoughAndHighEnough)

// let's analyze the possible outcomes
// true && true --> true
// true && false --> false
// false && true --> false
// false && false --> false

// OR
let firstHairColor = 'brown'
let secondHairColor = 'ginger'

let areYouBlondeOrGinger =
  firstHairColor === 'blonde' || secondHairColor === 'ginger'

// the OR operator || turns TRUE if at least ONE of the conditions is TRUE
console.log('areYouBlondeOrGinger', areYouBlondeOrGinger)

// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false

// IF STATEMENT

console.log("\nLet's check if I have the right size T-shirt for you!")

// I have t-shirts just for people under 175cm
// myHeight <= 175
if (myHeight <= 175 && myAge <= 40) {
  // this block of code, delimited with {}, is executed JUST
  // if the condition inside the if is TRUE
  console.log('Congratulations, this is your T-shirt!')
}

console.log('Ok, check finished!')

// IF/ELSE STATEMENT
let yourLotteryNumber = 123456
let winningNumber = 123456

if (yourLotteryNumber === winningNumber) {
  // this happens just if the condition IS MET
  console.log('\nCONGRATULATIONS, YOU JUST WON THE LOTTERY!')
} else {
  // this happens just if the condition IS NOT MET
  // --> if you're NOT the winner today
  console.log("\nUnfortunately you didn't win today, try again next time!")
}

let number = 35

// instructions: let's check if the provided number is:
// - more than 20
// - in between 20 and 50 (excluding 50)

console.log("\nLet's check the provided number now:")

if (number > 20) {
  console.log('first check passed, number is higher than 20!')
  // if I fall here, maybe my number applies also for the second check!
  if (number >= 20 && number < 50) {
    console.log('second check passed, number is valid!')
  } else {
    console.log('second check NOT passed, number does NOT apply')
  }
} else {
  // if we fall here, let's say goodbye since there's no need
  // for additional check
  console.log('first check NOT passed, number does NOT apply')
}

// SHIPPING COST EXAMPLE
let cartPrice = 20 // cartPrice is the cost of the objects in your cart
let shippingCost = 5
// if cartPrice is more than 50, you get free shipping!
// total is the total amount of money you have to pay

let total

// if (cartPrice >= 50) {
//   total = cartPrice // just cartPrice since the order is big enough
//   // to be eligible for free shipping
//   console.log('\nFree shipping is included!')
// } else {
//   total = cartPrice + shippingCost // since you have to pay for shipping
// }

// TERNARY OPERATOR
total = cartPrice >= 50 ? cartPrice : cartPrice + shippingCost

// console.log('\nYour total is ' + total + '. How do you want to pay?')

// another example with shipping costs
let smallShippingCost = 3
let bigShippingCost = 5

// if cartPrice is more than 50, you don't pay for shipping at all
// if cartPrice is more than 30, you just get smallShippingCost applied
// if cartPrice is less than 30, you get the bigShippingCost applied

total =
  cartPrice >= 50 // condition for free shipping
    ? cartPrice // true, so the total is just cartPrice
    : cartPrice > 30 // false, is the cartPrice at least more than 30?
    ? cartPrice + smallShippingCost // true, apply che smallShippingCost fee
    : cartPrice + bigShippingCost // false, apply the bigShippingCost fee

console.log('\nYour total is ' + total + '. How do you want to pay?')
// this line is just formatting my total inside a nice piece of text :)

// truthy and falsy

let myName = 'Stefano'

if (NaN) {
  console.log('Ciao!')
} else {
  console.log('Hello!')
}
