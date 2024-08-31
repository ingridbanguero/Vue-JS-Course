function greetPerson( name: string ){
    return `Hola, ${name}`
}


const greetPerson2 = (name : string) => {
    return `Hola, ${name}`;
}

// Sin return
const greetPerson3 = (name: string) => `Hola, ${name}`;

console.log(greetPerson('Ingrid'))

const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}

// Sin return
const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'Tony001'
})  

// Infiriendo una propiedad
const getUser3 = (uid : string) => ({ // return implicito
    uid,
    username: 'Tony001'
})  


const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza'
    },
]

const hero = heroes.find((h) => h.id === 1);
console.log(hero?.name)

