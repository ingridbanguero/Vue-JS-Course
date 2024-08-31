/* console.log('Hola')

new Promise((resolve, reject) => {
    // Pertenece al hilo principal
    // Solo se puede llamar una vez el resolve y una el reject
    console.log('Cuerpo')
    setTimeout(() => {
        // resolve('Mi amigo cumplio')
        reject('Mi amigo no cumplio')
    }, 1000)
})
.then((message) => console.log(message)) // Se ejecuta despues del hilo principal 
.catch((errorMessage) => console.log(errorMessage))
.finally(() => console.log('Final de la promesa'))

console.log('Fin') */

import type { Hero } from '../data/heroes';
import { getHeroById } from "./07-imp-exp"

const getHeroByIdAsync = (id: number):Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            hero ? resolve(hero) : reject(`Hero no encontrado ${id}`)
        }, 1500);
    })
}

getHeroByIdAsync(2)
.then(hero => console.log(`El nombre es ${hero.name} `))
.catch(err => console.log(err))