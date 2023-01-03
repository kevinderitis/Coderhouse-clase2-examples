
// let arrayExample = ['lucas', 'hola', 'nombre', 'perro']

// console.log(arrayExample.includes('nombre'))

// let num1 = 6;
// let num2 = 2;

// let num3 = num1 ** num2;

// console.log(num3)


// let objeto = { 
//     nombre: "kevin",
//     apellido: "de",
//     curso: "coder"
// }

// let ent = Object.values(objeto)
// let total = ent.reduce( (valorIn, valorAc) => valorIn+valorAc)
// console.log(ent)
// console.log(total)



// class Persona {
//     nombre;
//     #apellido;
//     edad;

//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.#apellido = apellido;
//         this.edad = 0
//     }
//     cumplirAños(){
//         this.edad++
//     }

//     getApellido(){
//         return this.#apellido
//     }
// } // Clase persona

// const pers1 = new Persona('Pepe', 'Rodriguez') // creo una instancia de mi clase Persona (pers1)
// const pers2 = new Persona('Maria', 'Gutierrez')

// console.log(pers2.nombre)
// console.log(pers2.getApellido())
// pers2.cumplirAños()

// console.log(pers2.edad)





// let objeto = {
//     nombre: 'Kevin',
//     apellido: 'Coder',
//     edad: 30
// }

// let entries = Object.values(objeto)

// // console.log(entries)




let objeto1 = {
    prop1: 'a',
    prop2: 'b',
    prop3: 'c'
}

let objeto2 = {
    prop1: 'j',
    prop2: 'i',
    prop6: 'h'
}

// let { prop1, prop2 } = objeto1;

let objeto3 = { ...objeto1, ...objeto2 }

// console.log(objeto3)


let frutas = {
    manzana: 3,
    pera: 4,
    uva: 4
}

let otrasFrutas = {
    kiwi: 5,
    uva: 3,
    pera: 2
}


let totalFrutas = { ...frutas, ...otrasFrutas }

// console.log(totalFrutas)


let { manzana, ...resto } = frutas;
console.log(manzana)
console.log(resto)
