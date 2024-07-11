"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = ["Captain America", "Hulk", "Thor"];
    const [capitan, hulk] = avengers;
    console.log({ hulk, capitan });
})();
(() => {
    const avengers = [
        "Captain America",
        true,
        150.6524,
    ];
    const [soyUnString, soyUnBoolean, soyUnNumber] = avengers;
    console.log({ soyUnString, soyUnNumber });
})();
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        poder: 500.34645,
    };
    const { poder, nick } = avengers;
    console.log(poder === null || poder === void 0 ? void 0 : poder.toFixed(2), nick.toUpperCase());
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avengers);
})();
(() => {
    const ironMan = {
        name: "Iron Man",
        weapon: "Inteligent Armor",
    };
    const captainAmerica = {
        name: "Captain America",
        weapon: "Shield",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [thor, captainAmerica, ironMan];
    for (const avenger of avengers) {
        console.log(avenger.name.toUpperCase(), avenger.weapon);
    }
})();
(() => {
    let a = 5;
    const name = "pezhammer";
    const getName = () => {
        console.log("getName 1");
    };
})();
//# sourceMappingURL=main.js.map