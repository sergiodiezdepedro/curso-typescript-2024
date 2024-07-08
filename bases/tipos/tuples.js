"use strict";
(function () {
    var hero = ["Doctor Strange", 100, true];
    hero[1] = 50;
    hero[0] = "Thor";
    hero[2] = false;
    console.log({ hero: hero });
})();
