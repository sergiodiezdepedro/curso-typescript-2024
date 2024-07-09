"use strict";
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
