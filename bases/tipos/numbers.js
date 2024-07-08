"use strict";
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
