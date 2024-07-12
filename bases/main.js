"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "¡¡¡Mundo salvado!!!";
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Lobezno", "Logan");
    const magneto = new Villain("Magneto", "Max Eisenhardt");
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 27) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} | ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} | ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `Getter y Setter: ${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 4) {
                throw new Error("El nombre debe tener más de 4 caracteres");
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `Nombre:${this.name} | Equipo:${this.team}`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis(name) {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis("El primer Apocalipsis");
    const apocalipsis2 = Apocalipsis.callApocalipsis("Sabina");
    const apocalipsis3 = Apocalipsis.callApocalipsis("Tortilla de patatas sin cebolla");
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map