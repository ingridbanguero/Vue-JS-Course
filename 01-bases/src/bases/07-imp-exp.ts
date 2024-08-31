import heroes, { type Owner} from "../data/heroes";
// heroes es exportacion por defecto, podria tener otro nombre
// import misPersonajes from '../data/heroes';

console.log(heroes);

export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHeroById(1))

export const getHeroByOwner = (owner: Owner) => {
    return heroes.filter(hero => hero.owner == owner);
}

console.log(getHeroByOwner('DC'))