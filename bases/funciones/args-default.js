"use strict";
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
