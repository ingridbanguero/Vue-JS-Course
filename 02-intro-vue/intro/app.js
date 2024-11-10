const { createApp, ref} = Vue;
// Create app -> Crear una aplicacion
// ref -> crear una variable reactiva

const app = createApp({
    setup(){ // Funcion especial que se ejecuta al montar el componente
        // Variables reactivas
        const message = ref("I am Batman");
        const author = ref("Bruce Wayne")
        setTimeout(() => {
            message.value = "Soy Goku";
            author.value = "Soy Goku"
            console.log(message)
        }, 1000);

        // Eventos 
        const changeQuote = () => {
            message.value = "Hola, Soy Goku";
            author.value = "Event Goku"
        }

        // Variables disponibles en la plantilla
        return {
            // Variables
            message,
            author,

            // Funciones
            changeQuote
        }
    }
})

app.mount('#myApp')