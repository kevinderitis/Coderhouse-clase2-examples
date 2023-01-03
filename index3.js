class Persona{
    name;
    #lastname;

    constructor(name, lastname){
        this.name = name;
        this.#lastname = lastname;
    }
}

const pepe = new Persona('kevin', 'de ritis')

console.log(pepe.name)
console.log(pepe.lastname)