// En TS no podemos cambiar el tipo de dato de una variable
let firstVariable = 2
firstVariable = '2'

let secondVariable = 3

console.log(firstVariable + secondVariable)
//output 
// TSError: ⨯ Unable to compile TypeScript:
// index.ts:3:1 - error TS2322: Type 'string' is not assignable to type 'number'.



// Esto si esta permitido en TS
let otherFirstVariable = 2
otherFirstVariable = 4

let otherSecondVariable = 3

console.log(otherFirstVariable + otherSecondVariable)
// output 7