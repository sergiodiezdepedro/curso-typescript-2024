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
