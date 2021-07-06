# 04. Tipo de dato Object

En Ts tenemos dos formas de clasificar los tipos de datos

## **Tipos primitivo**

- String
- Number
- Boolean
- Null
- Undefined

## Tipos no-primitivos

- Todos los que sean distintos a los tipos primitivos

---

- **Creación de un object en TS**

    ```jsx
    let personalBrand = {
        name: 'Qua Code',
        mainColor: '#050D10',
        site: 'quacode.net'
    }

    console.log(personalBrand)

    //output: { name: 'Qua Code', mainColor: '#050D10', site: 'quacode.net' }
    ```

- **Definir un object:** sin embargo al tratar de acceder a una propiedad de este object TS nos marcará un error, Eso se debe a que declaramos el object, pero no definimos el **tipo** de propiedades que existen dentro del object ejemplo:

    ```jsx
    let personalBrand: object = {
        name: 'Qua Code',
        mainColor: '#050D10',
        site: 'quacode.net'
    }

    console.log(personalBrand.name)

    //output:
    // TSError: ⨯ Unable to compile TypeScript:
    // index.ts:17:27 - error TS2339: Property 'name' does not exist on type 'object'.
    ```

    Esto se puede solucionar declarando el tipo de dato de cada propiedad del object

    ```jsx
    let personalBrand: {
        name: string,
        mainColor: string,
        site: string,
    } = {
        name: 'Qua Code',
        mainColor: '#050D10',
        site: 'quacode.net'
    }

    console.log(personalBrand.name)
    //output: Qua Code

    // Other example
    // También puedes definir un type y luego utilizarlo para crear mas objects

    type personalBrand = {
        name: string,
        mainColor: string,
        site: string,
    }

    let myPersonalBrand = {
        name: 'Qua Code',
        mainColor: '#050D10',
        site: 'quacode.net',
    }

    console.log(myPersonalBrand.name)
    //output: Qua Code
    ```

- **Puedes tener objects anidados**

    ```jsx
    /* ---------------------------- OBJECTOS ANIDADOS --------------------------- */

    let people: {
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

    console.log(people)
    // output:
    // {
    //    name: 'Geovanny',
    //    age: 20,
    //    location: { city: 'City', country: 'Honduras' }
    // }
    ```

    Si necesitas que una propiedad no sea obligatoria simplemente debes colocar `?` antes de los dos puntos.

    ```jsx
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
    ```