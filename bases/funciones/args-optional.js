"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "XXX");
    };
    var name = fullName("Peter");
    console.log({ name: name });
})();
