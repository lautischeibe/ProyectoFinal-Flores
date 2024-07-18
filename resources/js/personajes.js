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
        descripcion: "Qiyana lanza su Ohmlatl y causa 50 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "Audacity",
        descripcion: "Qiyana muestra su poder elementalista causando entre 50 o 100 de daño",
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
        descripcion: " Akali salta sobre el enemigo 4 veces, causandole entre 20, 40, 60, u 80 de daño",
        usar: function (valorPoder) {
            let valorMultiplicador = Math.floor(Math.random() * (6 - 1));
            let valorAtaque = valorPoder * valorMultiplicador;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconakali.png",
    "resources/img/personajes/iconakali.png"
);

let personajeViego = new Personajes(
    "Viego",
    170,
    40, {
        nombre: "Blade of the Ruined King",
        descripcion: "Viego acuchilla todo frente a si causando 40 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "Heartbreaker",
        descripcion: "Viego cae violentamente haciendo haciendo 80 de daño",
        usar: function (valorPoder) {
            let valorAtaque = valorPoder * 2;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconviego.png",
    "resources/img/personajes/iconviego.png"
);

let personajeCaitlyn= new Personajes(
    "Caitlyn",
    80,
    60, {
        nombre: "Piltover Peacemaker",
        descripcion: "Caitlyn dispara hacia delante causando 60 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "Caliber 50-net",
        descripcion: "Caitlyn se concentra y hace un super disparo causando 120 de daño",
        usar: function (valorPoder) {
            let valorAtaque = valorPoder * 2;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconcaitlyn.png",
    "resources/img/personajes/iconcaitlyn.png"
);

let personajeFizz= new Personajes(
    "Fizz",
    120,
    50, {
        nombre: "Playful",
        descripcion: "Fizz salta en su tridente cae causando 50 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "SHAAAAARK!",
        descripcion: "Fizz llama a Sharky, este salta mordiendo a todos, e inflige 100 de daño",
        usar: function (valorPoder) {
            let valorAtaque = valorPoder * 2;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconfizz.png",
    "resources/img/personajes/iconfizz.png"
);

let personajeEkko= new Personajes(
    "Ekko",
    100,
    40, {
        nombre: "Dissonating Strike",
        descripcion: "Ekko arroja su giratiempo y hace 40 de daño",
        usar: function (valorPoder) {
            return valorPoder;
        },
    }, {
        nombre: "Chronobreak",
        descripcion: "Ekko vuelve en el tiempo y explota en su posicion causando 95 de daño",
        usar: function (valorPoder) {
            let valorAtaque = valorPoder + 55;
            return valorAtaque;
        },
    },
    "resources/img/personajes/iconekko.png",
    "resources/img/personajes/iconekko.png"
);

let listadoPersonajes = [];
listadoPersonajes.push(
    personajeQiyana,
    personajeAkali,
    personajeViego,
    personajeCaitlyn,
    personajeFizz,
    personajeEkko,
);