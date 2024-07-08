"use strict";
(function () {
    function callBatman() { }
    var callSuperman = function () { };
    var a = callBatman();
    var b = callSuperman();
    console.log({ a: a });
    console.log({ b: b });
})();
