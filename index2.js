 const objetos = [
    {   manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
},
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
}
 ]

let ob = { ...objetos[0], ...objetos[1]}
let res = Object.keys(ob)
console.log(res)

let objetoFinal = {};
res.forEach( elem => {
    objetoFinal[elem] = (objetos[0][elem] ?? 0) + (objetos[1][elem] ?? 0)
})

console.log(objetoFinal)