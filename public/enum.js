"use strict";
var enumVar;
(function (enumVar) {
    enumVar["name"] = "Shubham";
    enumVar["email"] = "shubham@gmail.com";
})(enumVar || (enumVar = {}));
let userData;
userData = enumVar.name;
console.log(userData);
console.log(userData === 'Shubham');
