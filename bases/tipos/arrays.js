"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log({ numbers: numbers });
    var villains = ["Joker", "Magneto", "Green Goblin", "Thanos"];
    villains.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
