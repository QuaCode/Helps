/* let personalBrand = {
    name: 'Qua Code',
    mainColor: '#050D10',
    site: 'quacode.net'
}

console.log(personalBrand)
 */
//output: { name: 'Qua Code', mainColor: '#050D10', site: 'quacode.net' }

/* ---------------------------------- ERROR --------------------------------- */
/* let personalBrand: object = {
    name: 'Qua Code',
    mainColor: '#050D10',
    site: 'quacode.net'
}

console.log(personalBrand.name) */

//output:
// TSError: ⨯ Unable to compile TypeScript:
// index.ts:17:27 - error TS2339: Property 'name' does not exist on type 'object'.

/* --------------------------------- SUCCESS -------------------------------- */

// Other example
// También puedes definir un type y luego utilizarlo para crear mas objects

/* type personalBrand = {
    name: string,
    mainColor: string,
    site: string,
}

let myPersonalBrand = {
    name: 'Qua Code',
    mainColor: '#050D10',
    site: 'quacode.net',
}

console.log(myPersonalBrand.name) */

//output: Qua Code

/* ---------------------------- OBJECTOS ANIDADOS --------------------------- */

/* let people: {
    name: string,
    age: number,
    location: {
        city: string,
        country: string,
    }
} = {
    name: 'Geovanny',
    age: 20,
    location: {
        city: 'City',
        country: 'Honduras',
    }
}

console.log(people) */
// output:
// {
//    name: 'Geovanny',
//    age: 20,
//    location: { city: 'City', country: 'Honduras' }
// }

/* --------------------------- PROPIEDAD OPCIONAL --------------------------- */
let people: {
    name: string,
    age: number,
    location?: { // here
        city: string,
        country: string,
    }
} = {
    name: 'Geovanny',
    age: 20,
}

console.log(people)
// output:
// {
//    name: 'Geovanny',
//    age: 20,
// }
  