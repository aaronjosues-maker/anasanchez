// Contenido basado en el libro de texto de 5to grado de Nicaragua
// Unidad 1: Nos comunicamos

export const levels = [
    {
        id: 1,
        name: "La Comunicación",
        unlockCost: 0,
        questions: [
            {
                text: "Quien envía el mensaje en un acto de comunicación es el...",
                options: ["Receptor", "Canal", "Emisor", "Código"],
                correctAnswer: 2
            },
            {
                text: "El medio por el cual se envía el mensaje (aire, papel, teléfono) se llama...",
                options: ["Mensaje", "Canal", "Emisor", "Contexto"],
                correctAnswer: 1
            },
            {
                text: "¿Qué palabra es SINÓNIMO de 'contento'?",
                options: ["Triste", "Enojado", "Alegre", "Cansado"],
                correctAnswer: 2
            },
            {
                text: "¿Qué palabra es ANTÓNIMO de 'grande'?",
                options: ["Enorme", "Gigante", "Alto", "Pequeño"],
                correctAnswer: 3
            },
            {
                text: "Completa la palabra con 'b' o 'v': 'La __arca navegó por el río.'",
                options: ["barca (con b)", "varca (con v)"],
                correctAnswer: 0
            },
            {
                text: "Completa la palabra con 'b' o 'v': 'El __aso está lleno de agua.'",
                options: ["baso (con b)", "vaso (con v)"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 2,
        name: "Leemos para Recrearnos",
        unlockCost: 100,
        questions: [
            {
                text: "La parte de un cuento donde se presentan los personajes y el lugar es el...",
                options: ["Nudo", "Desenlace", "Inicio", "Final"],
                correctAnswer: 2
            },
            {
                text: "El problema o conflicto principal de una historia ocurre en el...",
                options: ["Nudo", "Inicio", "Desenlace", "Título"],
                correctAnswer: 0
            },
            {
                text: "Las palabras como 'corazón' o 'sofá' que llevan el acento en la última sílaba son...",
                options: ["Graves", "Esdrújulas", "Agudas", "Sobresdrújulas"],
                correctAnswer: 2
            },
            {
                text: "La palabra 'árbol' es...",
                options: ["Aguda", "Grave", "Esdrújula", "No tiene acento"],
                correctAnswer: 1
            },
            {
                text: "Completa la palabra con 'g' o 'j': 'La __ente estaba feliz en la fiesta.'",
                options: ["gente (con g)", "jente (con j)"],
                correctAnswer: 0
            },
            {
                text: "Completa la palabra con 'g' o 'j': 'Me gusta el __ugo de naranja.'",
                options: ["gugo (con g)", "jugo (con j)"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 3,
        name: "Describimos el Mundo",
        unlockCost: 200,
        questions: [
             {
                text: "Las palabras que dicen cómo son o cómo están las personas, animales o cosas se llaman...",
                options: ["Verbos", "Sustantivos", "Artículos", "Adjetivos"],
                correctAnswer: 3
            },
            {
                text: "En la oración 'El perro grande ladra', ¿cuál es el adjetivo?",
                options: ["perro", "ladra", "El", "grande"],
                correctAnswer: 3
            },
            {
                text: "Completa la palabra con 'c', 's' o 'z': 'Me puse los __apatos nuevos.'",
                options: ["capatos", "sapatos", "zapatos"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 4,
        name: "El Verbo y la Oración",
        unlockCost: 300,
        questions: [
            { text: "La palabra que indica una acción en la oración es el...", options: ["Sustantivo", "Verbo", "Adjetivo", "Artículo"], correctAnswer: 1 },
            { text: "En 'María come manzanas', ¿cuál es el sujeto?", options: ["come", "manzanas", "María", "La"], correctAnswer: 2 }
        ]
    },
    {
        id: 5,
        name: "Textos Instructivos",
        unlockCost: 400,
        questions: [
            { text: "¿Cuál es el propósito de un texto instructivo?", options: ["Contar una historia", "Dar una opinión", "Guiar para hacer algo", "Informar una noticia"], correctAnswer: 2 },
            { text: "Una receta de cocina es un ejemplo de texto...", options: ["Narrativo", "Descriptivo", "Poético", "Instructivo"], correctAnswer: 3 }
        ]
    },
    {
        id: 6,
        name: "La Carta",
        unlockCost: 500,
        questions: [
            { text: "La parte de la carta donde se saluda al destinatario es...", options: ["Cuerpo", "Despedida", "Firma", "Encabezado"], correctAnswer: 3 },
            { text: "La persona que escribe la carta es el...", options: ["Cartero", "Destinatario", "Remitente", "Mensajero"], correctAnswer: 2 }
        ]
    },
    {
        id: 7,
        name: "Poesía y Rima",
        unlockCost: 600,
        questions: [
            { text: "La repetición de sonidos al final de los versos se llama...", options: ["Estrofa", "Metáfora", "Rima", "Verso"], correctAnswer: 2 },
            { text: "¿Qué palabra rima con 'canción'?", options: ["Casa", "Perro", "Emoción", "Sol"], correctAnswer: 2 }
        ]
    },
    {
        id: 8,
        name: "Acentuación II",
        unlockCost: 700,
        questions: [
            { text: "La palabra 'música' es...", options: ["Aguda", "Grave", "Esdrújula", "Sobresdrújula"], correctAnswer: 2 },
            { text: "Las palabras esdrújulas siempre llevan...", options: ["Punto final", "Coma", "Tilde", "Mayúscula"], correctAnswer: 2 }
        ]
    },
    {
        id: 9,
        name: "La Fábula",
        unlockCost: 800,
        questions: [
            { text: "La enseñanza que deja una fábula se llama...", options: ["Inicio", "Conflicto", "Moraleja", "Personaje"], correctAnswer: 2 },
            { text: "Los personajes principales de las fábulas suelen ser...", options: ["Personas", "Animales con características humanas", "Objetos", "Extraterrestres"], correctAnswer: 1 }
        ]
    },
    {
        id: 10,
        name: "Repaso Final",
        unlockCost: 900,
        questions: [
            { text: "El conjunto de letras ordenadas de un idioma es el...", options: ["Diccionario", "Abecedario", "Párrafo", "Libro"], correctAnswer: 1 },
            { text: "¿Qué signo se usa para hacer una pregunta?", options: ["¡!", "...", "¿?", "."], correctAnswer: 2 }
        ]
    }
];
