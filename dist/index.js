"use strict";
// Tipos Básicos
let age = 5;
const fisrtName = 'Guilherme';
const isValid = true;
let idk = 5;
idk = '21';
idk = true;
const ids = [1, 2, 3, 4,];
const booleans = [true, false, true];
const names = ['Ana', 'Guilherme'];
// Tupla
const person = [1, 'Ana'];
// Lista de Tuplas
const people = [
    [1, 'Ana'],
    [2, 'Guilherme'],
];
// Intersections
const productId = false;
// Enum
var Diretcion;
(function (Diretcion) {
    Diretcion[Diretcion["Up"] = 1] = "Up";
    Diretcion[Diretcion["Down"] = 2] = "Down";
})(Diretcion || (Diretcion = {}));
;
const direction = Diretcion.Up;
console.log(direction);
