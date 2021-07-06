/* -------------------------------------------------------------------------- */
/*                             Anotación de tipos                             */
/* -------------------------------------------------------------------------- */
let myNumber: number
let myString: string
let myBoolean: boolean

/* -------------------------------------------------------------------------- */
/*                             Inferencia de tipos                            */
/* -------------------------------------------------------------------------- */
let myMultiplication = 2 * 3
// No hay error pero ahora esta variable sera de tipo number
// Si decidimos asignar otro dato nos dará error
myMultiplication = 'Qua Code'

console.log(myMultiplication)
//output: index.ts:37:1 - error TS2322: Type 'string' is not assignable to type 'number'.