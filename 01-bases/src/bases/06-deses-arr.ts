// La desestructuracion de un arreglo consiste en 
// poder extraer un valor de un arreglo y definir una
// variable con ese valor

const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

//  Son posicionales
const [g, v] = character; // sera goku el primer chcaracter, vegeta el segundo
// const [, v] // si solo quiero el segundo elemento
// const [, , t] // trunks
console.log({g, v})


const returnArray = () => {
    return [1,2,3, 'ABC'] as const;
}

const [numbers, letters] = returnArray();
console.log(numbers, letters)