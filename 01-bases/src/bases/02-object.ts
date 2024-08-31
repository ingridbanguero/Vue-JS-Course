const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 55421,
        lat: 14.2321,
        lng: 34.5667
    }
} // as const; 
// permite que no se modifiquen las propiedades de un objeto
 
person.age = 55;

const person2 = person; // Se crea una referencia
person2.lastName = 'Parker'; // Tambien se modifica en person
console.log({ person })
console.log({ person2 }) 

const person3 = {...person} // Se crea una copia pero 
person3.lastName = 'Banguero';

console.log({ person })
console.log({ person3 })

const person4 = structuredClone(person);
console.log({ person4 })

export {};