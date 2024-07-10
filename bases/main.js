"use strict";
(function () {
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    var FuerzaHeroe;
    (function (FuerzaHeroe) {
        FuerzaHeroe[FuerzaHeroe["Acuaman"] = 0] = "Acuaman";
        FuerzaHeroe[FuerzaHeroe["Batman"] = 1] = "Batman";
        FuerzaHeroe[FuerzaHeroe["Flash"] = 5] = "Flash";
        FuerzaHeroe[FuerzaHeroe["Superman"] = 100] = "Superman";
    })(FuerzaHeroe || (FuerzaHeroe = {}));
    var fuerzaAcuaman = FuerzaHeroe.Acuaman;
    var fuerzaBatman = FuerzaHeroe.Batman;
    var fuerzaFlash = FuerzaHeroe.Flash;
    var fuerzaSuperman = FuerzaHeroe.Superman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = [
        "Flash",
        "Arrow",
        "Superman",
        "Linterna Verde",
    ];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman(true);
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, booleano, array) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || "XXX").toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || "XXX");
        }
    };
    var name = fullName("Peter", "Stark", true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "XXX");
    };
    var name = fullName("Peter");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName("Peter", "Parker");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(" "));
    };
    var superman = fullName("Clark", "Joseph", "Kent", "de Pedro");
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greetings = function (name) { return "Hola ".concat(name, "."); };
    var saveTheWorld = function () { return "\u00A1El mundo se ha salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = "Flash";
    function returName() {
        return hero;
    }
    var activateBatisignal = function () {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatisignal);
    var heroName = returName();
    console.log(heroName);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        },
    };
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: "psiquico",
        estatura: 178,
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Supervelocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        powers: ["Superfuerza", "Volar"]
    };
    console.log({ flash: flash });
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Supervelocidad", "Viajar en el tiempo"],
    };
    var superman = {
        name: "Clark Kent",
        age: 30,
        powers: ["Superfuerza", "Volar"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = "pezhammer";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 25,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = "Doctor Strange";
    console.log(avenger.charAt(2).toUpperCase());
    avenger = 150.2338566574;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log({ numbers: numbers });
    var villains = ["Joker", "Magneto", "Green Goblin", "Thanos"];
    villains.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isSuperman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["optimus"] = 3] = "optimus";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.max;
    console.log({ currentAudioLevel: currentAudioLevel });
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error("Auxilio");
    console.log("Hola Mundo");
})();
(function () {
    var nada = undefined;
    var isActive = undefined;
    console.log({ nada: nada });
    console.log({ isActive: isActive });
})();
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villains = 20;
    if (avengers < villains) {
        console.log("Tenemos un problema");
    }
    else {
        console.log("Podemos sobrevivir");
    }
    avengers = Number("123A");
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "Batman";
    var greenLantern = "Green Lantern";
    var volcanNegro = "H\u00E9roe: Volc\u00E1n Negro";
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No existe ese carácter");
})();
(function () {
    var hero = ["Doctor Strange", 100, true];
    hero[1] = 50;
    hero[0] = "Thor";
    hero[2] = false;
    console.log({ hero: hero });
})();
(function () {
    function callBatman() { }
    var callSuperman = function () { };
    var a = callBatman();
    var b = callSuperman();
    console.log({ a: a });
    console.log({ b: b });
})();
//# sourceMappingURL=main.js.map