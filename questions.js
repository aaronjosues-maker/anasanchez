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
    },
    {
        id: 11,
        name: "Signos de Puntuación",
        unlockCost: 1000,
        questions: [
            { text: "¿Qué signo se usa al final de una oración que afirma algo?", options: ["Coma (,)", "Punto y coma (;)", "Punto (.)", "Dos puntos (:)"], correctAnswer: 2 },
            { text: "Los signos que se usan para encerrar una aclaración son los...", options: ["Signos de interrogación (¿?)", "Paréntesis (())", "Comillas (\"\")", "Puntos suspensivos (...)"], correctAnswer: 1 },
            { text: "¿Para qué se utiliza la coma (,)?", options: ["Para indicar el final de un texto", "Para hacer una pausa breve", "Para expresar sorpresa", "Para hacer una pregunta"], correctAnswer: 1 }
        ]
    },
    {
        id: 12,
        name: "La Noticia",
        unlockCost: 1100,
        questions: [
            { text: "¿Cuál es la parte de la noticia que resume lo más importante en una sola línea?", options: ["Cuerpo", "Foto", "Titular", "Fecha"], correctAnswer: 2 },
            { text: "Una noticia debe ser, sobre todo...", options: ["Larga y detallada", "Ficticia y entretenida", "Objetiva y veraz", "Subjetiva y personal"], correctAnswer: 2 }
        ]
    },
    {
        id: 13,
        name: "El Cuento de Misterio",
        unlockCost: 1200,
        questions: [
            { text: "Un personaje que investiga y resuelve un crimen en un cuento es un...", options: ["Villano", "Testigo", "Detective", "Narrador"], correctAnswer: 2 },
            { text: "El elemento principal de un cuento de misterio es...", options: ["El romance", "El humor", "La enseñanza", "El suspenso"], correctAnswer: 3 }
        ]
    },
    {
        id: 14,
        name: "Palabras Homófonas",
        unlockCost: 1300,
        questions: [
            { text: "Completa la oración: 'Fui a ____ la basura en el cesto.'", options: ["echar", "hechar"], correctAnswer: 0 },
            { text: "Completa la oración: '¡___, qué dolor me di en el pie!'", options: ["ay", "hay", "ahí"], correctAnswer: 0 },
            { text: "'Hola' (saludo) y 'ola' (del mar) son palabras...", options: ["Sinónimas", "Antónimas", "Homófonas", "Parónimas"], correctAnswer: 2 }
        ]
    },
    {
        id: 15,
        name: "La Entrevista",
        unlockCost: 1400,
        questions: [
            { text: "La persona que hace las preguntas en una entrevista es el...", options: ["Entrevistado", "Público", "Entrevistador", "Camarógrafo"], correctAnswer: 2 },
            { text: "El propósito de una entrevista es...", options: ["Contar un chiste", "Vender un producto", "Obtener información", "Leer un poema"], correctAnswer: 2 }
        ]
    },
    {
        id: 16,
        name: "Sujeto y Predicado",
        unlockCost: 1500,
        questions: [
            { text: "En 'El gato negro duerme en el sofá', ¿cuál es el sujeto?", options: ["El gato negro", "duerme", "en el sofá", "negro"], correctAnswer: 0 },
            { text: "¿Qué parte de la oración dice lo que hace el sujeto?", options: ["El adjetivo", "El verbo", "El predicado", "El artículo"], correctAnswer: 2 }
        ]
    },
    {
        id: 17,
        name: "La Leyenda",
        unlockCost: 1600,
        questions: [
            { text: "Una leyenda es una narración que mezcla hechos reales con...", options: ["Instrucciones", "Noticias", "Fantasía", "Recetas"], correctAnswer: 2 },
            { text: "Las leyendas se transmiten principalmente de forma...", options: ["Escrita en libros", "Oral de generación en generación", "Por correo electrónico", "En películas"], correctAnswer: 1 }
        ]
    },
    {
        id: 18,
        name: "Tiempos Verbales",
        unlockCost: 1700,
        questions: [
            { text: "La acción del verbo 'Yo comí' está en tiempo...", options: ["Presente", "Futuro", "Pasado", "Infinitivo"], correctAnswer: 2 },
            { text: "La oración 'Nosotros jugaremos mañana' está en tiempo...", options: ["Presente", "Futuro", "Pasado", "Gerundio"], correctAnswer: 1 }
        ]
    },
    {
        id: 19,
        name: "Familias de Palabras",
        unlockCost: 1800,
        questions: [
            { text: "¿Qué palabra pertenece a la familia de 'pan'?", options: ["Pantalón", "Panadero", "Pandereta", "Pantalla"], correctAnswer: 1 },
            { text: "'Marino' y 'marea' son de la familia de la palabra...", options: ["Amar", "Martes", "Mar", "Amargo"], correctAnswer: 2 }
        ]
    },
    {
        id: 20,
        name: "Gran Repaso Final",
        unlockCost: 1900,
        questions: [
            { text: "La sílaba que se pronuncia con más fuerza en una palabra es la sílaba...", options: ["Átona", "Final", "Tónica", "Inicial"], correctAnswer: 2 },
            { text: "¿Cuál de estas palabras es un verbo que indica una acción?", options: ["Casa", "Bonito", "Rápido", "Correr"], correctAnswer: 3 }
        ]
    }
];