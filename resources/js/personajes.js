class Personajes{
    constructor(nombre, vida, poder, ataque1, ataque2, imagen, avatar){
        (this.nombre = nombre),
        (this.vida = vida),
        (this.poder = poder),
        (this.ataque1 = ataque1),
        (this.ataque2 = ataque2),
        (this.imagen = imagen),
        (this.avatar = avatar);
    }
}

let personajeQiyana = new Personajes(
    "Qiyana",
    150,
    50, {
        nombre: "Ixtal's Edge",
        descripcion: "Lanza Ohmlatl y causa 50 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "Audacity",
        descripcion: "Qiyana muestra su poder total causando entre 50 u 100 de daño",
        usar: function (valorPoder) {
            let valorSuerte = Math.random();
            let valorAtaque = valorSuerte >= 0.5 ? valorPoder * 2 : valorPoder;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconqiyana.png",
    "resources/img/personajes/iconqiyana.png"
);

let personajeAkali = new Personajes(
    "Akali",
    150,
    20, {
        nombre: "Five Point Strike",
        descripcion: "Akali lanza sus kunais al aire causando 20 o 40 de daño",
        usar: function (valorPoder) {
            let valorMultiplicador = Math.floor(Math.random() * (3 - 1));
            let valorAtaque = valorPoder * valorMultiplicador;
            return valorAtaque;
        },
    }, {
        nombre: "Perfect Execution",
        descripcion: " Akali se pepara y desplaza hacia el enemigo 4 veces, causandole entre 20, 40, 60, u 80 de daño",
        usar: function (valorPoder) {
            let valorMultiplicador = Math.floor(Math.random() * (5 - 1));
            let valorAtaque = valorPoder * valorMultiplicador;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconakali.png",
    "resources/img/personajes/iconakali.png"
);

let listadoPersonajes = [];
listadoPersonajes.push(
    personajeQiyana,
    personajeAkali
);