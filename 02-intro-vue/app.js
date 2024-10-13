const { createApp, ref} = Vue;
// Create app -> Crear una aplicacion
// ref -> crear una variable reactiva

console.log("Hola mundo");

const app = createApp({
    template: `
        <h1>Hola mundo</h1>
        <p>Desde app.js</p>
    `
})

app.mount('#myApp')