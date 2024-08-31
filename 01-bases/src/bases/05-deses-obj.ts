interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person : Hero= {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, power = 'No tiene'} = person;
console.log({age, name, power});