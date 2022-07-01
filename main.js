let sayHello = require('./greetings');
const {add, subtract} = require('./calculator');
const IMP_NUM = require('./subfuncs/sub')
const getJoke = require('./jokes');
const moment = require('moment')

console.log(add(7,5))
let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log(`The current date/time is ${currentTime}`)
sayHello('Bob')
console.log(getJoke())
console.log(`The meaning of life is ${IMP_NUM}`)