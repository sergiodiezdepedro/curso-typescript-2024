"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greetings = function (name) { return "Hola ".concat(name, "."); };
    var saveTheWorld = function () { return "\u00A1El mundo se ha salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
